---
slug: /
sidebar_position: 1
---

# Introduction

<!-- prettier-ignore-start -->
:::caution Project status
This project is not currently actively being developed. [Read the blog post](/blog/2021/11/22/future).
:::
<!-- prettier-ignore-end -->

:::info new documentation

The docs are being rewritten for better structure and easier navigation. They are still largely
incomplete, but may provide more up-to-date information on a particular subject. You can visit the
[new docs here](https://ipp-next.vercel.app/docs).

:::

Image Processing Pipeline (which will be abbreviated to IPP from here) is a multi-purpose
platform-agnostic image processing tool. It is flexible enough to be used as a batch-style script to
resize a set of images, or integrated into a more complex backend system that needs to conduct
efficient automatic image processing.

In order to make this documentation as accessible as possible for users of all backgrounds, it has
been split into several parts, intended for people with varying degrees of web-development
experience.

If you are **not familiar with programming**, or just wish to try it out, we recommend starting with
the [guide](guide/prerequisites.mdx). It will take you through the steps to get a working copy of
IPP.

If you are **familiar with web-development tools and workflows**, there is a condensed
[command line](cli/overview.mdx) section that aims to provide a brief setup guide for users that are
experienced with the npm ecosystem of tools.

If you are **integrating IPP into a front-end project**, we recommend taking a look at the official
[webpack loader](webpack/overview.mdx). This allows images to be generated automatically at build
time, without the need to commit or pre-run the tool yourself.

If you would like to **integrate IPP programmatically into your own codebase** (for processing
images dynamically server-side, for example) check out the [advanced usage](advanced/overview.mdx)
section that goes into more detail into the internals of IPP and how you can integrate the functions
yourself.
