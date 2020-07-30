/// <reference types="@docusaurus/module-type-aliases" />

/* CSS Modules */
declare module "*.css" {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}
