---
title: Project motivation
author: Marcus Cemes
author_title: Project Founder & Lead Maintainer
author_url: https://github.com/MarcusCemes
author_image_url: https://gravatar.com/avatar/b024613447b5c4d7df9cd977a3f17b47?s=200
description: A short article that goes into the motivation for creating Image Processing Pipeline
---

The first question you need to ask yourself is:

**Why bother? Why is website image optimisation so important?**

If you are not even thinking about resizing images then the answer is probably not. You could just
serve the original images to your user. It may not have an immediate effect and you will probably
get away with it. But what sets truly good websites apart is their attention to detail.

In short, it provides bandwidth savings (meaning fewer servers and less egress data, which is
expensive in the cloud) and makes your website **faster to load** and more responsive (less work for
the browser to downscale and paint the image), while also saving your user's internet allowance and
battery. The only downside is the added complexity to create and serve these optimised images.

It's up to you to decide based on your particular needs, there are some [other guides][images-guide]
that go into more detail. There is a recent movement for providing better online experiences (you
may have heard of Progressive Web Apps), and I believe that images play a large role in keeping the
experience fast and immersive.

<!-- truncate -->

### A little history

Image Processing Pipeline was created out of a lack of adequate solutions available on the
open-source community. Of course, there are a large number of image-related tools already available,
but I kept hitting dead-ends and finding that it does not do everything that I need it to.

More often than not, this led me to try to hack and augment existing solutions, which is not
maintainable in the long run. There was some fantastic work already done by Gatsby's
[image][gatsby-image] plugin, and along with the [sqip-primitive-plugin][sqip-primitive], it
_almost_ did a lot of what I wanted, with a little bit of patchwork. But as soon as I left the
Gatsby eco-system (which is still an amazing platform!), I realised I was desperate to find another
solution.

In the beginning, my primary requirements were:

- Generate a **small beautiful placeholder** (no 16x16 pixels blurred mush)
- Generate several **responsive sizes** for different devices
- Create an efficient **WebP variant** for supported browsers

Over time, these requirements expanded into a more complex set of goals.

- Resize images, with a **high-quality** and **fast** library, no JS, no ImageMagick
- Avoid **duplicate** images (efficient caching, no-query based API generation)
  - This means that the browser should be aware of the best **most suited image**
- Avoid committing generated images to **source control** (git does not like binary files)
- Process images in **RAW** pixel data and not using a compressed JPEG intermediate format

This is, in my opinion, a very modest set of requirements (others may not agree), and yet not
trivially resolved. My interest in film and photography meant that I wanted a solution that was
respectful of the work that went into creating the image.

Wouldn't it be amazing if you could download a large-high-quality master image, such as one from
[Unsplash][unsplash], commit it into source control once and forever, and have that image resized
and compressed during the website build phase (providing that you use one...)? This was the goal.

It started as a single file script, that could take a set of images and resize them. At the same
time, it was a learning project from which I could learn the fundamentals of JavaScript asynchronous
programming.

Over time, it developed into a more complex project which I decided to group together into a
reusable package for the community. This was the birth of the original _Responsive Image Builder_.
It served its purpose but was not easily extensible (as I noticed when trying to add SVG placeholder
support...).

### Now

After multiple rewrites and my desire to also convert the codebase to TypeScript, I created a new
mono-repository from scratch, reimplementing the core functionality of RIB as a modular set of
packages. The design also had been heavily reworked, the image build process is no longer hard-coded
with several options to enable/disable different parts, but could now be defined **declaratively by
the user as as pipeline**. Not everyone has the same needs.

This new design introduced the concept of metadata. If the image was going to be passed through a
variable pipeline, it needed some data to identify it and provide contextual information, such as
the image dimensions. It was also a requirement to support image processing in RAW, but also adds
the benefit of contextual filename generation, such as `islands-small.jpg`.

The implementation in Node.js also proved a challenge, due to its single-threaded and limited nature
by default. Tests and benchmarks ensued to determine the fastest and most efficient patterns.

This was the birth of Image Processing Pipeline (because the `@rib` scope was already taken on npm
😢). The heart of the library revolves around the `@rib/core` module, which exports a single
asynchronous promise-based function that accepts and image and a pipeline. The image is recursively
processed according to the pipeline specification, and a set of generated formats are returned.

Each pipe, a single unit of work that makes up a pipeline, is also an asynchronous function, that
takes the image and returns any number of outputs. The core pipes, such as those that resize images,
are just functional wrappers around the [sharp][sharp] library.

#### Why do I think it's _modern_?

It...

- is completely written in **TypeScript**
- leverages the simple and popular **pure functional** programming style
- uses the latest `async/await` promise-based syntax
- has **minimal dependencies**
- uses fast **compiled** image libraries, and **not** JavaScript implementations 🤮

Will it solve every solution? No. It is particular targeted for front-end stacks, such as React, Vue
and Angular. The range of website stacks is so vast that it is not possible to design something for
everyone. This was my attempt at creating a swiss-army knife for image preparation that is easily
extensible with your own needs.

Is it too much? Maybe. Is it still too little? Probably. It is however my main open-source project
and a way for me to give back to the community.

I would appreciate your feedback and suggestions!

[images-guide]: https://images.guide
[gatsby-image]: https://gatsbyjs.com/pluins/gatsby-image
[sqip-primitive]: https://github.com/axe312ger/sqip
[unsplash]: https://unsplash.com
[sharp]: https://sharp.pixelplumbing.com
