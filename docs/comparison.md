---
sidebar_label: Comparison
---

# Comparison with other Solutions

We're going to try our best to provide a fair comparison with various other solutions that offer website image processing. Most of the libraries, like IPP, just provide a different opinionated interface for [Sharp][sharp] (which itself uses [libvips][libvips]) that is better suited for its respective ecosystem, such as whether the client is aware of the available image sizes or whether it blindly requests the most appropriate image, therefore only generating images on demand.

This is our subjective, and hopefully fair, opinion on the implementation of various solutions as well as the differences with IPP.

## SQIP

[![GitHub Repo stars](https://img.shields.io/github/stars/axe312ger/sqip?logo=github)](https://github.com/JonasKruckenberg/imagetools)

> "SQIP" (pronounced \skwɪb\ like the non-magical folk of magical descent) is a SVG-based LQIP technique.

SQIP specialises in generating image previews using different techniques, such as blurred vector approximations. This project has been exploring on how to create the most visually aesthetic previews with the smallest size to create a faster and more accessible web.

#### Differences

- SQIP focuses on experimenting with various image placeholder techniques using a, IPP focusses on a declarative pipeline configuration for generating different sizes (including support for previews)
- IPP has more opinionated integrations, such as the Webpack loader
- SQIP has been around for a little longer and has considerably more stars and contributors

## Imagetools

[![GitHub Repo stars](https://img.shields.io/github/stars/JonasKruckenberg/imagetools?logo=github)](https://github.com/JonasKruckenberg/imagetools)

> Load and transform images using a toolbox 🧰 of custom import directives!

Imagetools provides a way to import images into your JS/TS code using query parameters, such as those found in URLs, to specify the desired image transformations. It's fast and easy to use but may get a little repetitive without defining custom directives. For TypeScript users, query-strings can also mess with type import definitions.

#### Example

```js
import Image from "example.jpg?w=400&h=300&webp";
```

#### Differences

- Imagetools prefers query strings, IPP prefers a global pipeline configuration for less repetition
- Imagetools focusses on image transformations with many codecs. IPP also has pretty good all-round image transformation capabilities but with first-class preview generation (such as SQIP) and can be easily extended with custom pipes

## Gatsby Image Plugin

[![Logo](https://img.shields.io/badge/Gatsby-663399?logo=gatsby)](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)

The original Gatsby Image plugin was the inspiration for this library. It has generally been highly praised and regarded as one of Gatsby's redeeming features that was missing/lacking in other frameworks.

It allowed for compiled-time image generation using a GraphQL page query. Each image had to have its own GraphQL query. This came with great flexibility, it was possible to extend the image generating process with the primitive library for (subjectively) better SVG previews.

This approach allowed for more optimal size generation without duplicates and without an extra network round-trip. The resulting `srcset` string could then be encoded statically in the page, allowing the browser to choose and fetch the most optimal size/codec in a single request.

The goal of IPP was to provide an alternative to Gatsby Image that would be framework agnostic.

#### Differences

- IPP does not use a per-image GraphQL query, but a global pipeline definition (this seems to have changed)
- IPP is made to be extensible, Gatsby Image focusses on super-easy responsive images
- IPP is framework-agnostic, Gatsby Image is not (trivially)

## Next.js Image

[![Logo](https://img.shields.io/badge/Vercel-000000?logo=vercel)](https://vercel.com/docs/concepts/next.js/image-optimization)

Next.js added support for image optimisation some time around 2020. Their solution is to map image imports to an API endpoint that could run on Vercel's serverless infrastructure, generating images on the fly with caching between deployments.

This greatly reduces the time required to build the website, as image generation is moved to request-time. Simple image downscaling takes a matter of milliseconds, however, this method is not feasible for more advanced image transformations without a noticeable impact for the client. While the server can provide pixel-perfect downscaling for the target browser, it also reduces the caching potential.

IPP is actually well suited for serverless functions using the programmatic interface, a solution similar to Next.js' could be implemented by hand. The Webpack loader and Vite plugin are just build-time wrappers around the IPP core.

#### Differences

- Next.js does request-time image transformations, IPP does build-time transformations
- Next.js has significantly faster builds, reducing time to deployment, at the cost of not being able to do computationally intensive image generation (such as primitive SVGs)

## Cloudflare, Cloudinary and other platforms

[![Logo](https://img.shields.io/badge/Cloudflare-ffffff?logo=cloudflare)](https://www.cloudflare.com/website-optimization/)

Various companies provide proprietary solutions to transform images on the fly as website requests proxy through their servers, without needing any image processing on your end. The main advantage of this approach is that it's fire and forget, it works automatically for every image on your domain by intercepting the response with minimal latency cost.

This is especially good for larger domains with a lot of separate services that aren't configured to produce correctly sized images.

#### Differences

- It's dead simple to use
- These solutions are usually proprietary, IPP is open source
- IPP is focussed more on build-time or serverless image generation, not a web proxy
- Those proprietary solutions also offer CDN image caching

[libvips]: https://github.com/libvips/libvips
[sharp]: https://github.com/lovell/sharp
