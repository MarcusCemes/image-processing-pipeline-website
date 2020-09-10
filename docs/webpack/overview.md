---
id: overview
title: Overview
slug: /webpack
---

Webpack is a popular tool used to bundle website assets. Since its introduction, the webpack
ecosystem as grown to support many different types of loaders and plugins. The `@ipp/webpack`
provides a webpack loader that adds the ability to import images directly into JavaScript.

The imported image will be processed using a configured pipeline and the import will resolve into a
JavaScript object containg information about the generated formats.

The advantage of using a loader over the CLI is that only images that are explictly imported are
processed and appropriatly bundled along with other assets.

```js title="Example using simple mode"
import image from "path/to/image.jpg";

// image is an object, generated formats are passed to webpack
{
  src: "f8c1421b4334c1c9.jpg",
  width: 1920,
  height: 1080,
  srcset: {
    "image/jpeg": "46de0d3babc16786.jpg 720w, 885001be48ef4667.jpg 1920w",
    "image/webp": "f876c5d47c6c0866.webp 720w, 5eb716978a1b5a09.webp 1920w"
  }
}
```
