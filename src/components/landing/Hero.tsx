import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import styles from "./Hero.module.css";

const Button: React.FC<{ primary?: boolean; href: string }> = ({ children, primary, href }) => (
  <Link to={href}>
    <button
      className={clsx(
        "button button--lg",
        primary ? "button--primary" : "button--secondary",
        styles.button
      )}
    >
      {children} <FiChevronsRight className={styles.buttonIcon} />
    </button>
  </Link>
);

export const Hero: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className={styles.hero}>
    <span className={styles.title}>{title}</span>
    <span className={styles.subtitle}>{subtitle}</span>

    <div className={styles.buttons}>
      <Button primary href="/docs/guide/prerequisites">
        Guide
      </Button>
      <Button href="/docs">Documentation</Button>
    </div>
  </div>
);
