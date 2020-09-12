import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding-left: 1em;
  padding-right: 1em;

  @media screen and (min-width: ${breakpoints.sm}) {
    max-width: 640px;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 768px;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
  }
`;
