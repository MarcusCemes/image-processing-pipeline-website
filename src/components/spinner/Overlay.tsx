import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

interface RawOverlayProps {
  zIndex: number;
}

const RawOverlay = styled.div<RawOverlayProps>`
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

  &.fade-enter {
    pointer-events: none;
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 0.2s cubic-bezier(0.33, 1, 0.68, 1);
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.32, 0, 0.67, 0);
  }
`;

export const Overlay: React.FC<{ active?: boolean; zIndex?: number }> = ({
  active,
  children,
  zIndex = 50,
}) => (
  <CSSTransition in={active} timeout={200} classNames="fade" unmountOnExit>
    <RawOverlay zIndex={zIndex}>{children}</RawOverlay>
  </CSSTransition>
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
