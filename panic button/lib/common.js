var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    app.button.icon(null, null);
  },
  "hide": {
    "tabs": function () {
      if (config.process) {
        app.tab.query.all(function (tabs) {
          if (tabs && tabs.length) {
            var a = tabs;
            var b = config.dummy;
            var c = tabs && tabs.length === 1;
            var d = config.dummy && tabs[0].id === config.dummy.id;
            /*  */
            if (a && b && c && d) {
              app.tab.query.closed(function (sessions) {
                var _restore = function (session) {
                  app.tab.restore(session.tab.sessionId, function () {
                    count = count + 1;
                    if (count === 1 && config.dummy) app.tab.remove(config.dummy.id);
                    var valid = sessions.length && count < config.tabs.length;
                    if (valid) _restore(sessions.shift());
                    else {
                      config.process = true;
                      app.tab.query.all(function (tabs) {
                        for (var i = 0; i < tabs.length; i++) {
                          if (i === config.active) {
                            app.tab.update(tabs[config.active].id, {"active": true});
                          }
                        }
                      });
                    }
                  });
                };
                /*  */
                var count = 0;
                app.button.icon(null, null);
                config.process = false;
                app.button.badge.text(null, '');
                sessions.length ? _restore(sessions.shift()) : config.process = true;
              });
            } else {
              config.tabs = tabs;
              app.tab.open(config.interface.url, undefined, true, function (tab) 
              {
                config.dummy = tab;
                app.button.icon(null, "empty");
                app.button.badge.text(null, config.tabs.length);
                /*  */
                for (var i = 0; i < config.tabs.length; i++) {
                  if (config.tabs[i].active) config.active = i;
                  /*  */
                  app.tab.remove(config.tabs[i].id, function () {
                    var lastError = chrome.runtime.lastError;
                  });
                }
              });
            }
          }
        });
      }
    }
  }
};

app.hotkey.on.pressed(function (key) {
  if (key === "hide_tabs") {
    core.hide.tabs();
  }
});

app.on.startup(core.start);
app.on.installed(core.install);
app.button.on.clicked(core.hide.tabs);
