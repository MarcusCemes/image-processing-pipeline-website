import { ManifestExport } from "@ipp/webpack";

/* IPP webpack export */
declare module "*.jpg" {
  const manifest: Readonly<ManifestExport>;
  export default manifest;
}
