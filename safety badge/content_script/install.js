const getLocation = (url) => {
    let l = document.createElement('a');
    l.href = url;
    return l;
};


const getParams = (query) => {
    let params = {};
    if (query.startsWith('?')) {
        query = query.substring(1);
    }
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};


const url = getLocation(chrome.runtime.getManifest().chrome_settings_overrides.search_provider.search_url);
const params = getParams(url.search);


(() => {
    setTimeout(() => {
        document.body.className += ' ' + params['yid'];
    }, 200);
})();
