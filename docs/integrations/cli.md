# Command Line

The CLI package is a convenient wrapper around the core library, with some CLI-specific utilities, configuration parsing and manifest file generation. Additionally, it attempts to increase the number of UV threads available to the Node.js runtime to make full use of multicore CPUs.

## Installation

The CLI tool can be run in one of three ways.

### Global installation

Using npm, the `ipp` command can be installed globally and added to your PATH. This is the easiest way to use IPP from the command line.

```shell
$ npm install   --global @ipp/cli
$ npm uninstall --global @ipp/cli
```

### Local installation

Using npm, the `ipp` command can be installed into a Node.js project and used in local npm scripts, without modifying your path. It's also possible to invoke the locally installed packaged using `npx` if desired.

```shell
$ npm install   @ipp/cli
$ npm uninstall @ipp/cli
```

### Immediate invocation without installation

npm offers a way to (unsafely) execute a package command, without doing a full install. This is useful for one-off invocations. If you plan on running the command more than once, consider installing the command and then removing it when you are finished.

```shell
$ npx @ipp/cli
```

If you have `ipp` installed locally, `npx` will resolve that package instead of downloading the latest version from npm.

## Usage

Depending on the installation method, the command can then be invoked from the terminal.

```shell
# Global
$ ipp --in input_directory --out output_directory
# Local, with a script called "ipp_script" that executes "ipp"
$ npm run ipp_script -- --in override_input_directory
# Immediate invocation or local installation
$ npx @ipp/cli --in input_directory --out output_directory
```

In all cases, the same CLI program will run with the provided CLI flags. See the [CLI reference](../packages/cli.md#flags) for a list of supported CLI flags, or run `ipp --help`.

## Configuration

See the [CLI reference](../packages/cli.md#configuration).

## Parallelism

See the [CLI reference](../packages/cli.md#parallelism).

## Manifest generation

See the [CLI reference](../packages/cli.md#manifest-generation).
