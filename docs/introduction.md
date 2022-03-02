---
slug: /
---

# Introduction

_This section is under development._

## Why Node.js?

Node.js seemed like a natural choice for this project, considering its prevalence in the web development ecosystem (with tools such as Webpack, Rollup, Vite, ...). It supports dynamic module loading and execution and facilitates the distribution of packages via npm.

Despite this, there are a few considerations against using Node.js. Firstly, it is "frowned upon" by other communities who actively try to avoid any sort of Node.js integration within their projects. Secondly, it requires a runtime to be installed and thirdly, it is not very well suited for CLI processing applications due to the painfully slow module lookup times (synchronous `require` calls and `node_modules`) and its limited number of IO threads that are not that easy to change without restarting the runtime, especially on Windows.

Although the last point could be addressed by ESM and other internal improvements, there are future plans to port IPP to a language that can compile to a fast cross-platform binary, such as Go or Rust (which has excellent support for WebAssembly). This would effectively allow IPP to integrate with any language ecosystem with no dependence on the Node.js runtime. The downside of this approach would be the difficulty of designing your own pipes (compiling to WebAssembly, duplication of shared dependencies such as image manipulation libraries), and the difficulty of designing a cross-platform dynamic module system.
