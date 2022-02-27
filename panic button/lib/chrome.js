var app = {};

app.hotkey = {
  "on": {
    "pressed": function (callback) {
      chrome.commands.onCommand.addListener(function (e) {
        if (e) {
          if (callback) {
            callback(e);
          }
        }
      });
    }
  }
};

app.on = {
  "management": function (callback) {
    chrome.management.getSelf(callback);
  },
  "uninstalled": function (url) {
    chrome.runtime.setUninstallURL(url, function () {});
  },
  "installed": function (callback) {
    chrome.runtime.onInstalled.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "startup": function (callback) {
    chrome.runtime.onStartup.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "message": function (callback) {
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
      app.storage.load(function () {
        callback(message, sender, sendResponse);
      });
      /*  */
      return true;
    });
  }
};

app.storage = (function () {
  chrome.storage.onChanged.addListener(function () {
    chrome.storage.local.get(null, function (e) {
      app.storage.local = e;
      if (app.storage.callback) {
        if (typeof app.storage.callback === "function") {
          app.storage.callback(true);
        }
      }
    });
  });
  /*  */
  return {
    "local": {},
    "callback": null,
    "read": function (id) {
      return app.storage.local[id];
    },
    "on": {
      "changed": function (callback) {
        if (callback) {
          app.storage.callback = callback;
        }
      }
    },
    "write": function (id, data, callback) {
      var tmp = {};
      tmp[id] = data;
      app.storage.local[id] = data;
      chrome.storage.local.set(tmp, function (e) {
        if (callback) callback(e);
      });
    },
    "load": function (callback) {
      var keys = Object.keys(app.storage.local);
      if (keys && keys.length) {
        if (callback) callback("cache");
      } else {
        chrome.storage.local.get(null, function (e) {
          app.storage.local = e;
          if (callback) callback("disk");
        });
      }
    }
  }
})();

app.button = {
  "on": {
    "clicked": function (callback) {
      chrome.action.onClicked.addListener(function (e) {
        app.storage.load(function () {
          callback(e);
        }); 
      });
    }
  },
  "icon": function (tabId, path, callback) {
    if (path && typeof path === "object") {
      var options = {"path": path};
      if (tabId) options["tabId"] = tabId;
      chrome.action.setIcon(options, function (e) {
        if (callback) callback(e);
      });
    } else {
      var options = {
        "path": {
          "16": "../data/icons/" + (path ? path + '/' : '') + "16.png",
          "32": "../data/icons/" + (path ? path + '/' : '') + "32.png",
          "48": "../data/icons/" + (path ? path + '/' : '') + "48.png",
          "64": "../data/icons/" + (path ? path + '/' : '') + "64.png"
        }
      };
      /*  */
      if (tabId) options["tabId"] = tabId;
      chrome.action.setIcon(options, function (e) {
        if (callback) callback(e);
      }); 
    }
  },
  "badge": {
    "text": function (tabId, badge, callback) {
      if (tabId) {
        chrome.action.setBadgeText({
          "tabId": tabId,
          "text": badge + ''
        }, function (e) {
          var tmp = chrome.runtime.lastError;
          if (callback) callback(e);
        });
      } else {
        chrome.action.setBadgeText({"text": badge + ''}, function (e) {
          var tmp = chrome.runtime.lastError;
          if (callback) callback(e);
        });
      }
    }
  }
};

app.tab = {
  "remove": function (tabId, callback) {
    chrome.tabs.remove(tabId, function (e) {
      if (callback) callback(e);
    });
  },
  "update": function (tabId, options, callback) {
    chrome.tabs.update(tabId, options, function (e) {
      if (callback) callback(e);
    });
  },
  "restore": function (id, callback) {
    if (chrome.sessions) {
      chrome.sessions.restore(id, function (session) {
        if (session) {
          if (callback) {
            callback(session);
          }
        }
      });
    }
  },
  "open": function (url, index, active, callback) {
    var properties = {
      "url": url, 
      "active": active !== undefined ? active : true
    };
    /*  */
    if (index !== undefined) {
      if (typeof index === "number") {
        properties.index = index + 1;
      }
    }
    /*  */
    chrome.tabs.create(properties, function (tab) {
      if (callback) callback(tab);
    }); 
  },
  "query": {
    "all": function (callback) {
      chrome.tabs.query({}, function (tabs) {
        if (tabs && tabs.length) {
          callback(tabs);
        }
      });
    },
    "index": function (callback) {
      chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
        if (tabs && tabs.length) {
          callback(tabs[0].index);
        } else callback(undefined);
      });
    },
    "closed": function (callback) {
      if (chrome.sessions) {
        chrome.sessions.getRecentlyClosed(function (sessions) {
          if (sessions && sessions.length) {
            callback(sessions);
          }
        });
      }
    }
  },
  "on": {
    "removed": function (callback) {
      chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
        app.storage.load(function () {
          callback(tabId);
        }); 
      });
    },
    "activated": function (callback) {
      chrome.tabs.onActivated.addListener(function (activeInfo) {
        app.storage.load(function () {
          chrome.tabs.get(activeInfo.tabId, function (tab) {
            callback(tab);
          });
        });
      });
    },
    "updated": function (callback) {
      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        app.storage.load(function () {
          if (tab.status === "complete") {
            callback(tab);
          }
        });
      });
    }
  }
};
