const path = require("path");

module.exports = function (context) {
  const isProd = process.env.NODE_ENV === "production";

  return {
    name: "plugin-analytics",

    getClientModules() {
      return isProd ? [path.resolve(__dirname, "./analytics")] : [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `var _paq = window._paq = window._paq || [];_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function() {  var u="//analytics.mastermovies.uk/";  _paq.push(['setTrackerUrl', u+'matomo.php']);  _paq.push(['setSiteId', '1']);  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];  g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);})();`,
          },
        ],
      };
    },
  };
};
