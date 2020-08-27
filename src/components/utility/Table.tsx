import clsx from "clsx";
import React, { ReactNode, CSSProperties } from "react";
import styles from "./Table.module.css";

/**
 * Centres a Docusaurus markdown table by creating a flex container and overriding the table width.
 * @example
 * <FormatTable centre fullWidth label="Example table">
 *
 * | type | description |
 * | ...  |     ...     |
 *
 * </FormatTable>
 */
export const FormatTable: React.FC<{
  centre?: boolean;
  expand?: boolean;
  fullWidth?: boolean;
  label?: ReactNode;
  top?: CSSProperties["marginTop"];
}> = ({ centre, children, expand, fullWidth, label, top }) => (
  <div
    className={clsx({
      [styles.centre]: centre,
      [styles.expand]: expand,
      [styles.fullWidth]: fullWidth,
    })}
    style={{
      marginTop: top,
    }}
  >
    {children}
    {label && (
      <sub className={styles.label}>
        <i>{label}</i>
      </sub>
    )}
  </div>
);
