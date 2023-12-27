module.exports =
  {
    "locales": ["en", "fr"],
    "defaultLocale": "en",
    "pages": {
      "*": ["common", "contact", "navbar", "footer"],
      "/": ["common"],
      "/about-us": ["about"],
      "/services/independent-living": ["independent-living"],
      "/services/semi-independent": ["semi-independent-living"],
      "/services/memory-care": ["memory-care"],
      "/accommodations": ["accommodations"],
    },
      // ...rest of config
  "loadLocaleFrom": (lang, ns) =>
  // You can use a dynamic import, fetch, whatever. You should
  // return a Promise with the JSON file.
  import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
  }
