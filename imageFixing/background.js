/**
 * @copyright (c) 2020 Xvezda <https://xvezda.com/>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
function next(name) {
  return name + 1;
}

const LOG_NONE = 0;
const LOG_DEBUG = next(LOG_NONE);
let logState = LOG_NONE;

if (logState === LOG_NONE) {
  console.log = () => {};
}


const manifest = chrome.runtime.getManifest();
const options = [
  'retry_limit',
  'gcinterval',
  'use_proxy',
];

let projectName = manifest['name'];
let totalStrategies = 4;
let garbageCollectorInterval = 5;
let maxRetries = 3;
let useProxy = true;

// Original image url
let originalUrl = {};

let previousDetails = {};

let errorImages = {};
let retryCounter = {};

// Load public suffixes
let publicSuffixes = [];
fetch('/datas/public_suffix_list.dat').then(response => {
  return response.text();
}).then(text => {
  publicSuffixes = text
    .split('\n')
    .filter(suffix => suffix && !suffix.startsWith('//'));
  console.log('suffixes loaded:', publicSuffixes);
});


function captureDetails(details) {
  previousDetails[details.requestId] = details;
}


function checkErrorCode(code) {
  return [400, 403, 404, 500, 502, 503, 504].some(x => code === x);
}


function checkExceeded(value) {
  if (value >= maxRetries || value >= totalStrategies) {
    return true;
  }
  return false;
}


function getRootDomain(hostname) {
  let tokens = hostname.split('.').reverse();
  let i = tokens.length;
  let rootDomain = '';
  do {
    rootDomain = tokens[tokens.length - i] + (rootDomain ? '.' + rootDomain : '');
    if (!publicSuffixes.includes(rootDomain)) break;
  } while (i--);
  if (!i) return hostname;
  return rootDomain;
}


function getCount(id) {
  return retryCounter[id];
}


function increaseCounter(id) {
  if (typeof retryCounter[id] === 'undefined') {
    retryCounter[id] = 0;
  } else {
    retryCounter[id] += 1;
  }
}


function removeCache(id) {
  // Remove caches
  delete previousDetails[id];
  delete originalUrl[id];
  delete errorImages[id];
  delete retryCounter[id];
}

function collectGarbage() {
  console.log('collecting garbage...');

  previousDetails = {};
  originalUrl = {};
  errorImages = {};
  retryCounter = {};
}

function createCollector() {
  console.log(`new gc created! - interval: ${garbageCollectorInterval}`);

  return setInterval(collectGarbage,
    garbageCollectorInterval * 60 /* s */ * 1000 /* ms */);
}

var garbageCollector = createCollector();


function messageHandler(message, sender, sendResponse) {
  console.log(message, sender, sendResponse);
  if (!message) return;
  switch (message.type) {
    case 'option_updated':
      chrome.storage.local.set({ [message.name]: message.data }, () => {
        updateOption(message.name, message.data);
      });
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(messageHandler);


function updateOption(name, value) {
  switch (name) {
    case 'retry_limit':
      maxRetries = parseInt(value || maxRetries);
      break;
    case 'use_proxy':
      useProxy = typeof value === 'undefined' ? true : value;
      break;
    case 'gcinterval':
      garbageCollectorInterval = parseInt(value || garbageCollectorInterval);

      // Re-generate gc
      clearInterval(garbageCollector);
      garbageCollector = createCollector();

      break;
    default:
      break;
  }
}


function loadOptions() {
  chrome.storage.local.get(options, result => {
    options.forEach(function(option) {
      updateOption(option, result[option]);
    });
    console.log('storage:', result);
  });
}

function initialize() {
  loadOptions();
}
initialize();


chrome.webRequest.onBeforeSendHeaders.addListener(details => {
  if (details.type !== 'image') return;
  console.log('onBeforeSendHeaders - before processing:', details);
  if (typeof errorImages[details.requestId] !== 'undefined') {
    const url = new URL(originalUrl[details.requestId]);
    switch (retryCounter[details.requestId]) {
      case 0: {  // First strategy: Same origin
        // Get origin from url
        const origin = url.origin;

        for (let i = 0; i < details.requestHeaders.length; ++i) {
          if (details.requestHeaders[i].name.toLowerCase() === 'referer') {
            details.requestHeaders[i].value = origin;
            captureDetails(details);

            return { requestHeaders: details.requestHeaders };
          }
        }
        // If referer not exists
        // Make one
        details.requestHeaders.push({ name: 'Referer', value: origin });
        captureDetails(details);

        return { requestHeaders: details.requestHeaders };

        break;
      }
      case 1: {  // Second strategy: Root referer
        // Get hostname from url
        const hostname = url.hostname;

        // Extract root domain
        const rootDomain = getRootDomain(hostname);
        const newReferer = `${url.protocol}//${rootDomain}` +
          (url.port ? `:${url.port}` : '');

        for (let i = 0; i < details.requestHeaders.length; ++i) {
          if (details.requestHeaders[i].name.toLowerCase() === 'referer') {
            details.requestHeaders[i].value = newReferer;
            captureDetails(details);

            return { requestHeaders: details.requestHeaders };
          }
        }
        // If referer not exists
        // Make one
        details.requestHeaders.push({ name: 'Referer', value: newReferer });
        captureDetails(details);

        return { requestHeaders: details.requestHeaders };

        break;
      }
      case 2: {  // Third strategy: Request without referer
        for (let i = 0; i < details.requestHeaders.length; ++i) {
          if (details.requestHeaders[i].name.toLowerCase() === 'referer') {
            details.requestHeaders.splice(i, 1);
          }
        }
        return { requestHeaders: details.requestHeaders };
        break;
      }
      case 3: {  // Fourth strategy: Change protocol
        const protocol = url.protocol.slice(0, -1);
        let convProto = 'https';
        if (protocol === 'https') {
          convProto = 'http';
        }
        // Remove referer when downgrade
        if (convProto === 'http') {
          for (let i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name.toLowerCase() === 'referer') {
              details.requestHeaders.splice(i, 1);
            }
          }
        }
        const redirectUrl = `${convProto}://${url.href.slice(url.protocol.length+2)}`;
        console.log('redirecting:', redirectUrl);
        increaseCounter(details.requestId);

        if (checkExceeded(retryCounter[details.requestId])) {
          removeCache(details.requestId);
          // Cancel when max-retries exceeded
          return {
            cancel: true,
          }
        }
        return {
          redirectUrl: redirectUrl,
          requestHeaders: details.requestHeaders,
        };
        break;
      }
      default: {  // Always exit if out of strategies
        removeCache(details.requestId);
        // Cancel when max-retries exceeded
        return {
          cancel: true,
        }
        break;
      }
    }
  }
}, {
  urls: ["*://*/*"]
}, ['blocking', 'requestHeaders', 'extraHeaders']);


chrome.webRequest.onHeadersReceived.addListener(details => {
  if (details.type !== 'image') return;
  if (!checkErrorCode(details.statusCode)) return;
  console.log('onHeadersReceived:', details);

  // Temporarily store reponse details
  errorImages[details.requestId] = details;

  // Store original url on first request
  if (!getCount(details.requestId)) {
    originalUrl[details.requestId] = details.url;
  }

  increaseCounter(details.requestId);
  captureDetails(details);

  if (checkExceeded(retryCounter[details.requestId])) {
    console.log(`recovering image failed :( -> id: ${details.requestId}`);
    removeCache(details.requestId);
    // Cancel when max-retries exceeded
    return {
      cancel: true,
    }
  }
  return {
    redirectUrl: details.url,  // Retry
  };
}, {
  urls: ["*://*/*"]
}, ['blocking', 'responseHeaders']);


chrome.webRequest.onCompleted.addListener(details => {
  if (!Object.keys(originalUrl).includes(details.requestId)) return;
  if (checkErrorCode(details.statusCode)) return;

  console.log(`purge cache -> id: ${details.requestId}`);
  // Clear caches
  removeCache(details.requestId);
}, {
  urls: ["*://*/*"]
}, ['responseHeaders']);


chrome.webRequest.onErrorOccurred.addListener(details => {
  // Replace blocked image with proxy
  if (details.error === 'net::ERR_CONNECTION_RESET') {
    if (!useProxy) return;
    let code = `
      (function() {
        let proxyUrl = "https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&resize_h=0&rewriteMime=image%2F*&url=";
        let targetSrc = "${encodeURIComponent(details.url)}";
        let images = document.querySelectorAll("img");
        for (let i = 0; i < images.length; ++i) {
          if (encodeURIComponent(images[i].src) === targetSrc) {
            images[i].src = proxyUrl + targetSrc;
            break;
          }
        }
      })();
    `;
    chrome.tabs.executeScript(details.tabId, { code: code }, result => {});
  }
}, {
  urls: ["*://*/*"]
});
