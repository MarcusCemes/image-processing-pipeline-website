const path = require("path");

module.exports = function (_context) {
  const isProd = process.env.NODE_ENV === "production";

  return {
    name: "plugin-analytics",

    getClientModules() {
      return [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }

      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"MarcusCemes",utcoffset:"1"}))};sessionStorage.setItem("_swa","1");`,
          },
        ],
      };
    },
  };
};
