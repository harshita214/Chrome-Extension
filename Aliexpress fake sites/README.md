# AliExpress fake site blocker

There are a bunch of fake machine-translated websites out there with the sole purpose of redirecting you to AliExpress.   
You can read more about them in [this Google Search Help thread](https://support.google.com/websearch/thread/111669340/i-have-discovered-that-99-search-results-redirect-me-to-aliexpress-they-all-are-fake-online-stores?hl=en).

This repository contains a spreadsheet of common terms that bring out a lot of these sites, which is used by a script (currently not open-source in order to avoid counter-measures) that detects them and builds a list of their domains.

I have added various domains mostly from .ee top-level domain and a few others, in total nearly 300 new domains so far.

That list can then be used by [uBlacklist](https://github.com/iorate/uBlacklist) or another blocking tool to rid your search results of these sites.

## How to use

Install uBlacklist from one of these links: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublacklist) | [Google Chrome](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) | [Safari](https://apps.apple.com/us/app/ublacklist-for-safari/id1547912640)

Open uBlacklist settings:   

![image](https://user-images.githubusercontent.com/3891092/150679333-c301d7db-5b22-4738-a1b3-a1eb1b322a0c.png)



At the very bottom, add a new subscription:

![image](https://user-images.githubusercontent.com/3891092/150679015-4fe5494a-9195-446f-9b8a-c9e640fbfc49.png)

Paste in this link:

```
https://raw.githubusercontent.com/levitation-opensource/aliexpress-fake-sites/main/domains_uBlacklist.txt
```

![image](https://user-images.githubusercontent.com/3891092/150679054-9a9236f5-81c0-4d6a-b539-73af1821bc93.png)

## How to contribute

If you find a search query that exposes many such sites that aren't on the blacklist already, please let me know so I can add them to the detector.  
If you do, please include what you searched for and what country were you searching from, so I can add it to the keywords.

There are two ways of submitting:

 - If you have a GitHub account, open a issue or send a pull request to the `keywords.csv` file
 - If you don't, email aliexpress_spam@altmails.com.


## How does it work?

The file `keywords.csv` contains a list of keywords and their corresponding languages/countries that contain many fake AliExpress sites. Once a month, a program will search Google for all of those keywords and check every single result to see if it redirects to AliExpress. If it does, it's added to the list.

The source code to this program is kept private to prevent simple countermeasures from the sites. If your site has been incorrectly blacklisted, please let me know in a GitHub issue or via the email address above.
