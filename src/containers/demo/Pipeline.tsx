import { Container } from "@site/src/components/layout";
import CodeBlock from "@theme/CodeBlock";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

type Collapsed = { collapsed: boolean };
type CollapseDispatch = { setCollapsed: Dispatch<SetStateAction<boolean>> };

const yamlPipeline = `pipeline:
  - pipe: passthrough
    save: Original
  - pipe:
      resolve: "@ipp/primitive"
      module: PrimitivePipe
    then:
      - pipe:
          resolve: "@ipp/compress"
          module: CompressPipe
        save: Primitive SVG
  - pipe: resize
    options:
      resizeOptions:
        width: 640
    then:
      - pipe:
          resolve: "@ipp/trace"
          module: TracePipe
        then:
          - pipe:
              resolve: "@ipp/compress"
              module: CompressPipe
            save: Traced SVG
  - pipe: convert
    options:
      format: raw
    then:
      - pipe: resize
        options:
          breakpoints:
            - name: Small
              resizeOptions:
                width: 320
            - name: Medium
              resizeOptions:
                width: 1280
            - name: Large
              resizeOptions:
                width: 1920
            - name: Extra large
              resizeOptions:
                width: 3840
        then:
          - pipe: convert
            options:
              format: original
              convertOptions:
                quality: 100
            then:
              - pipe:
                  resolve: "@ipp/compress"
                  module: CompressPipe
                options:
                  softFail: true
                save: "[breakpoint] JPEG"
          - pipe: convert
            options:
              format: webp
            save: "[breakpoint] WebP"
`;

const CentredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 8em;
`;

const ControlContainer = styled.div`
  margin-bottom: 2em;

  display: flex;
  justify-content: center;
`;

const Control = styled.div<Collapsed>`
  display: flex;
  align-items: center;

  cursor: pointer;
  font-weight: bold;

  opacity: ${({ collapsed }) => (collapsed ? 0.5 : 1)};
  transition: all 0.5s linear;

  &:hover {
    opacity: 1;
  }
`;

const SpacedIcon = styled.svg`
  margin-left: 0.5em;
`;

const CodeContainer = styled.div`
  width: 100%;
  max-width: 40em;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const Collapser: React.FC<Collapsed & CollapseDispatch> = ({ collapsed, setCollapsed }) => (
  <ControlContainer>
    <Control collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
      {collapsed ? "Show" : "Hide"} the pipeline configuration
      <SpacedIcon as={collapsed ? AiOutlineRight : AiOutlineDown} />
    </Control>
  </ControlContainer>
);

export const Pipeline: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <CentredContainer>
      <Collapser collapsed={collapsed} setCollapsed={setCollapsed} />
      {!collapsed && (
        <CodeContainer>
          <CodeBlock className="language-yml" metastring={`title="ipprc.yml"`}>
            {yamlPipeline}
          </CodeBlock>
        </CodeContainer>
      )}
    </CentredContainer>
  );
};
