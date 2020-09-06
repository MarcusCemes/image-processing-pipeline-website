---
id: introduction
title: Introduction
slug: /
---

<!-- prettier-ignore-start -->
:::note
This documentation is an active work in progress. There's some stuff missing. In the meantime, you
may find what you're looking for at the [old documentation](https://ipp.mastermovies.uk).
:::
<!-- prettier-ignore-end -->

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
[command line](cli/overview.md) section that aims to provide a brief setup guide for users that are
experienced with the npm ecosystem of tools.

If you are **integrating IPP into a front-end project**, we recommend taking a look at the official
[webpack loader](webpack/overview.mdx). This allows images to be generated automatically at build
time, without the need to commit or pre-run the tool yourself.

If you would like to **integrate IPP programmatically into your own codebase**, check out the
[advanced usage](advanced/overview.mdx) section that goes into more detail into the internals of IPP
and how you can integrate the functions yourself.
