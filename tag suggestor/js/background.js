'use strict';
 
class Chrome {
    constructor () {
        this.browser = typeof browser === 'undefined' ? 'chrome' : 'firefox'
        this.chrome = typeof browser === 'undefined' ? chrome : browser
        this.portConnector = typeof chrome.runtime === 'undefined' ? chrome.extension : chrome.runtime
    }

    /**
     * set badge text
     * @param text
     * @param tabId
     */
    setBadge (text, tabId) {
        this.chrome.browserAction.setBadgeText({
            text: text,
            tabId: tabId
        })
    }

    openSettings () {
        this.openTab('chrome://extensions/?options=' + this.chrome.runtime.id, true)
    }

    setFocus (tabId) {
        this.chrome.tabs.update(tabId, {active: true})
    }

    addListenerOnConnect (callback) {
        this.chrome.runtime.onConnect.addListener(callback)
    }

    addListenerBrowserActionOnClicked (callback) {
        this.chrome.browserAction.onClicked.addListener(callback)
    }

    sendMessageToTab (tabId, message) {
        this.chrome.tabs.sendMessage(tabId, message)
    }

    injectScripts (tabId, scripts) {
        const self = this
        scripts.forEach(function (script) {
            self.chrome.tabs.executeScript(tabId, {
                file: script
            })
        })
    }

    insertCSS (tabId, styles) {
        const self = this
        styles.forEach(function (style) {
            self.chrome.tabs.insertCSS(tabId, {
                file: style
            })
        })
    }

    addListenerOnInstalled (callback) {
        this.chrome.runtime.onInstalled.addListener(callback)
    }

    contextMenuCreate (settings) {
        this.chrome.contextMenus.create(settings)
    }

    contextMenusAddListenerOnClicked (callback) {
        this.chrome.contextMenus.onClicked.addListener(callback)
    }

    getAllWindows (callback, populate = true) {
        this.chrome.windows.getAll({populate: populate}, callback)
    }

    getManifest () {
        return this.chrome.runtime.getManifest()
    }

    showNotification(id, title, message, icon) {
        this.chrome.notifications.create(id, {
            iconUrl: icon,
            type: 'basic',
            title: title,
            message: message
        }, (id) => {
            // console.log(id)
        })
    }

    getIcon(url) {
        return this.chrome.extension.getURL(url)
    }

    fetchImageAsBase64 (url, callback) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.responseType = 'blob'
        xhr.onload = function () {
            if (this.status === 200) {
                try {
                    const blob = this.response
                    const reader = new FileReader()
                    reader.readAsDataURL(blob)
                    reader.onload = function () {
                        const base64String = reader.result.split(',').pop()
                        callback(null, base64String)
                    }
                } catch (err) {
                    console.log('cancelled')
                }
            }
        }
        xhr.onerror = function (e) {
            callback(e, null)
        }
        xhr.send()
    }

    createIdentifier (prefix = '') {
        return prefix + this.guid()
    }

    isChrome () {
        return typeof browser === 'undefined'
    }

    getStore () {
        const isChrome = this.isChrome()
        return {
            name: isChrome ? 'Chrome Store' : 'FireFox Add-ons',
            url: isChrome ? 'https://chrome.google.com/webstore/detail/ritetag/hclhpnhohpmlbadmeieecaandnglfodm/reviews' : 'https://addons.mozilla.org/en-US/firefox/addon/ritetag-ritekit/'
        }
    }

    openTab (url, active) {
        this.chrome.tabs.create({
            url: url,
            active: active
        })
    }

    getVersion () {
        var manifestData = this.chrome.runtime.getManifest()
        return `${this.browser}-${manifestData.version}`
    }

    guid () {
        function s4 () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4()
    }
}


class RitekitClient {
    constructor (storage, version) {
        this.storage = storage
        storage.load('clientId', (result) => {
            this.clientId = result['clientId']
        })
        this.clientId = null
        this.version = version
        this.sessionApiEndpoint = 'https://ritetag.com/api'
        this.tokenApiEndpoint = 'https://api.ritekit.com'
        this.ajaxCalls = {}
    }

    getBaseUri () {
        return this.clientId ? this.tokenApiEndpoint : this.sessionApiEndpoint
    }

    checkUrl (url) {
        if (/^(https:\/\/|http:\/\/)/i.test(url)) {
            return url
        } else {
            return this.getBaseUri() + url
        }
    }

    hasToken () {
        return !!this.clientId
    }

    logout () {
        const request = this.makeRequest('GET', '/v1/user/logout')
        request.always(() => {
            this.setToken(null)
        })
        return request
    }

    webLogout () {
        return $.get('https://ritekit.com/sign/out')
    }

    async setToken (clientId) {
        this.clientId = clientId
        await this.storage.save({clientId: clientId})
    }

    urlencode (string) {
        return (encodeURIComponent(string)).replace(' ', '+').replace('(', '%28').replace(')', '%29').replace('!', '%21').replace('*', '%2A').replace('\'', '%27')
    }

    urldecode (string) {
        return (decodeURIComponent(string)).replace('%28', '(').replace('%29', ')').replace('%21', '!').replace('%2A', '*').replace('%27', '\'')
    }

    clearCache (hashtag, ajaxCalls) {
        return () => {
            delete ajaxCalls[hashtag]
            return true
        }
    }

    setCache (hashtag, ajaxCalls) {
        return function (data, textStatus, jqXHR) {
            let expires
            if (data.code !== 200) {
                delete ajaxCalls[hashtag]
                return false
            }
            expires = jqXHR.getResponseHeader('Expires')
            if (typeof ajaxCalls[hashtag] !== 'undefined' && expires) {
                ajaxCalls[hashtag].t = new Date(expires)
            }
            return true
        }
    }

    makeRequest (method, url, params = {}) {
        const self = this
        url = this.checkUrl(url)

        if (this.clientId) {
            url += `?client_id=${this.clientId}&app_source=RiteTag Extension-${this.version}`
        } else {
            url += `?app_source=RiteTag Extension-${this.version}`
        }

        let request = {
            type: method,
            crossDomain: true,
            url: url,
            data: params,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            statusCode: {
                401: function () {
                    self.setToken(null).then(() => {
                        console.log('token removed')
                    })
                }
            }
        }

        if (method === 'POST') {
            request.url = url
            request.data = JSON.stringify(params)
            request.headers = {
                'Content-Type': 'application/json'
            }
        }
        return $.ajax(request)
    }

    stats (hashtag, params) {
        let ajax, ct
        if (typeof this.ajaxCalls[hashtag] !== 'undefined') {
            ct = new Date()
            if (ct.getTime() < this.ajaxCalls[hashtag].t.getTime() + 1000) {
                return this.ajaxCalls[hashtag].ajax
            } else {
                this.clearCache(hashtag, this.ajaxCalls)()
            }
        }
        ajax = this.makeRequest('GET', '/v1/stats/basic/' + this.urlencode(hashtag), params)
        this.ajaxCalls[hashtag] = {
            ajax: ajax,
            t: new Date()
        }
        ajax.done(this.setCache(hashtag, this.ajaxCalls))
        return ajax
    }

    info (startTrial = false, params = {}) {
        if (startTrial) {
            params.startTrial = 'TAG'
        }
        return this.makeRequest('GET', '/v1/user/info', params)
    }

    suggestions (params) {
        return this.makeRequest('POST', '/v2/stats/hashtag-suggestions', params)
    }

    hashtagsFromImage (params) {
        return this.makeRequest('POST', '/v2/stats/hashtag-suggestions', params)
    }

    logHashtagSuggestions (params) {
        return this.makeRequest('POST', '/v2/stats/log', params)
    }

    availableLanguages () {
        return this.makeRequest('GET', '/v1/stats/available-languages')
    }
}

// Source: shared/js/libs/Suggestion.js
class Suggestion {
    constructor (client) {
        this.client = client
        this.trialChecked = false
    }

    checkTrial () {
        return new Promise((resolve, reject) => {
            if (this.trialChecked) {
                resolve()
                return
            }
            this.client.info(true).done(() => {
                this.trialChecked = true
                resolve()
            }).fail(() => {
                this.trialChecked = false
                reject()
            })
        })
    }

    getSuggestion (request) {
        // console.log('--- REQUEST ---')
        // console.log(request)
        // console.log('---         ---')
        return new Promise((resolve, reject) => {
            this.checkTrial().then(() => {
                this._getSuggestion(request)
                    .then(resolve)
                    .catch(reject)
            }).catch(() => {
                reject({
                    result: false,
                    error: {
                        type: 'code',
                        code: 'login-required'
                    },
                    hashtag: request.object,
                    type: request.type,
                    suggestions: []
                })
            })
        })
    }

    _getSuggestion (request) {
        const self = this
        return new Promise((resolve, reject) => {
            switch (request.type) {
            case 'text':
                self.processText(request.object, request.domain)
                    .then(resolve)
                    .catch(reject)
                break
            case 'image':
                self.processImage(request.object, request.language, request.domain)
                    .then(resolve)
                    .catch(reject)
                break
            default:
                reject({
                    result: false,
                    error: '',
                    hashtag: false,
                    suggestions: []
                })
                break
            }
        })
    }

    getErrorMessage (jqXHR) {
        /// TODO process custom error from server
        switch (jqXHR.status) {
        case 401:
        case 403:
            return {
                type: 'code',
                code: 'login-required'
            }
        case 402:
            return {
                type: 'code',
                code: 'upgrade-required'
            }
        case 500:
            return {
                type: 'code',
                code: 'server-error'
            }
        default:
            return {
                type: 'message',
                code: 'Something went wrong. (b)' // TODO
            }
        }
    }

    processText (text, domain) {
        const self = this
        return new Promise((resolve, reject) => {
            if (text.length > 1000) {
                reject({
                    result: false,
                    error: {
                        type: 'message',
                        text: 'Hashtag suggestions not available for texts over 1000 characters.'
                    },
                    hashtag: text,
                    type: 'text',
                    suggestions: []
                })
            } else {
                self.client
                    .suggestions({text: text, domain: domain})
                    .done((json) => {
                        resolve({
                            result: true,
                            hashtag: text,
                            type: 'text',
                            suggestions: json.data.map((tag) => {
                                return {
                                    hashtag: tag.hashtag,
                                    grade: tag.color
                                }
                            })
                        })
                    }).fail((jqXHR) => {
                        reject({
                            result: false,
                            error: this.getErrorMessage(jqXHR),
                            hashtag: text,
                            type: 'text',
                            suggestions: []
                        })
                    })
            }
        })
    }

    processImage (image, language, domain) {
        const self = this
        // console.log(image);
        if (image.indexOf(',') > -1) {
            // TODO
            image = image.split('base64,').pop()
        }
        return new Promise((resolve, reject) => {
            self.client
                .hashtagsFromImage({image: image, language: language, domain: domain})
                .done((json) => {
                    resolve({
                        result: true,
                        hashtag: image,
                        type: 'image',
                        suggestions: json.data.map((tag) => {
                            return {
                                hashtag: tag.hashtag,
                                grade: tag.color
                            }
                        })
                    })
                }).fail((jqXHR) => {
                    reject({
                        result: false,
                        error: this.getErrorMessage(jqXHR),
                        hashtag: image,
                        type: 'image',
                        suggestions: []
                    })
                })
        })
    }

    async logHashtags (allHashtags, selectedHashtags) {
        try {
            const response = this.client.log({
                allHashtags: allHashtags,
                selectedHashtags: selectedHashtags
            })
            return response.result
        } catch (e) {
            console.log(e)
            return false
        }
    }
}

 

class GeneralStorage {
    save (items, callback = null) {
        const promise = new Promise(resolve => {
            if (typeof safari !== 'undefined') {
                for (var key in items) {
                    if (items.hasOwnProperty(key)) {
                        var val = items[key]
                        if (typeof val === 'object') {
                            localStorage.setItem(key, JSON.stringify(val))
                        } else {
                            localStorage.setItem(key, val)
                        }
                    }
                }
                resolve(items)
                return
            }
            chrome.storage.sync.set(items, resolve)
        })
        if (callback) {
            promise.then(callback)
        }
        return promise
    }

    load (keys, callback = null) {
        const promise = new Promise(resolve => {
            if (typeof safari !== 'undefined') {
                var results = {}
                if (typeof keys === 'string') { // just single string
                    results[keys] = JSON.parse(localStorage.getItem(keys))
                } else { // array
                    for (var key in keys) {
                        results[key] = localStorage.getItem(key)
                        if (typeof results[key] === 'object') {
                            results[key] = JSON.parse(localStorage.getItem(key))
                        }
                    }
                }
                resolve(results)
                return
            }
            chrome.storage.sync.get(keys, resolve)
        })
        if (callback) {
            promise.then(callback)
        }
        return promise
    }
}
 
class NamedStorage {

    constructor (storageName, defaultItems = null) {
        this.storageKeyName = storageName
        this.initializedKeyName = `${storageName}Initialized`
        this._defaultList = []
        this._whitelist = []
        this._storage = false
        this.setStorage(new GeneralStorage())
        this._defaultItems = defaultItems
    }

    setStorage (storage) {
        this._storage = storage
        const self = this
        storage.load(this.storageKeyName, (items) => {
            if (items) {
                self.setList(items[self.storageKeyName])
            }
        })
        this.isInitialized()
    }

    getStorage () {
        return this._storage
    }

    getList (st) {
        if (st) {
            return this._whitelist
        }
        return this._defaultList.concat(this._whitelist)
    }

    setList (list, upgrade) {
        if (list) {
            this._whitelist = list
            if (upgrade) {
                this.save()
            }
        }
    }

    addItem (host) {
        if (this.constains(host)) {
            return
        }
        // host = this.normalizeHost(host)
        this._whitelist.push(host)
        if (this._storage) {
            this.save()
        }
    }

    removeItem (host) {
        // host = this.normalizeHost(host)
        const index = this._whitelist.indexOf(host)
        if (index > -1) {
            this._whitelist.splice(index, 1)
            this.save()
        }
    }

   

    constains (host) {
         
        return this.getList().indexOf(host) > -1
    }

    save () {
        if (!this._storage) {
            return
        }
        const item = {}
        item[this.storageKeyName] = this._whitelist
        this._storage.save(item, () => {
        })
    }

    isInitialized () {
        const self = this
        this._storage.load(this.initializedKeyName, function (items) {
            if (!items || !items[self.initializedKeyName]) {
                const item = {}
                item[self.initializedKeyName] = true
                self._storage.save(item, () => {});
                if (self._defaultItems) {
                    self._defaultItems.forEach((host) => self.addItem(host))
                }
            }
        })
    }
}

 
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = Whitelist
}
 
const SKIP_TIME = 604800000
const STORAGE_KEY = 'language-data'

class Language {
    /**
     * @param {GeneralStorage} storage
     * @param {RitekitClient} ritekitClient
     */
    constructor (storage, ritekitClient) {
        this.storage = storage
        this.ritekitClient = ritekitClient

        this.loadData().then(data => {
            this.data = data
        })
    }

    async getLanguages () {
        if (this.data.languages == null || (this.data.lastupdate < Date.now())) {
            this.data.languages = await this.ritekitClient.availableLanguages()
            this.data.lastupdate = Date.now() + SKIP_TIME
        }
        this.saveData()
        return this.data.languages
    }

    async loadData () {
        const data = await this.storage.load(STORAGE_KEY)
        if (data && data[STORAGE_KEY]) {
            return data[STORAGE_KEY]
        } else {
            return {
                lastupdate: Date.now(),
                languages: null,
                language: 'en'
            }
        }
    }

    async saveData () {
        const result = await this.storage.save({STORAGE_KEY: this.data})
        return result || true
    }

    getLanguage () {
        if (typeof safari !== 'undefined') {
            return safari.extension.settings.language
        }
        return this.data.language
    }

    setLanguage (language) {
        this.data.language = language
        this.saveData()
    }
}

 
class Blacklist {
    constructor (storage = false) {
        this.storageKeyName = 'blacklist'
        this.initializedKeyName = 'blacklistInitialized'
        this._defaultList = [
            'ritetag.com'
        ]
        this._blacklist = []
        this._storage = false
        if (storage) {
            this.setStorage(storage)
        }
    }

    setStorage (storage) {
        this._storage = storage
        const self = this
        storage.load(this.storageKeyName, (items) => {
            if (items) {
                self.setList(items[self.storageKeyName])
            }
        })
        this.isInitialized()
    }

    getStorage () {
        return this._storage
    }

    getList (st) {
        if (st) {
            return this._blacklist
        }
        return this._defaultList.concat(this._blacklist)
    }

    setList (list, upgrade) {
        if (list) {
            this._blacklist = list
            if (upgrade) {
                this.save()
            }
        }
    }

    addItem (host) {
        if (this.isBlocked(host)) {
            return
        }
        host = this.normalizeHost(host)
        this._blacklist.push(host)
        if (this._storage) {
            this.save()
        }
    }

    removeItem (host) {
        host = this.normalizeHost(host)
        const index = this._blacklist.indexOf(host)
        if (index > -1) {
            this._blacklist.splice(index, 1)
            this.save()
        }
    }

    normalizeHost (host) {
        /* TODO */
        return host
    }

    isBlocked (host) {
        host = this.normalizeHost(host)
        return this.getList().indexOf(host) > -1
    }

    save () {
        if (!this._storage) {
            return
        }
        const item = {}
        item[this.storageKeyName] = this._blacklist
        this._storage.save(item, () => {
        })
    }

    isInitialized () {
        const self = this
        this._storage.load(this.initializedKeyName, function (items) {
            if (!items || !items[self.initializedKeyName]) {
                const item = {}
                item[self.initializedKeyName] = true
                self._storage.save(item, () => {});
                [
                    'slack.com',
                    'asana.com',
                    'github.com',
                    'gitlab.com',
                    'bitbucket.org',
                    'gmail.com',
                    'inbox.gmail.com',
                    'hotmail.com',
                    'outlook.com',
                    'docs.google.com',
                    'blogger.com',
                    'wordpress.com',
                    'medium.com',
                    'mail.yahoo.com'
                ].forEach((host) => self.addItem(host))
            }
        })
    }
}

 
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = Blacklist
}
 
/**
 * @author Pavel Houžva
 * @version 1.0.0
 */
class Whitelist {

    constructor (storage = false) {
        this.storageKeyName = 'whitelists'
        this.initializedKeyName = 'whitelistsInitialized'
        this._defaultList = []
        this._whitelist = []
        this._storage = false
        if (storage) {
            this.setStorage(storage)
        }
    }

    setStorage (storage) {
        this._storage = storage
        const self = this
        storage.load(this.storageKeyName, (items) => {
            if (items) {
                self.setList(items[self.storageKeyName])
            }
        })
        this.isInitialized()
    }

    getStorage () {
        return this._storage
    }

    getList (st) {
        if (st) {
            return this._whitelist
        }
        return this._defaultList.concat(this._whitelist)
    }

    setList (list, upgrade) {
        if (list) {
            this._whitelist = list
            if (upgrade) {
                this.save()
            }
        }
    }

    addItem (host) {
        if (this.isAllowed(host)) {
            return
        }
        host = this.normalizeHost(host)
        this._whitelist.push(host)
        if (this._storage) {
            this.save()
        }
    }

    removeItem (host) {
        host = this.normalizeHost(host)
        const index = this._whitelist.indexOf(host)
        if (index > -1) {
            this._whitelist.splice(index, 1)
            this.save()
        }
    }

    normalizeHost (host) {
        try {
            const uHost = /^http/g.test(host) ? host : `http://${host}`
            const url = new URL(uHost)
            return url.host
        } catch (e) {
            return host
        }
    }

    isAllowed (host) {
        host = this.normalizeHost(host)
        return this.getList().indexOf(host) > -1
    }

    save () {
        if (!this._storage) {
            return
        }
        const item = {}
        item[this.storageKeyName] = this._whitelist
        this._storage.save(item, () => {
        })
    }

    isInitialized () {
        const self = this
        this._storage.load(this.initializedKeyName, function (items) {
            if (!items || !items[self.initializedKeyName]) {
                const item = {}
                item[self.initializedKeyName] = true
                self._storage.save(item, () => {});

                [
                    'twitter.com',
                    'tweetdeck.twitter.com',
                    'hootsuite.com/dashboard',
                    'app.sproutsocial.com',
                    'buffer.com',
                    'panel.socialpilot.co',
                    'app.sendible.com',
                    'social.zoho.com/social',
                    'http://www.socialoomph.com',
                    'eclincher.com',
                    'ifttt.com',
                    'ntuitive.social'
                ].forEach((host) => self.addItem(host))
            }
        })
    }
}

 
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = Whitelist
}

 

class ContextMenus {

    /**
     *
     * @param chrome Chrome
     */
    constructor (chrome) {
        this.chrome = chrome
    }

    createContextMenu () {
        if (typeof safari !== 'undefined') return
        this.chrome.contextMenuCreate({
            title: 'Generate Hashtags',
            id: 'RitetagMenuWidgetHashtagSuggestions',
            contexts: ['all']
        })
    }

    registerOnClickListener (callback) {
        if (typeof safari !== 'undefined') {
            this.registerSafariClickListener(callback)
            return
        }
        this.chrome.contextMenusAddListenerOnClicked(function (info, tab) {
            if (info.menuItemId === 'RitetagMenuWidgetHashtagSuggestions') {
                callback(info, tab)
            }
        })
    }

    registerSafariClickListener (callback) {
        safari.application.addEventListener('command', function (tab) {
            if (tab.command && tab.command !== 'RitetagMenuWidgetHashtagSuggestions') return
            callback(tab, tab.target)
        }, false)
    }
}

 
function copyTextToClipboard (text, element = null) {
    var textArea = document.createElement('textarea')
 
    textArea.style.position = 'fixed'
    textArea.style.top = 0
    textArea.style.left = 0
 
    textArea.style.width = '2em'
    textArea.style.height = '2em'

   
    textArea.style.padding = 0

  
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.id = 'riteTagExtensionWidgetTempCopyArea'
 
    textArea.style.background = 'transparent'

    textArea.value = text
    if (element) {
        element.append(textArea)
    } else {
        document.body.appendChild(textArea)
    }
    textArea.select()
    var successful = false
    try {
        successful = document.execCommand('copy')
        var msg = successful ? 'successful' : 'unsuccessful'
        console.log('Copying text command was ' + msg)
    } catch (err) {
        console.log('Oops, unable to copy')
    }

    if (window.getSelection && window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges()
    }
    if (element) {
        element.removeChild(textArea)
    } else {
        document.body.removeChild(textArea)
    }
    return successful
}
 
const chromeObject = new Chrome()

const generalStorage = new GeneralStorage()

const background = {
    chrome: chromeObject,
    client: new RitekitClient(generalStorage, chromeObject.getVersion()),
    blacklist: new Blacklist(generalStorage),
    whitelist: new Whitelist(generalStorage),
    reports: new NamedStorage('reports'),
    storage: generalStorage,
    contextMenus: false
}

if (typeof safari === 'undefined') {
    background.manifest = chrome.runtime.getManifest()
}

background.language = new Language(background.storage, background.client)

const storage = {
    lastObject: {
        type: 'nothing'
    }
}

background.suggestion = new Suggestion(background.client)
background.contextMenus = new ContextMenus(background.chrome)

background.contextMenus.registerOnClickListener((info, tab) => {
    background.chrome.sendMessageToTab(tab.id, {
        from: 'background',
        action: 'state',
        state: 'loading'
    })
    setTimeout(() => {
        const request = storage.lastObject
        request.language = background.language.getLanguage()
        storage.lastObject = {
            type: 'nothing'
        }
        background.suggestion.getSuggestion(request)
            .then((message) => {
                message.from = 'background'
                message.action = 'hashtags'
                background.chrome.sendMessageToTab(tab.id, message)
            }).catch((message) => {
                message.from = 'background'
                message.action = 'hashtags'
                background.chrome.sendMessageToTab(tab.id, message)
            })
    }, 100)
})

background.contextMenus.createContextMenu()

 

function listenPort (port) {
    if (port.name !== 'riteforge-connect') {
        return
    }
    port.onMessage.addListener((message) => {
        try {
            switch (message.action) {
            case 'test':
                port.postMessage({id: message.id, result: true})
                break
            case 'logout':
                // console.log('LOGOUT')
                if (background.client.hasToken()) {
                    background.client.logout()
                } else {
                    background.client.webLogout()
                }
                port.postMessage({id: message.id, result: true})
                break
            case 'user-info':
                background.client.info()
                    .then(
                        info => port.postMessage({id: message.id, result: true, user: info.user}),
                        err => port.postMessage({id: message.id, result: false, user: {}, error: err})
                    )
                break
            case 'save-token':
                background.client.setToken(message.payload.clientId)
                    .then(
                        () => port.postMessage({id: message.id, result: true}),
                        () => port.postMessage({id: message.id, result: false})
                    )

                break
            case 'open-settings':
                background.chrome.openSettings()
                port.postMessage({id: message.id, result: true})
                break
            case 'copy-to-clipboard':
                
                let result = copyTextToClipboard(message.payload.text)
                port.postMessage({id: message.id, result: result})
                break
            case 'page-whitelist':
                const allowed = background.whitelist.isAllowed(message.payload.host)
                port.postMessage({id: message.id, allowed: allowed, host: message.payload.host})
                break
            case 'options-get-whitelist':
                port.postMessage({id: message.id, whitelist: background.whitelist.getList(true)})
                break
            case 'options-set-whitelist':
                background.whitelist.setList(message.payload.whitelist, true)
                port.postMessage({id: message.id, result: true})
                break
            case 'set-badge':
                background.chrome.setBadge(message.payload, port.sender.tab.id)
                port.postMessage({id: message.id, result: true})
                break
            case 'report':
                let key = false
                switch (message.payload.action) {
                case 'open':
                    const url = 'https://ritetag.com/hashtag-stats/' + message.payload.hashtag.toLowerCase().replace('#', '')
                    background.chrome.openTab(url)
                    port.postMessage({
                        id: message.id,
                        result: true
                    })
                    break
                case 'dismiss':
                    key = (message.payload.hostname + '-' + message.payload.hashtag).toLowerCase()
                    background.reports.addItem(key)
                    port.postMessage({
                        id: message.id,
                        result: true
                    })
                    break
                case 'show':
                    key = (message.payload.hostname + '-' + message.payload.hashtag).toLowerCase()
                    port.postMessage({
                        id: message.id,
                        show: !background.reports.constains(key),
                        result: true
                    })
                    break
                }
                break
            case 'save-last-object':
                 
                storage.lastObject = message.payload
                port.postMessage({id: message.id, result: true})
                break
            case 'help-message-can-show':
                let cankey = 'help-message-' + message.payload.name
                background.storage.load(cankey, (data) => {
                    const result = data[cankey] === true
                    port.postMessage({
                        id: message.id,
                        result: !result
                    })
                })
                break
            case 'help-message-block-show':
                let blockkey = 'help-message-' + message.payload.name
                const data = {}
                data[blockkey] = true
                background.storage.save(data, () => {
                    port.postMessage({
                        id: message.id,
                        result: true
                    })
                })
                break
            case 'keypress-hashtag':
                background.chrome.sendMessageToTab(port.sender.tab.id, {
                    from: 'background',
                    action: 'keypress',
                    hashtag: message.payload
                })
                port.postMessage({
                    id: message.id,
                    result: true
                })
                break
            case 'suggest':
                const request = message.payload
                request.language = background.language.getLanguage()
                background.suggestion.getSuggestion(request)
                    .then((suggest) => {
                        port.postMessage({
                            id: message.id,
                            result: true,
                            payload: suggest
                        })
                    }).catch((suggest) => {
                        port.postMessage({
                            id: message.id,
                            result: false,
                            payload: suggest
                        })
                    })
                break
            case 'set-focus':
                if (message.payload === 'me') {
                    background.chrome.setFocus(port.sender.tab.id)
                    port.postMessage({
                        id: message.id,
                        result: true
                    })
                    return
                }
                port.postMessage({
                    id: message.id,
                    result: false
                })
                break
            case 'language':
                if (message.payload.method === 'get') {
                    background.language.getLanguages().then(languages => {
                        const omessage = {
                            id: message.id,
                            languages: languages,
                            language: background.language.getLanguage(),
                            result: true
                        }
                        port.postMessage(omessage)
                    })
                    return
                } else if (message.payload.method === 'set') {
                    background.language.setLanguage(message.payload.language)
                    port.postMessage({
                        id: message.id,
                        result: true
                    })
                }
                port.postMessage({
                    id: message.id,
                    result: false
                })
                break
            case 'log':
                if (message.payload.type === 'hashtag-suggestion') {
                    background.client.logHashtagSuggestions(message.payload)
                }
                break
            case 'show-notification':
                const notificationId = 'rk-' + Math.random()
                chromeObject.showNotification(notificationId, 'RiteTag extension', message.payload.message, chromeObject.getIcon('images/hashmark.png'))
                break
            default:
                break
            }
        } catch (error) {
            if (error.message && (error.message.indexOf('Invalid tab ID') > -1 || error.message.indexOf('Attempt to postMessage on disconnected port') > -1)) {
                // ignore
                console.log('Error: ' + error.message)
            } else {
                throw error
            }
        }
    })
}

background.chrome.addListenerOnConnect(listenPort)

 
background.chrome.addListenerBrowserActionOnClicked((tab) => {
    if (tab.command && tab.command !== 'browserAction') return
    background.chrome.sendMessageToTab(tab.id, {
        from: 'browserAction',
        iconClicked: true
    })
})

const injectModalScript = function (id) {
    const contentScripts = background.chrome.getManifest().content_scripts[0]
    background.chrome.injectScripts(id, contentScripts.js)
    background.chrome.insertCSS(contentScripts.css)
}

background.chrome.addListenerOnInstalled((details) => {
    if (details.reason === 'install') {
        background.chrome.getAllWindows((windows) => {
            windows.forEach((currentWindow) => {
                currentWindow.tabs.forEach(function (currentTab) {
                    if (!currentTab.url.match(/^(?:chrome|about):/gi)) {
                        injectModalScript(currentTab.id)
                    }
                })
            })
        })

        background.chrome.openTab('https://ritetag.com/extension/success', true)
    }
})

 

let safariPort = {
    name: 'riteforge-connect',
    onMessage: {
        addListener: function (callback) {
            callback(safariPort.event.message)
        }
    },
    postMessage: function (request) {
        try {
            safariPort.event.target.page.dispatchMessage(request.id, request)
        } catch (e) {
            safari.application.activeBrowserWindow.activeTab.page.dispatchMessage(request.id, request)
        }
    },
    sender: {
        tab: {
            id: 0
        }
    }
}

function respondToMessage (e) {
    safariPort.event = e
    safariPort.sender.tab.id = e
    listenPort(safariPort)
}

if (typeof safari !== 'undefined') {
    safari.application.addEventListener('message', respondToMessage, false)
}
