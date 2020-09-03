import { ManifestExport } from "@ipp/webpack";

export interface Image {
  name: string;
  data: ManifestExport;
}

export const demoImages: Image[] = [
  { name: "Bread", data: require("../../assets/demo/bread.jpg") },
  { name: "Flowers", data: require("../../assets/demo/flowers.jpg") },
  { name: "Hills", data: require("../../assets/demo/hills.jpg") },
  { name: "Ink", data: require("../../assets/demo/ink.jpg") },
  { name: "Leaves", data: require("../../assets/demo/leaves.jpg") },
  { name: "Painting", data: require("../../assets/demo/painting.jpg") },
];

export function loadImage(path: string): Promise<void> {
  return new Promise((res, rej) => {
    const img = new Image();
    img.width = 0;
    img.height = 0;

    img.addEventListener("load", () => res());
    img.addEventListener("error", (err) => rej(err));
    img.src = path;

    if (img.complete) {
      res();
    }
  });
}
