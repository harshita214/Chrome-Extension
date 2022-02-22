import {config} from '../src/config.js';
import {isChromeOS} from '../src/helpers.js';

$(() => {
    initDefaultSettings();

    $('#extension-status').on('change', (e) => {
        if (!isChromeOS()) {
           chrome.runtime.sendMessage('askSelfUninstall', (response) => {
               if (response) {
                   e.currentTarget.checked = true;
               }
           });
           return;
        }

        return e.currentTarget.checked ?
            localStorage.setItem(e.currentTarget.value, '1')
            : localStorage.removeItem(e.currentTarget.value);
    });

    $('.learn-more, .logo').on('click', () => chrome.tabs.create({url: config.home}));
    $('.footer ul li').on('click', (e) => chrome.tabs.create({url: `${config.gdpr}/${e.currentTarget.title}?s=${config.yid}`}));
});


const initDefaultSettings = () => {
    $('#extension-status').attr('checked', !!localStorage.getItem('extension_status'));
};