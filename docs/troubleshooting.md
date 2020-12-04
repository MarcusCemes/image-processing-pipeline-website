---
id: troubleshooting
title: Troubleshooting
---

## Installation problems

### node-gyp / sharp error

During installation, you may encounter an error like the following:

```text
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! sharp@0.22.1 install: `(node install/libvips && node install/dll-copy && prebuild-install) || (node-gyp rebuild && node install/dll-copy)`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the sharp@0.22.1 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

The libraries that do the actual image processing are written in low-level languages such as C++.
These need to be compiled. The sharp library does a fantastic job of trying to provide pre-built
binaries for your platform and Node.js version, however, if you are using a **new Node.js version or
an unusual platform, sharp will attempt to automatically compile the source on your system to create
a compatible binary**.

IPP tries to provide a hassle-free and easily reproducible installation, but due to the favoured
performance of compiled languages, this will likely be an issue for some time (until WebAssembly
matures enough).

<!-- prettier-ignore-start -->
:::tip
If you do not need a cutting-edge version of Node.js, **downgrading to an LTS (Long Term Support)
version of Node.js may solve the problem**. These versions are more stable and will likely have
pre-compiled binaries already available for sharp.
:::
<!-- prettier-ignore-end -->

Read back the full error to get an idea of what you need to complete the installation.
Unfortunately, the resolution of this problem is operating system dependent. It's highly recommended
to refer to [node-gyp][node-gyp]'s documentation on how to set up the environment for each platform.

#### Python

```text
gyp ERR! find Python **********************************************************
gyp ERR! find Python You need to install the latest version of Python.
gyp ERR! find Python Node-gyp should be able to find and use Python. If not,
gyp ERR! find Python you can try one of the following options:
gyp ERR! find Python - Use the switch --python="C:\Path\To\python.exe"
gyp ERR! find Python   (accepted by both node-gyp and npm)
gyp ERR! find Python - Set the environment variable PYTHON
gyp ERR! find Python - Set the npm configuration variable python:
gyp ERR! find Python   npm config set python "C:\Path\To\python.exe"
gyp ERR! find Python For more information consult the documentation at:
gyp ERR! find Python https://github.com/nodejs/node-gyp#installation
gyp ERR! find Python **********************************************************
```

If you see an error like the above, you need to install a version of Python on your system.
Instructions for your operating system can be found on their [website][python].

#### C++ compiler

```text
gyp ERR! find VS **************************************************************
gyp ERR! find VS You need to install the latest version of Visual Studio
gyp ERR! find VS including the "Desktop development with C++" workload.
gyp ERR! find VS For more information consult the documentation at:
gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
gyp ERR! find VS **************************************************************
```

If you see an error like the above, you need to install a C++ compiler. There is no official
compiler and several options exist. On Windows, the recommended compiler is MSVC, on macOS it's
clang, on on Linux it's gcc.

#### Go compiler

The `@ipp/primitive` package uses a Go-compiled binary. Go is usually very well behaved, and
binaries for each system are bundled with the library. If you runtime problems, you can try
installing [Go][go] on your system, removing the vendor directory from the package and then running
the `prepack` npm script.

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

### Invalid hook call. Hooks can only be called inside of the body of a function component.

IPP uses React and Ink to render the terminal view by default. If you're installing IPP in a project
that already uses a version of React, there may be a dependency version conflict, especially with
new versions of React. The npm package manager is not able install two different versions of a
dependency.

Either run IPP using the `--text` flag to use a simple text renderer instead, or try downgrading
your React version to one that is supported by Ink.

## Found another problem?

If you think it's a bug, open a new issue at out [GitHub repository][repo].

[ink]: https://github.com/vadimdemedes/ink
[python]: https://python.org
[go]: https://golang.org/
[node-gyp]: https://github.com/nodejs/node-gyp
[repo]: https://github.com/MarcusCemes/image-processing-pipeline
