# Installation

This page will explain how to download IPP using npm. You can choose to install IPP globally on your system or locally in your project.

## Global installation

This is the easiest option, as it gives you access to the IPP command anywhere on your system.

```shell
$ npm install --global @ipp/cli
```

:::info

Lines beginning with a dollar sign indicate commands that you should execute in your OS's terminal (without the dollar sign). If you're not familiar with the terminal, we highly recommend that you look up some basic commands, such as changing the current working directory (`cd`).

:::

This install the package and add the `ipp` command to your path. The usage is very similar to a project installation, just make sure that you have an IPP configuration file containing the pipeline in your current working directory.

```shell
$ ipp
```

## Project installation

Adding IPP to your `package.json` file allows you to fix a version of the CLI and install the package into the local `node_modules` directory, without polluting your global namespace.

:::tip

A `package.json` file is the project configuration file used by Node.js, if you do not have one, you can generate one with `$ npm init --yes`.

:::

```shell
$ npm install --save-dev @ipp/cli
```

This will add the latest version of IPP to your dependencies and install the package. Inside of your `package.json` file, you should see something like:

```json{3} title=package.json
{
    "devDependencies": {
        "@ipp/cli": "^1.2.0"
    }
}
```

The easiest way to run IPP is to launch it via npm, either using a script, or by running it directly. To create a script, add the following to your package.json file:

```json{3-5} title=package.json
{
    "scripts": {
        "build-images": "ipp"
    }
}
```

This can then be executed by running `$ npm run build-images`.

It's also possible to run IPP directly without creating a script with `$ npm exec ipp`. This essentially attempts to run the IPP command from within the Node.js/npm environment, making use of your local `node_modules` folder.
