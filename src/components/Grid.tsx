import React from 'react';
import styles from '../../styles/grid.module.css';

interface Props {
    children: React.ReactNode;
    className?: string;
    shrinkToSingleColumn?: boolean;
    maxColWidth: 4 | 5;
}

const Grid = ({ children, className, shrinkToSingleColumn, maxColWidth }: Props) => {
    const gridWidthClass = styles[`grid-width-${maxColWidth}`];
    return (
        <div
            className={`${styles.container} ${className || ''} ${
                shrinkToSingleColumn ? styles.singleColContainer : ''
            }`}
        >
            <div className={`${styles.grid} ${gridWidthClass} ${shrinkToSingleColumn ? styles.singleCol : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Grid;
