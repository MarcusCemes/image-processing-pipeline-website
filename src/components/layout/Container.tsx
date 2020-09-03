import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${breakpoints.sm}px) {
    max-width: 640px;
  }

  @media screen and (min-width: ${breakpoints.md}px) {
    max-width: 768px;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    max-width: 1024px;
  }

  @media screen and (min-width: ${breakpoints.xl}px) {
    max-width: 1280px;
  }
`;
