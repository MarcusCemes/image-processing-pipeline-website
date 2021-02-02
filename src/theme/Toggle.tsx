import styled from "@emotion/styled";
import React from "react";
import { BiSun } from "react-icons/bi";
import { HiMoon } from "react-icons/hi";

const ResetButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const ToggleButton = styled(ResetButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5em;

  cursor: pointer;
`;

export default function ({ className, checked, onChange, ...rest }) {
  return (
    <ToggleButton
      aria-label={rest["aria-label"]}
      className={className}
      onClick={() => onChange({ target: { checked: !checked } })}
    >
      {checked ? <BiSun /> : <HiMoon />}
    </ToggleButton>
  );
}
