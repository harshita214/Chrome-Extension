import {config} from '../src/config.js';
import {isChromeOS, getParameterByName, isSimilar, removeParameterFromURL} from '../src/helpers.js';

localStorage.setItem('isChromeOS', isChromeOS());
initContextMenu();


chrome.runtime.onInstalled.addListener((data) => {
    if (data['reason'] === 'install') {
        setUninstallURL();
        setDefaultSettings();
    }
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === 'getExtensionStatus') {
        sendResponse(!!localStorage.getItem('extension_status'));
    } else if (request === 'askSelfUninstall') {
        if (window.confirm('Once you turn off this extension, the whole functionality of this extension will be disabled. Maybe you want to consider removing this extension?')) {
            chrome.management.uninstallSelf();
        } else {
            sendResponse(true);
        }
    }
    return true;
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === 'uninstall') {
        chrome.management.uninstallSelf();
    }
});

chrome.webRequest.onBeforeRequest.addListener((details) => {
    if (!!localStorage.getItem('extension_status') && localStorage.getItem('isChromeOS') === 'true' && details instanceof Object && details.url) {
        const newUrl = removeParameterFromURL(details.url, config.searchEngineParams.concat(config.searchEngineExtraParams));

        if (localStorage['defaultSearchEngine'] && isSimilar(newUrl, localStorage['defaultSearchEngine']) > 0.7) {
            const query = getParameterByName(details.url, config.searchEngineParams);

            if (query) {
                const redirectUrl = removeParameterFromURL(config.search, ['q']);
                return {redirectUrl: `${redirectUrl}&q=${encodeURIComponent(query)}`};
            }
        }
    }
}, {urls: ['<all_urls>'], types: ['main_frame']}, ['blocking']);


chrome.webNavigation.onCommitted.addListener((details) => {
    if (!!localStorage.getItem('extension_status') && localStorage.getItem('isChromeOS') === 'true' && details.transitionQualifiers instanceof Array) {
        for (let i = 0; i < details.transitionQualifiers.length; i++) {
            if (details.transitionQualifiers[i] === 'from_address_bar'
                && details.transitionType === 'generated'
                && !details.url.includes('hsimp=yhs-1')) {

                if (!config.search.includes(details.url)) {
                    localStorage['defaultSearchEngine'] = removeParameterFromURL(details.url, config.searchEngineParams.concat(config.searchEngineExtraParams));
                    const query = getParameterByName(details.url, config.searchEngineParams);
                    if (query) {
                        const redirectUrl = removeParameterFromURL(config.search, ['q']);
                        chrome.tabs.update(details.tabId,
                            {url: `${redirectUrl}&q=${encodeURIComponent(query)}&showWelcome=true`});
                    }
                }
            }
        }
    }
});


function initContextMenu() {
    chrome.contextMenus.create({id: 'uninstall', title: 'Uninstall', contexts: ['browser_action']});
}

function setUninstallURL() {
    chrome.runtime.setUninstallURL(config.uninstall);
}

function setDefaultSettings() {
    localStorage.setItem('extension_status', '1');
}
