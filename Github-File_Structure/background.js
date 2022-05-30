!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}({1:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const r={SEND_REQUEST:"octotree_send_request"};async function o({method:e,path:t,body:n,token:r},o){try{const s={"Content-Type":"application/json"};r&&(s.Authorization="Bearer "+r);const i=await fetch("https://www.octotree.io/api/v1.0/"+t.replace(/^\//,""),{headers:s,body:n,method:e}),c=i.headers.get("Content-Type");let a;if(a=/application\/json/i.test(c)?await i.json():await i.text(),!i.ok){const e=new Error(a.message||a.statusText||a);throw e.statusCode=i.status,e}o({responseBody:a,responseStatus:i.status})}catch(e){o({message:e.message,statusCode:e.statusCode})}}},24:function(e,t,n){"use strict";n.r(t);var r=n(1);function o(){var e,t;const n=chrome.runtime.getManifest(),r={origins:[],permissions:[]},o=new Set([...null!==(e=n.permissions)&&void 0!==e?e:[],...(null!==(t=n.content_scripts)&&void 0!==t?t:[]).flatMap(e=>{var t;return null!==(t=e.matches)&&void 0!==t?t:[]})]);for(const e of o)e.includes("://")?r.origins.push(e):r.permissions.push(e);return r}chrome.runtime.onMessage.addListener((e,t,n)=>{if(e.eventName===r.a.SEND_REQUEST)return Object(r.b)(e,n),!0;n()}),chrome.runtime.setUninstallURL("https://github.com/");const s=g(chrome.permissions.remove),i=g(chrome.permissions.contains),c=g(chrome.tabs.get),a=g(chrome.tabs.reload),u=g(chrome.tabs.executeScript),d=g(chrome.tabs.insertCSS),m="octotree-ghe-toggle:add-permission";let l=!1;async function f({wasChecked:e,menuItemId:t},n){if(t!==m||!n)return;const r=new URL(n.url);if(!y(r))return;const{origin:o}=r;if(e){await s({origins:[o+"/*"]})&&(chrome.contextMenus.update(m,{checked:!1}),a(n.id))}else chrome.permissions.request({permissions:["webNavigation"],origins:[o+"/*"]},()=>{chrome.runtime.lastError||(b(),a(n.id))})}async function h({tabId:e}){try{const{origin:t}=await p(e),n=(await async function(){return o()}()).origins.some(e=>e.startsWith(t));chrome.contextMenus.update(m,{enabled:!n,checked:await i({origins:[t+"/*"]})})}catch(e){chrome.contextMenus.update(m,{checked:!1,enabled:!0})}}async function p(e){let{url:t}=await c(e);return t||([t]=await u(e,{code:"location.href"})||[]),new URL(t)}function b(){chrome.webNavigation&&!l&&(l=!0,chrome.webNavigation.onCommitted.addListener(async({tabId:e,frameId:t})=>{try{if(0!==t)return;const n=await p(e);if(!y(n))return;const{origin:r}=n;if(!await i({origins:[r+"/*"]}))return;const o=chrome.runtime.getManifest().content_scripts;for(const t of o){const{all_frame:n,run_at:r,css:o,js:s}=t;o.forEach(t=>d(e,{file:t,allFrames:n,runAt:r})),s.forEach(t=>u(e,{file:t,allFrames:n,runAt:r}))}}catch(e){}}))}function g(e){return(...t)=>new Promise((n,r)=>{const o=e=>{chrome.runtime.lastError?r(chrome.runtime.lastError):n(e)},s=e(...t,o);s&&s.then&&s.then(o)})}chrome.contextMenus.onClicked.addListener(f),chrome.tabs.onActivated.addListener(h),chrome.tabs.onUpdated.addListener((e,{status:t})=>{"complete"===t&&h({tabId:e})}),function(){const{name:e}=chrome.runtime.getManifest();chrome.contextMenus.remove(m,()=>chrome.runtime.lastError),chrome.contextMenus.create({id:m,type:"checkbox",checked:!1,title:`Enable ${e} on this domain`,contexts:["page_action","browser_action"],documentUrlPatterns:["http://*/*","https://*/*"]})}(),b();const w=["api.github.com","www.octotree.io"];function y({protocol:e,host:t}){return e.includes("http")&&!w.includes(t)}}});