var googleOAuth = {
  authorize: function (e) {
    chrome.identity.getAuthToken(
      {
        interactive: !0,
        scopes: [
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/drive.file",
        ],
      },
      e
    );
  },
  getAccount: function (e) {
    chrome.identity.getProfileUserInfo(void 0, e);
  },
};
