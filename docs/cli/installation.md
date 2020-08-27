---
id: installation
title: Installation
---

The official IPP CLI is installed from [npm][npm] with the `@ipp/cli` package. With npm, you have
several options available for managing how your OS command line resolves the location of the nest
CLI binary file.

There are two main types of installation, global and project. Global installation provides a level
of convenience, by adding the `ipp` command to your [path][path], but makes it more difficult to
manage CLI versions and pollutes your global shell path.

A more fine-tuned approach is to add the CLI as a dependency to your `package.json` file and invoke
it either through the `npx` terminal command or via an npm script. There is also a more unofficial
`node_modules/.bin` folder that is populated with IPP's shell startup script.

Both types of installation provide the same functionality, but are used in different ways.

## Global install

This is the easiest approach and is recommended for most users, as it provides an easy way to use
IPP from the terminal without having to manage a project dependency list.

Install the CLI globally using the `npm install -g` command.

```bash
$ npm install --global @ipp/cli
```

This will allow you to run IPP directly from the terminal to quickly process a folder of images.

```bash
$ ipp
```

## Project install

Installing IPP as a package dependency allows you to specify a particular CLI version and does not
pollute your global path. The general usage stays the same, the only difference being that IPP must
be either executed using an npm script, or via the npx command.

```bash
$ npm install @ipp/cli
```

This will download and add the package to the adjacent `node_modules` folder.

### Using npm scripts

Once IPP has been added, you may create an npm script just as you would with any other command:

```json title="package.json" {3}
...
"scripts": {
  "build-images": "ipp"
}
...
```

This script may then be run using the `npm run` command:

```bash
$ npm run build-images
```

### Using npx

If you are using npm version `5.2.0` or higher, you may use the `npx` command.

If you have installed a particular version of the CLI, the `npx` command will run the version in the
`node_modules` folder. Otherwise, `npx` will download and run the newest version of IPP on every
invocation.

```bash
$ npx @ipp/cli
```

<!-- prettier-ignore-start -->
:::note
It is highly recommended to install `@ipp/cli` if you plan on running it more than once, as
some of the included libraries such as sharp have complex setups that may need to download/compile
binary code.
:::
<!-- prettier-ignore-end -->

## Uninstalling IPP

IPP can be cleanly uninstalled with the `npm remove` command, without leaving anything behind.
Depending on the command that you used to install IPP, you may run:

```bash
$ npm remove @ipp/cli
# or
$ npm remove --global @ipp/cli
```

This will only remove the program. Any images, folders or configuration files will remain untouched.

[npm]: https://npmjs.org
[path]: https://en.wikipedia.org/wiki/PATH_(variable)
