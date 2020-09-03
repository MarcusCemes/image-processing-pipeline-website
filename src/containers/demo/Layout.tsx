import styled from "styled-components";
import { breakpoints, Container } from "../../components/layout";

export const DemoContainer = styled(Container)`
  margin-top: 4em;
  margin-bottom: 4em;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const DemoItem = styled.div`
  flex: 1;
  padding: 1em 2em;
`;

export const DemoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
