import Link from "@docusaurus/Link";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import styled from "styled-components";

export const AlignedButton = styled.button`
  display: inline-flex;
  align-items: center;
`;

const LinkWithoutDecoration = styled(Link)`
  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none !important;
  }
`;

const DisplacedIcon = styled(FiChevronsRight)`
  margin-top: 0.05em;
  margin-left: 0.2em;
`;

export const ButtonLink: React.FC<{ to: string } & JSX.IntrinsicElements["button"]> = ({
  children,
  to,
  ...rest
}) => (
  <LinkWithoutDecoration to={to}>
    <AlignedButton {...(rest as any)}>
      {children} <DisplacedIcon />
    </AlignedButton>
  </LinkWithoutDecoration>
);
