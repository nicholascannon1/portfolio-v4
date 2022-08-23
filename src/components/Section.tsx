import React, { useRef, useState } from 'react';
import useIsVisible from '../hooks/useIsVisible';
import styles from '../../styles/section.module.css';

const VISIBILITY_OFFSET = '-35%';

interface Props {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const Section = ({ title = '', children, className }: Props) => {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);
    const visible = useIsVisible(ref, VISIBILITY_OFFSET);

    if (visible && !hasBeenVisible) {
        setHasBeenVisible(true);
    }
    const animationClassName = visible || hasBeenVisible ? styles.sectionFadeIn : '';

    return (
        <section className={`${animationClassName} ${className || ''}`} ref={ref}>
            {title && <h2>{title.toLowerCase()}</h2>}
            {children}
        </section>
    );
};

export default Section;
