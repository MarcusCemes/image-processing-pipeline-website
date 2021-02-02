import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const OverlayElement = styled(motion.div)<{ zIndex: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.8);

  z-index: ${(props) => props.zIndex};
`;

export const Overlay: React.FC<{ active?: boolean; zIndex?: number }> = ({
  active,
  children,
  zIndex = 50,
}) => (
  <AnimatePresence>
    {active && (
      <OverlayElement
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0, pointerEvents: "none" },
          visible: { opacity: 1, pointerEvents: "initial" },
        }}
        transition={{ duration: 0.15 }}
        zIndex={zIndex}
      >
        {children}
      </OverlayElement>
    )}
  </AnimatePresence>
);

export const DelayedOverlay: React.FC<{ active?: boolean; timeout?: number; zIndex?: number }> = ({
  active,
  children,
  timeout = 400,
  zIndex,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!active) {
      setShow(false);
    } else {
      const timer = setTimeout(() => {
        setShow(true);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <Overlay active={show} zIndex={zIndex}>
      {children}
    </Overlay>
  );
};
