# TypeScript

Image Processing Pipeline is written in [TypeScript][typescript], a typed super-set of JavaScript that has slowly been embraced by the ecosystem, and ships with first-class type declaration files.

If you use TypeScript, you can integrate the library and benefit from the increased type safety. If you prefer to work with vanilla JavaScript, you can still benefit from automatic type completion and hints by using a modern editor such as [Visual Studio Code][vscode].

## Types in this documentation

The type definitions of various data objects and functions will be given in their TypeScript syntax in this documentation. Most of the shared types and interfaces in IPP are available as part of the [@ipp/common](./packages/common) package, which contains no dependencies. You may use this package yourself to use commonly defined types, such as `Pipeline`.

### Example

This code sample is taken from `pipeline.ts` in the [@ipp/common](./packages/common) package.

```ts
/**
 * The template of a single branch of a pipeline schema. It may only have one input, but the
 * result of the first pipe may be sent to multiple consecutive pipes.
 *
 * The save property indicates whether the output of the pipe should also be exported as from
 * the pipeline branch, which can later be identified by the value of the save property.
 */
export interface PipelineBranch<O = any> {
  pipe: string | { resolve: string; module?: string } | Pipe;
  options?: O;
  save?: PrimitiveValue;
  then?: Pipeline;
}

/**
 * The template that a complete pipeline schema must adhere to. It is a collection of
 * "tree branches", where the beginning of each branch will receive the original
 * image, which will subsequently be piped into the next connected pipes.
 *
 * Once the pipeline has finished executing, any pipeline branch that have the `save` property
 * defined will have their output image buffer saved as an exported format of the pipeline.
 */
export type Pipeline = PipelineBranch[];
```

[typescript]: https://www.typescriptlang.org/
[vscode]: https://code.visualstudio.com/
