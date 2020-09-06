---
title: Motivation
author: Marcus Cemes
author_title: Project Founder & Lead Maintainer
author_url: https://github.com/MarcusCemes
author_image_url: https://graph.facebook.com/100000504161392/picture/?height=200&width=200
tags: [motivation, history]
---

The first question you need to ask yourself is: **Why bother? Why is image processing so
important?**

You could just serve the original images to your user. It may not have an immediate effect and you
might even get away with it. But what sets truly good websites apart is their attention to detail
and their savage optimisation.

I won't try to convince you about the benefits of resizing images, except by saying that images are
the largest resource your website probably serves and has the largest impact on your outgoing
bandwidth (costs?), on your user's mobile data usage, battery and **loading times**, and by
mentioning [this guide](https://images.guide).

### A little history

I created Image Processing Pipeline out of a lack of adequate solutions available on the open-source
community. There were a number of ideas and workflows already available, but none of them fully
matched by needs, which also happened to evolve over time.

I was enormously impressed and inspired with Gatsby's [image][gatsby-image] plugin. Along with the
[sqip-primitive-plugin][sqip-primitive], it _almost_ did a lot of what I wanted, with a little bit
of hacking. Also, I didn't want the image plugin to be the only thing keeping me attached to Gatsby
(which is still an amazing platform)!

My original requirements were:

- Resize images, with a **high-quality** and **fast** library
- Generate **WebP** variants for supported browsers
- Generate low-quality or SVG **placeholders**
- Avoid **duplicate** images (rules out query-based API generation)
- The client should be aware of the **best suited image**, without any additional network
  round-trips
- Avoid committing generated images to **source control** (git does not like binary files)
- Process images in **RAW** pixel data and not using compressed intermediaries

A very modest set of requirements, and yet not trivially resolved. My interest in film and
photography also meant I wanted a solution that was respectful of the work that went into creating
the image.

Wouldn't it be amazing if you could commit a high-quality master from a website such as
[Unsplash][unsplash] into source control, that may be several megabytes in size, and have optimised
sizes generated for your users without any extra work?

It started out as a single file script, that could take a set of images and resize them. At the same
time it was a learning project from which I could learn the fundamentals about JavaScript
asynchronous programming.

Over time, it developed into a more complex project which I decided to group together into a
re-usable package for the community. This was the birth of the original _Responsive Image Builder_.
It served its purpose, but was not easily extensible (as I noticed when trying to add SVG
placeholder support...).

### Now

After several re-writes and TypeScript integration, and my more developed programming skills, I
created a new monorepository from scratch, reimplementing the core functionality of RIB as a modular
set of packages. Additionally, the image build process was no longer hard-coded, but could now be
**defined by the user as a pipeline**.

This introduced the concept of **metadata**, an information object that accompanies the image
buffer. This was at the same time a necessity, to provide the minimum amount of image information
for RAW processing, but also a convince to allow for context-based filename generation.

This was the birth of Image Processing Pipeline (because the `@rib` scope was already taken on npm
😢). The core library features a single processing function that takes an image and a pipeline and
returns a list of generated formats. Pipes that process images are also simple functions that take
an image and return a set of formats.

Why do I think that it's _modern_?

It...

- is completely written in **TypeScript**
- leverages the simple and popular **functional** programming style
- uses the latest `async/await` Promise-based syntax
- has **minimal dependencies**
- uses fast **compiled** image libraries, and **not** JavaScript implementations 🤮

Every now and then you come across a golden tool that is easy to use and solves a problem that you
have, and it become a new favourite of yours. This was my attempt at that. Was it too much? Maybe.
Is it still too little? Probably.

It is however my primary open-source project and a way for my to give back to the community.

I would appreciate your feedback and suggestions!

[gatsby-image]: https://gatsbyjs.com/pluins/gatsby-image
[sqip-primitive]: https://github.com/axe312ger/sqip
[unsplash]: https://unsplash.com
