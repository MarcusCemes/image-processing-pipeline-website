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

const pipeline = [
  { pipe: "passthrough", save: "Original" },
  // {
  //   pipe: {
  //     resolve: "@ipp/primitive",
  //     module: "PrimitivePipe",
  //   },
  //   then: [
  //     {
  //       pipe: {
  //         resolve: "@ipp/compress",
  //         module: "CompressPipe",
  //       },
  //       save: "Primitive SVG",
  //     },
  //   ],
  // },
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

// Extends the webpack config to support demo image generation
module.exports = function (_context, _options) {
  return {
    name: "demo-loader",
    configureWebpack(config, _isServer) {
      // Exclude the demo folder for any image loaders
      const image_loader = config.module.rules.find((item) => /jpg/.test(String(item.test)));
      if (image_loader) {
        image_loader.exclude = /demo/;
      }

      // Add the IPP loader
      config.module.rules.push({
        loader: require.resolve("@ipp/webpack"),
        test: /.(png|jpg|jpeg)$/,
        options: {
          devBuild: true,
          manifest,
          pipeline,
        },
      });

      // Required for some reason by Docusaurus (alpha?)
      return () => {};
    },
  };
};
