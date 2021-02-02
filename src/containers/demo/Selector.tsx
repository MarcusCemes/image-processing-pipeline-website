import styled from "@emotion/styled";
import clsx from "clsx";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { breakpoints } from "../../components/layout";
import { Image } from "./image";
import { DemoItem } from "./Layout";
import { PreviewData } from "./Preview";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 2em;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

const CaretSpacer = styled(BiChevronRight)`
  margin: 1em;
  transform: rotate(90deg);

  @media screen and (min-width: ${breakpoints.md}) {
    transform: none;
  }
`;

const Button = styled.button`
  width: 12em;
  max-width: 100%;

  text-overflow: ellipsis;
  overflow: hidden;
`;

const DropdownItem = styled.span`
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.8em;
`;

const Header: React.FC = () => (
  <>
    <Title>Demo</Title>
    <p>
      Play around with the buttons below to see some examples of generated images. Each image is
      from a high-quality source generously provided by{" "}
      <a target="_blank" href="https://unsplash.com/">
        Unsplash
      </a>
      . You can see the untouched original using the <i>Original</i> selector.
    </p>
  </>
);

const Footer: React.FC = () => (
  <p>
    An ideal pattern would be to <strong>embed a tiny SVG preview to act as a placeholder</strong>{" "}
    until the higher-quality device-optimised image has been loaded. The preview can then be{" "}
    <strong>faded out</strong> and replaced. WebP is a superior web image codec, but is not
    supported by all browsers. That is why a fallback JPEG is also generated.
  </p>
);

const DropdownButton: React.FC<{
  disabled?: boolean;
  items: Array<{ text: string; key: string; onClick: () => void; selected?: boolean }>;
  primary?: boolean;
}> = ({ children, disabled, items, primary = false }) => (
  <div className={clsx("dropdown", { "dropdown--hoverable": !disabled })}>
    <Button
      className={clsx("button", primary ? "button--primary" : "button--secondary", { disabled })}
      data-toggle="dropdown"
    >
      {children}
    </Button>

    <ul className="dropdown__menu">
      {items.map((item) => (
        <li key={item.key}>
          <DropdownItem
            className={clsx("dropdown__link", item.selected && "dropdown__link--active")}
            onClick={item.onClick}
          >
            {item.text}
          </DropdownItem>
        </li>
      ))}
    </ul>
  </div>
);
export const Selector: React.FC<{
  images: Image[];
  preview?: PreviewData;
  setPreview: Dispatch<SetStateAction<PreviewData | undefined>>;
}> = ({ images, preview, setPreview }) => {
  const [selectedImage, setSelectedImage] = useState<Image>();

  return (
    <DemoItem>
      <Header />

      <ButtonWrapper>
        <DropdownButton
          items={images.map((image) => ({
            text: image.name as string,
            key: image.data.s!.x as string,
            onClick: () => {
              setSelectedImage(image);
            },
            selected: image.name === selectedImage?.name,
          }))}
          primary={!selectedImage?.name}
        >
          {selectedImage?.name || "Select image"}
        </DropdownButton>

        <CaretSpacer />

        <DropdownButton
          disabled={!selectedImage}
          items={
            selectedImage?.data.f?.map((format) => ({
              text: format.s === true || format.s === "true" ? "Original" : (format.s as string),
              key: format.x as string,
              onClick: () =>
                setPreview({
                  src: format.p as string,
                  originalSrc: findOriginal(selectedImage),
                  width: format.w as number,
                  height: format.h as number,
                  format: format.f as string,
                }),
              selected: preview?.src === format.p,
            })) || []
          }
          primary={selectedImage && (!preview || !findPreviewName(selectedImage, preview.src))}
        >
          {(preview && selectedImage && findPreviewName(selectedImage, preview.src)) ||
            "Select format"}
        </DropdownButton>
      </ButtonWrapper>

      <Footer />
    </DemoItem>
  );
};

function findOriginal(image: Image): string | null {
  if (!image.data.f) return null;

  for (const format of image.data.f) {
    if (typeof format.s === "string" && format.s.indexOf("Original") !== -1) {
      return format.p as string;
    }
  }

  return null;
}

function findPreviewName(image: Image, src: string): string | undefined {
  const format = image.data.f?.find((format) => format.p === src);

  if (!format) return void 0;
  if (format.s === true || format.s === "true") return "Original";
  return format.s as string;
}
