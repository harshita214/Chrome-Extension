const REPUTATIONS = {};
let target;

$(() => {
    if (location.href.includes('&dext=1')) {
        return;
    }

    chrome.runtime.sendMessage('getExtensionStatus', (status) => {
        if (status) {
            const feedTitles = $('.compTitle > div');
            for (const feedTitle of feedTitles) {
                if (!isAd(feedTitle)) {
                    appendReputationComponent(feedTitle);
                }
            }

            $('.rep-tooltip').on('click', async (e) => {
                try {
                    if (target && target[0] === $($(e.currentTarget))[0]) {
                        removeReputationToolTip(target);
                        target = null;
                        return;
                    }

                    target = $($(e.currentTarget));

                    const domain = fetchFeedResultUrl(target.parent().parent().find('.fz-ms, .cite')[0]);
                    if (domain) {
                        const hostName = getHostnameFromUrl(domain);
                        removeReputationToolTip($('.rep-tooltip'));

                        if (hostName) {
                            const wrapper = createTooltip(target);
                            const reputation = await getReputation(hostName);
                            populateReputation(wrapper, reputation, hostName);
                        }
                    }
                } catch (e) {
                    console.log(e.toString());
                }
            });


            $(document).on('click', (e) => {
                if (!$(e.target).hasClass('rep-tooltip')) {
                    removeReputationToolTip($('.rep-tooltip'));
                    target = null;
                }
            });
        }
    });
});

/**
 * Appending the Reputation Component to the left of the feed result.
 * Since we don't want our component to be cut off, we change some Yahoo css properties.
 * @param feedItem - Yahoo feed result
 */
const appendReputationComponent = (feedItem) => {
    $(feedItem).css({'display': 'flex', 'align-items': 'center'});
    $('.compTitle').css('overflow', 'unset');
    $('.first').css('margin-top', '20px');

    $(`<div class="rep-tooltip" title="Safety check" style="background-image: url('${FILES.check}')">
       </div>`).prependTo(feedItem);
};

/**
 * Drawing the tooltip with loading gif before actually showing the reputation of the current target.
 * @param currentTarget - feed item
 * @returns {*|jQuery}
 */
const createTooltip = (currentTarget) => {
    $(currentTarget).parent().parent().parent().css({'min-height': '135px'});
    $('.compContainerExp .itm').css('position', 'unset');

    return $(`<div class="rep-tooltip-wrapper">
                <div class="rep-loading">
                   <img src="${FILES.loading}" alt="">
                   <span>Safety Checking</span>
                </div>
              </div>`).appendTo(currentTarget);
};



/**
 * Fetching reputation for a given URL.
 * @param hostName
 * @returns {Promise<{reputation: string, threats: [], target: null, status: string}|{}|any>}
 */
const getReputation = async (hostName) => {
    if (!hostName) {
        return {};
    }

    if (REPUTATIONS[hostName]) {
        return REPUTATIONS[hostName];
    } else {
        try {
            const searchUrl = getHostnameFromUrl(chrome.runtime.getManifest().chrome_settings_overrides.search_provider.search_url);
            const response = await fetch(`https://${searchUrl}/wim/reputation?domain=${hostName}`)
            const json = await response.json();
            if (json) {
                REPUTATIONS[hostName] = json;
                return json;
            }
        } catch (e) {
            console.log(e.toString());
        }
    }

    return {
        target: null,
        status: 'No data',
        reputation: 'No data',
        threats: [],
    };
};


/**
 * Showing reputation for active feed item.
 * @param wrapper - parent div
 * @param json - reputation
 * @param hostName - checked domain
 */
const populateReputation = (wrapper, json, hostName) => {
    setTimeout(() => {
        $(wrapper).find('.rep-loading').fadeOut();

        const threats = (json.threats && json.threats.length) ? json.threats.join(', ') : '0';
        const reputation = (json.reputation && json.reputation.toLowerCase() !== 'no data') ? json.reputation.replace(/\s+/g, '') : 'unknown';

        $(`<div class="rep-threat ${reputation}">${json.status}</div>
               <div class="rep-tooltip-content">
                   <div class="rep-domain">
                       <strong class="rep-title">Site:</strong>
                       <span>${json.target || hostName}</span>
                   </div>
                   <div class="borderb"></div>
                   <div class="rep-status">
                       <strong class="rep-title">Score:</strong>
                       <img src="${FILES[reputation]}" alt="">
                       <span class="${reputation}-text"> ${json.reputation}</span>
                   </div>
                   <div class="borderb"></div>
                   <span class="rep-threats">
                       <strong class="rep-title">Threats: </strong>${threats}
                   </span>
                </div>`)
            .appendTo(wrapper)
            .hide()
            .fadeIn();

        $(wrapper).parent().css('background-image', `url('${FILES[reputation]}'`);
    }, 2000);
};

/**
 * Removing tooltip from a given target.
 * @param target - feed result
 */
const removeReputationToolTip = (target) => {
    $(target).children().remove();
    $('.algo').css('min-height', 'unset');
    $('.compContainerExp .itm').css('position', 'relative');
};



const fetchFeedResultUrl = (element) => {
    const url = isUrl($(element).clone().contents().unwrap().text());

    /**
     * In case {element} has no child elements we simply return the text.
     */
    if (url) {
        return getHostnameFromUrl($(element).clone().contents().unwrap().text());
    }

    /**
     * In case the element has href instead of text.
     */
    if (element.href) {
        return getHostnameFromUrl(element.href);
    }

    /**
     * In case {element} has multiple child elements we iterate each one of them and check if a child is a valid url.
     * If it is a valid url - we return it.
     * Otherwise, we keep iterating and building an array of strings, then join them to create a valid url.
     */
    if ($(element).text()) {
        const urlParts = [];
        for (const elem of $(element).clone().contents().unwrap()) {

            if (isUrl($(elem).text())) {
                return $(elem).text();
            }

            urlParts.push($(elem).text());
            if (isUrl(urlParts.join(''))) {
                return urlParts.join('');
            }
        }
    }

    return getHostnameFromUrl($(element)
        .clone()
        .children()
        .remove()
        .end()
        .text());
};


const getHostnameFromUrl = (domain) => {
    try {
        const fixedDomain = domain.startsWith('http') ? domain : `https://${domain}`;
        return new URL(fixedDomain).hostname;
    } catch (e) {
        console.log(e.toString())
    }

    return domain;
};

const isUrl = (string) => {
    return string.match('^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$') !== null;
};

const isAd = (feedResult) => {
    return !!$(feedResult).has('em').length || (!!$(feedResult).has('a').length && $(feedResult).attr('href') !== null);
};