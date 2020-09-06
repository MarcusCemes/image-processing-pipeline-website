---
id: installation
title: Installation
---

The official IPP CLI is installed using [npm][npm] with the `@ipp/cli` package.

There are two main types of installation, global and project. Global installation provides a level
of convenience, by adding the `ipp` command to your [path][path], but makes it more difficult to
manage CLI versions and pollutes your global shell path.

A more fine-tuned approach is to add the CLI as a dependency to your `package.json` file and invoke
it either through the `npx` terminal command or via an npm script. There is also a more unofficial
`node_modules/.bin` folder that is populated with IPP's shell startup script.

Both types of installation provide the **same functionality**, but are used in different ways.

<!-- prettier-ignore-start -->
:::danger Installation problems
If the installation fails, you may need to either downgrade Node.js or install some additional
compilers. See the [installation problems](../troubleshooting.md#Installation-problems) section in
the troubleshooting guide.
:::
<!-- prettier-ignore-end -->

## Global installation

Installing IPP globally is the easiest approach as it provides an easy way to use IPP from the
terminal without having to manage a project dependency list.

Install the CLI package globally using npm:

```bash
$ npm install --global @ipp/cli
```

This will allow you to run IPP directly from the terminal to quickly process a folder of images.

```bash
$ ipp -i input_folder -o output_folder
```

<!-- prettier-ignore-start -->
:::note
The disadvantage of a global installation is the diffuculty of using third-party pipes, such as
the CompressPipe. If you wish to use more pipes, it is best to set up a projetc installation and
specify them as dependencies.
:::
<!-- prettier-ignore-end -->

## Project installation

Installing IPP as a package dependency allows you to specify a particular CLI version and does not
pollute your global path. The general usage stays the same, the only difference being that IPP must
be either executed using an npm script, or via the `npx` command.

This is the **recommended approach** if you have a long-term project to manage.

```bash
$ npm install --save-dev @ipp/cli
```

This will download and add the package to the adjacent `node_modules` folder. As it does not modify
your terminal configuration, you will need to invoke IPP through npm which is aware of the `ipp`
command.

<!-- prettier-ignore-start -->
:::note
This approach requires the project to have a `package.json` file due to the way npm functions. If
you want to be absolutely sure that the package does **not** get published to the registry, you can
add the following field to the file: `"private": true`, but this is usually not necessary.
:::
<!-- prettier-ignore-end -->

### Launching using an npm script

Adding a new script to your `package.json` will allow you to invoke IPP via the `npm run` command.

```json title="package.json" {3}
...
"scripts": {
  "build-images": "ipp"
}
...
```

```bash
$ npm run build-images
```

It is normal for a project to have many different script entries, such as to prepare, build or test
the project. Various utilities can facilitate the running of scripts.

### Using npx

If you are using npm version `5.2.0` or higher, you may use the `npx` command.

If you have installed a particular version of the CLI in the current working directory, the `npx`
command will run the version in the `node_modules` folder. Otherwise, `npx` will download and run
the newest version of IPP on every invocation.

```bash
$ npx @ipp/cli
```

<!-- prettier-ignore-start -->
:::tip
It is highly recommended to install `@ipp/cli` if you plan on running it more than once when
running via `npx`, as some of the included libraries such as sharp have complex setups that may need
to download/compile binary code, which is a long and expensive process.
:::
<!-- prettier-ignore-end -->

## Uninstalling IPP

IPP can be cleanly removed with the `npm remove` command, without leaving anything behind.

Depending on the original command that you used to install IPP, you may run:

```bash
$ npm remove @ipp/cli
# or
$ npm remove --global @ipp/cli
```

This will **only remove the program**. Any images, folders or configuration files will remain
untouched.

[npm]: https://npmjs.org
[path]: https://en.wikipedia.org/wiki/PATH_(variable)
