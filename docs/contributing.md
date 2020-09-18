---
id: contributing
title: Contributing Guidelines
sidebar_label: Contributing
---

Contributions are what makes the open-source community such an amazing place to learn, inspire, and
create. Image Processing Pipeline is an open-source project released under the permissive MIT
license. Any contributions you make will benefit everybody else and are greatly appreciated.

If you would like to help but don't know how to get started, check out the issues page on GitHub.
Anyone can contribute to the project, however, **in order to maintain a high level of quality
throughout the project, we do require certain contribution requirements to be met**, notably for the
main project repository.

If you would like to contribute a new feature, open a new feature request issue on the repository to
discuss and approve the feature with others before starting to work on it! It is our aim to keep the
core as simple as possible to promote maintainability and not feature float.

## Source contributions

We recommend a certain level of coding experience before contributing to the main repository.

### Steps

1. **Fork** the project on GitHub
2. Create your **feature branch** (`git checkout -b feat/AmazingFeature`)
3. Work on your new feature!
4. Update/modify **unit tests** if necessary
5. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
6. **Push** to the origin (`git push origin feat/AmazingFeature`)
7. Open a **pull request** with the main repository

### Pull Request checklist

In order for your changes to be approved, the following requirements must be met:

- Update tests
- Update documentation (see below)
- `npm run build` and `npm test` passes

### Tests

IPP uses Jest for unit testing. This ensures that the code functions correctly and prevents
regression. Unit tests should _describe_ the desired code's behaviour with clear and understandable
language. Contributions that modify the behaviour of the code in any way should update the
associated unit tests.

We advise tests to be updated as needed when adding/modifying/removing a feature. Bug fixes may
benefit from a new test that shows the new correct functioning behaviour, depending on the
important/severity.

Again, we promote simplicity, preferring simple and descriptive tests, rather than proof of every
edge case bug fix.

### Repository management

The main repository is organised into a mono-repository layout, with modules and functionality split
between separate npm packages under the `@ipp` scope.

Dependency management is done using lerna, which can be complex at the best of times. There are
several scripts in the root package to assist with some repetitive operations. The entire project
can be lint, formatted, tested and build from the root directory.

The project can also be run using the `start` script, which uses ts-node under the hood. Other
options include building the project first and executing the JavaScript files. Special care must be
taken when publishing to npm to make sure that all correct files have been built/compiled, and that
_all line endings are LF_.

## Website contributions

Website contributions are a little simpler. The source code of this website is hosted in a [separate
GitHub repository][website-repo]. If you've found a typo or wish to improve a section of the website
you can submit your changes via a Pull Request. Once changes are approved and merged with the main
branch, they will go live automatically.

### Documentation

The documentation pages are written in a human-friendly Markdown format. Additionally, each
documentation page has a handy "Edit this page" link that will take you directly to the file in
question on GitHub using their online editor.

#### Formatting

Markdown files should be wrapped with a maximum line length of `100` characters. You can either
limit lines manually to the maximum line length or use the repository formatter (_recommended_).

The repository formatter, Prettier, is automatically configured to format and re-wrap lines
properly. You can either use a Prettier extension to format manually or run `npm run format` in the
terminal. Additionally, VSCode is configured to format on save.

#### Admonitions

Admonitions are available to highlight important notices. They should only be used when necessary,
such as to point out an important feature, as they disconnect and distract the reader from the
documentation.

<!-- prettier-ignore-start -->
:::danger I'm an admonition
Don't use me excessively!
:::
<!-- prettier-ignore-end -->

The admonition code must be surrounded by Prettier ignore statements, as the code formatter does not
recognise this unofficial syntax. There is a VSCode snippet `ad` available. Manual formatting is
required to wrap the contents to the correct line length.

```mdx
<!-- prettier-ignore-start -->
:::danger I'm an admonition
Don't use me excessively!
:::
<!-- prettier-ignore-end -->
```

### The rest

Changes to other parts of the website (with the exclusion of typos or improvements to overall
grammar/syntax) should be first discussed in the website directory with other contributors, as they
induce major changes to the look/functioning of the website.

[website-repo]: https://github.com/MarcusCemes/image-processing-pipeline-website
