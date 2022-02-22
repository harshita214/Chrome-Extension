export const isChromeOS = () => {
    return navigator.userAgent.indexOf('CrOS') !== -1 || navigator.userAgent.indexOf('Linux') !== -1;
}


export const isSimilar = (string1, string2) => {
    return 1 - compareStrings(string1, string2) / Math.max(string1.length, string2.length);

};

/**
 * Receives a url and array of possible parameters for that url.
 * If found - stop array iteration and return it or else return null.
 * @param url
 * @param parameters
 * @returns {string || null} 
 */
 export const getParameterByName = (url, parameters) => {
    const urlToExtract = new URL(url);

    let foundParam = null;
    parameters.every(parameter => {
        const param = urlToExtract.searchParams.get(parameter);
        if (param) {
            foundParam = param;
            return false;
        } else {
            return true;
        }
    });

    return foundParam;
};

/**
 * Receives a url and parameters to remove, and removes them.
 * @param url
 * @param parameters
 * @returns {string}
 */
export const removeParameterFromURL = (url, parameters) => {
    const urlToEdit = new URL(url);
    const params = urlToEdit.searchParams;

    parameters.forEach(parameter => {
        if (params.has(parameter)) {
            params.delete(parameter);
        }
    });

    urlToEdit.search = params.toString();
    return urlToEdit.href;
};


/**
 * Levenshtein Distance method to compare 2 strings.
 * @param string1
 * @param string2
 * @returns {*}
 */
const compareStrings = (string1, string2) => {
    let d = [];
    let m = string1.length;
    let n = string2.length;
    let i;
    let j;

    for (i = 0; i <= m; i++) {
        d[i] = [];
        d[i][0] = i;
    }
    for (j = 0; j <= n; j++) {
        d[0][j] = j;
    }

    for (j = 1; j <= n; j++) {
        for (i = 1; i <= m; i++) {
            if (string1[i] === string2[j]) {
                d[i][j] = d[i - 1][j - 1];
            } else {
                d[i][j] = Math.min(
                    d[i - 1][j] + 1, // a deletion
                    d[i][j - 1] + 1,  
                    d[i - 1][j - 1] + 1  
                )
            }
        }
    }
    return d[m][n];
}