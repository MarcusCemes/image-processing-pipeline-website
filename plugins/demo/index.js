/**
 * @type {import("@ipp/common").ManifestMappings}
 */
const manifest = {
  source: {
    x: "hash",
  },
  format: {
    w: "width",
    h: "height",
    x: "hash",
    f: "format",
    p: "path",
    s: "save",
  },
};

/**
 * @type {import("@ipp/common").Pipeline}
 */
const pipeline = [
  { pipe: "passthrough", save: "Original" },
  {
    pipe: {
      resolve: "@ipp/primitive",
      module: "PrimitivePipe",
    },
    then: [
      {
        pipe: {
          resolve: "@ipp/compress",
          module: "CompressPipe",
        },
        save: "Primitive SVG",
      },
    ],
  },
  {
    pipe: "resize",
    options: {
      resizeOptions: {
        width: 640,
      },
    },
    then: [
      {
        pipe: {
          resolve: "@ipp/trace",
          module: "TracePipe",
        },
        then: [
          {
            pipe: {
              resolve: "@ipp/compress",
              module: "CompressPipe",
            },
            save: "Traced SVG",
          },
        ],
      },
    ],
  },
  {
    pipe: "convert",
    options: {
      format: "raw",
    },
    then: [
      {
        pipe: "resize",
        options: {
          breakpoints: [
            {
              name: "Small",
              resizeOptions: {
                width: 320,
              },
            },
            {
              name: "Medium",
              resizeOptions: {
                width: 1280,
              },
            },
            {
              name: "Large",
              resizeOptions: {
                width: 1920,
              },
            },
            {
              name: "Extra large",
              resizeOptions: {
                width: 3840,
              },
            },
          ],
        },
        then: [
          {
            pipe: "convert",
            options: {
              format: "original",
              convertOptions: {
                quality: 100,
              },
            },
            then: [
              {
                pipe: {
                  resolve: "@ipp/compress",
                  module: "CompressPipe",
                },
                options: {
                  softFail: true,
                },
                save: "[breakpoint] JPEG",
              },
            ],
          },
          {
            pipe: "convert",
            options: {
              format: "webp",
            },
            save: "[breakpoint] WebP",
          },
        ],
      },
    ],
  },
];

/**
 * @param {import("@docusaurus/types").LoadContext} _context
 * @returns {import("@docusaurus/types").Plugin<void>}
 */
module.exports = function (_context) {
  return {
    name: "plugin-demo",

    /**
     * @param {import("webpack").Configuration} config
     * @param {boolean} _isServer
     */
    configureWebpack(config, _isServer) {
      config.module.rules
        .filter((rule) => /jpg/.test(String(rule.test)))
        .forEach((rule) => {
          rule.exclude = /demo/;
        });

      return {
        mergeStrategy: {
          "module.rules": "prepend",
        },
        module: {
          rules: [
            {
              test: /\.(png|jpe?g)$/i,
              use: [
                {
                  loader: require.resolve("@ipp/webpack"),
                  options: {
                    devBuild: false,
                    manifest,
                    pipeline,
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};
