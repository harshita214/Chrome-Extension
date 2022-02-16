!(function (t, e, a) {
  (t.readState = function () {
    return new Promise((t) => {
      e.storage.local.get(["state"], function ({ state: e }) {
        return a.log("read state", { state: e }), t({ state: e });
      });
    });
  }),
    (t.writeState = function (n) {
      return new Promise((o) => {
        t.readState().then(({ state: t }) => {
          const r = { ...t, ...n };
          e.storage.local.set({ state: r }, () => {
            a.log("write state", { state: r }), o(r);
          });
        });
      });
    });
})($, chrome, console);
