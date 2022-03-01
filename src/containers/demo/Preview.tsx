import styled from "@emotion/styled";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";
import { DelayedOverlay, Spinner } from "../../components/spinner";
import { loadImage } from "./image";
import { DemoItem } from "./Layout";
import { formatBytes, getResourceSize } from "./resourceTiming";

export interface PreviewData {
  src: string;
  originalSrc?: string;

  width: number;
  height: number;
  format: string;
}

const Image = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const ImageText = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.4;
  font-weight: bold;

  user-select: none;
`;

const PreviewContainer = styled.div`
  position: relative;

  width: 100%;
  /* max-width: 600px; */
  padding-top: 60%;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;
  border-radius: 4px;

  border: 1px solid rgba(128, 128, 128, 0.2);
  box-shadow: var(--ifm-global-shadow-md);
`;

const StyledImageInfo = styled.div`
  position: absolute;
  left: 0.5em;
  right: 0.5em;
  top: calc(100% + 1.5em);

  text-align: center;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: var(--ifm-font-color-base);
  opacity: 0.6;

  user-select: none;

  & > span {
    margin: 0 0.5em;
  }
`;

const ImageInfo: React.FC<{ preview?: PreviewData }> = ({ preview }) => {
  const [size, setSize] = useState<number>();
  const [originalSize, setOriginalSize] = useState<number>();

  useEffect(() => {
    if (!preview) return;

    setSize(void 0);
    setOriginalSize(void 0);

    let mounted = true;

    loadImage(preview.src)
      .then(() => getResourceSize(preview.src))
      .then((size) => {
        if (mounted && size) setSize(size);
      })
      .catch(console.error);

    if (preview.originalSrc) {
      loadImage(preview.originalSrc)
        .then(() => getResourceSize(preview.originalSrc!))
        .then((size) => {
          if (mounted && size) setOriginalSize(size);
        })
        .catch(console.error);
    }

    return () => {
      mounted = false;
    };
  }, [preview]);

  const reduction =
    (size && originalSize && Math.floor((1 - size / originalSize) * 100)) ||
    null;
  const formattedReduction = (reduction && `${reduction}% smaller`) || null;

  return (
    <StyledImageInfo>
      {preview ? (
        <>
          <span>{preview.format.toUpperCase()}</span>
          <span>
            {preview.width}×{preview.height}
          </span>
          {size && <span>{formatBytes(size)}</span>}
          {reduction && <span>{formattedReduction}</span>}
        </>
      ) : (
        <>Information will be shown here</>
      )}
    </StyledImageInfo>
  );
};

export const Preview: React.FC<{ preview?: PreviewData }> = ({ preview }) => {
  const [loaded, setLoaded] = useState(true);
  const [data, setData] = useState<PreviewData | string>("Select a format");

  useEffect(() => {
    if (!preview) {
      setData("Select a format");
      return;
    }

    setLoaded(false);

    let mounted = true;
    (async () => {
      try {
        await loadImage(preview.src);
        if (!mounted) return;

        setData(preview);
      } catch {
        if (!mounted) return;

        setData("Error loading image");
      }

      setLoaded(true);
    })();

    return () => {
      mounted = false;
    };
  }, [preview]);

  const animateProps: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.15 } },
    transition: { duration: 0.15 },
  };

  return (
    <DemoItem>
      <PreviewContainer>
        <ImageContainer>
          <AnimatePresence>
            {typeof data === "string" ? (
              <ImageText key="no-fmt" {...animateProps}>
                {data}
              </ImageText>
            ) : (
              <Image key={data.src} src={data.src} {...animateProps} />
            )}
          </AnimatePresence>

          <DelayedOverlay active={!loaded}>
            <Spinner />
          </DelayedOverlay>
        </ImageContainer>
        <ImageInfo preview={typeof data !== "string" ? data : undefined} />
      </PreviewContainer>
    </DemoItem>
  );
};
