---
id: troubleshooting
title: Troubleshooting
---

## Installation problems

### Compiling addons

While IPP is entirely written in cross-platform JavaScript, most packages use low-level bindings to
C, C++ or Go based libraries for performance reasons. These libraries must be compiled before use.

Compilation is not easy. sharp and `@ipp/primitive` do their best to provide pre-compiled binaries,
however if you are using a brand-new Node.js release or are on a less-widely used CPU architecture,
you may need to compile the libraries yourself.

For sharp, take a look at [node-gyp][node-gyp], you may need to install Python. For
`@ipp/primitive`, you can compile the module yourself by simply installing [Go][go] on your system,
removing the vendor directory from the package and then running the `prepack` npm script.

## Runtime problems

### Garbled terminal output

The CLI package uses [ink][ink] to handle dynamic terminal rendering for a better experience.

If your terminal does not support cursor positioning or is bugging out for some reason, you may try
switching to the Text UI designed for non-interactive terminals that do not support modifications to
the output.

See the `--text` CLI flag.

### Pipe is not declared as a dependency

Some package managers such as yarn have very explicit dependency requirements. The `@ipp/core`
package dynamically imports pipes based ont he given configuration. You may need to explicitly add
these pipes as a package extension of `@ipp/core`.

```yaml title=".yarnrc.yml"
packageExtensions:
  "@ipp/core@^1.0.0":
    dependencies:
      "@ipp/primitive": "^1.0.0"
```

## Found another problem?

If you think it's a bug, open a new issue at out GitHub repository.

[ink]: https://github.com/vadimdemedes/ink
[go]: https://golang.org/
[node-gyp]: https://github.com/nodejs/node-gyp
