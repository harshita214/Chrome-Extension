var config = {};

config.tabs = [];
config.dummy = null;
config.active = null;
config.process = true;

config.interface = {
  "url": chrome.runtime.getURL("data/interface/index.html")
};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};