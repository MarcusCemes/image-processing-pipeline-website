import React, { useState } from "react";
import { demoImages } from "./image";
import { DemoContainer } from "./Layout";
import { Pipeline } from "./Pipeline";
import { Preview, PreviewData } from "./Preview";
import { Selector } from "./Selector";

export const Demo: React.FC = () => {
  const [preview, setPreview] = useState<PreviewData>();

  return (
    <>
      <DemoContainer>
        <Selector
          images={demoImages}
          preview={preview}
          setPreview={setPreview}
        />
        <Preview preview={preview} />
      </DemoContainer>
      <Pipeline />
    </>
  );
};
