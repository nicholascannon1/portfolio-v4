import React from "react";
import styles from "../styles/grid.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Grid: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default Grid;
