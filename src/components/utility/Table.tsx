import React, { ReactNode } from "react";
import styles from "./Table.module.css";

/** Centres a Docusaurus markdown table by creating a flex container and overriding the table width
 *
 * @example
 * <CentredTable>
 *
 * | type | description |
 * | ...  |     ...     |
 *
 * </CentredTable>
 */
export const CentredTable: React.FC<{ label: ReactNode }> = ({ children, label }) => (
  <div className={styles.centreTable}>
    {children}
    {label && <sub>{label}</sub>}
  </div>
);
