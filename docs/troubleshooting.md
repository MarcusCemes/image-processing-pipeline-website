---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

## Installation problems

### Compiling addons

While IPP is entirely written in cross-platform JavaScript, most packages use low-level bindings to C, C++ or Go based libraries for performance reasons. These libraries must be compiled before use.

Compilation is not easy. sharp and `@ipp/primitive` do their best to provide pre-compiled binaries, however if you are using a brand-new Node.js release or are on a less-widely used CPU architecture, you may need to compile the libraries yourself.

For sharp, take a look at [node-gyp](https://github.com/nodejs/node-gyp), you may need to install Python. For `@ipp/primitive`, you can compile the module yourself by simply installing [Go](https://golang.org/) on your system, removing the vendor directory from the package and then running the `prepack` npm script.


## Runtime problems

### Pipe is not declared as a dependency

Some package managers such as yarn have very explicit dependency requirements. As `@ipp/core` is required to **dynamically import** pipes, you may need to specify the pipe as an additional dependency of `@ipp/core`.

```yaml title=".yarnrc.yml"
packageExtensions:
  "@ipp/core@^1.0.0":
    dependencies:
      "@ipp/primitive": "^1.0.0"
```
