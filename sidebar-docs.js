module.exports = {
  docs: [
    { "Getting started": ["introduction", "performance", "typescript", "troubleshooting"] },
    {
      Guide: [
        "guide/prerequisites",
        "guide/installation",
        "guide/usage",
        "guide/pipeline",
        "guide/manifest",
        "guide/next",
      ],
    },
    {
      "[WIP] Conceptual overview": [
        {
          type: "link",
          label: "Motivation",
          href: "/blog/2020/09/12/motivation",
        },
        "concept/architecture",
        "concept/pipes",
        "concept/core",
      ],
    },
    {
      "Command line": ["cli/overview", "cli/installation", "cli/configuration", "cli/manifest"],
    },
    {
      "[WIP] Webpack": [
        "webpack/overview",
        "webpack/installation",
        "webpack/usage",
        "webpack/frontend",
      ],
    },
    { "[WIP] Advanced usage": ["advanced/overview", "advanced/installation", "advanced/usage"] },
    {
      "[WIP] Reference": [
        "reference/cli",
        "reference/common",
        "reference/compress",
        "reference/core",
        "reference/primitive",
        "reference/testing",
        "reference/webpack",
      ],
    },
    "contributing",
  ],
};
