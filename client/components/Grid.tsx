import React from "react";
import styles from "../styles/grid.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  shrinkToSingleColumn?: boolean;
}

const Grid: React.FC<Props> = ({ children, className, shrinkToSingleColumn }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={`${styles.grid} ${shrinkToSingleColumn ? styles.singleCol : ""}`}>{children}</div>
    </div>
  );
};

export default Grid;
