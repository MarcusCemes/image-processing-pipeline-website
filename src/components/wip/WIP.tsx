import clsx from "clsx";
import React from "react";
import { FaHammer } from "react-icons/fa";
import styles from "./WIP.module.css";

export const WIP: React.FC<{ centre?: boolean; spacing?: number | string }> = ({
  centre,
  spacing,
}) => (
  <div
    className={clsx({ [styles.centre]: centre })}
    style={spacing ? { paddingTop: `${spacing}em`, paddingBottom: `${spacing}em` } : void 0}
  >
    <div className={styles.wip}>
      <FaHammer className={styles.icon} />
      <span>This section is still a work in progress</span>
      <span>Bear with us</span>
    </div>
  </div>
);
