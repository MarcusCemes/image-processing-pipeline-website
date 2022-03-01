import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

const spin = keyframes`
  from {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`;

export const Spinner: React.FC = styled(ImSpinner9)`
  position: absolute;
  top: 50%;
  left: 50%;

  animation: ${spin} 1s linear 0s infinite;
`;

export const DelayedSpinner: React.FC<{ timeout?: number }> = ({
  timeout = 1000,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, timeout);

    return () => clearTimeout(timer);
  }, []);

  return active ? <Spinner /> : null;
};
