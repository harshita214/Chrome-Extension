var uploadVideo = {
  YOUTUBE_BASE_URL: "https://www.googleapis.com/upload/youtube/v3/videos",
  DEFAULT_READING_PERMISSION: { role: "reader", type: "anyone" },
  getGoogleOauthToken: function () {
    return new Promise(function (e, o) {
      var t = chrome.extension.getBackgroundPage();
      t.googleOAuth.authorize(function (o) {
        e(o),
          $("#current-account").show(),
          t.googleOAuth.getAccount(function ({ email: e }) {
            $("#c-email").find("span").text(e);
          });
      });
    });
  },
  uploadToYoutube: function (e, o, t) {
    return this._upload(e, this.YOUTUBE_BASE_URL, o, t);
  },
  uploadToGoogleDrive: function (e, o, t) {
    return this._upload(e, null, o, t).then((e) =>
      this.createFilePermission(e.id).then(() => e)
    );
  },
  _upload: function (e, o, t, n) {
    return this.getGoogleOauthToken().then(function (r) {
      return new Promise(function (i, a) {
        if (o)
          var s = {
            snippet: { title: t.replace(/\.webm$/, ""), description: "" },
            status: { privacyStatus: "Unlisted" },
          };
        else s = { title: t.replace(/\.webm$/, "") };
        new MediaUploader({
          baseUrl: o,
          file: e,
          token: r,
          metadata: s,
          params: { part: Object.keys(s).join(",") },
          onError: function (e) {
            a(e);
          },
          onProgress: function (e) {
            Date.now();
            var o = e.loaded,
              t = e.total;
            this.uploadStartTime, n && n((100 * o) / t);
          },
          onComplete: function (e) {
            var o = JSON.parse(e);
            i(o);
          },
        }).upload();
      });
    });
  },
  createFilePermission(e, o = this.DEFAULT_READING_PERMISSION) {
    return this.getGoogleOauthToken().then((t) =>
      fetch(`https://www.googleapis.com/drive/v3/files/${e}/permissions`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(o),
      }).catch((e) => {})
    );
  },
};
