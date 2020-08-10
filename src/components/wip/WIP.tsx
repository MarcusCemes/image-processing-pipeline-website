import clsx from "clsx";
import React from "react";
import { FaHammer } from "react-icons/fa";
import styles from "./WIP.module.css";

export const WIP: React.FC<{ centre?: boolean }> = ({ centre }) => (
  <div className={clsx(styles.wipWrapper, { [styles.centre]: centre })}>
    <div className={styles.wip}>
      <FaHammer className={styles.icon} />
      <span>This is still a work in progress</span>
      <span>Bear with us</span>
    </div>
  </div>
);
