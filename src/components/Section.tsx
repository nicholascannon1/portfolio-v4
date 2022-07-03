import React, { useRef, useState } from 'react';
import Head from 'next/head';
import useIsVisible from '../hooks/useIsVisible';
import styles from '../../styles/section.module.css';

const VISIBILITY_OFFSET = '-45%';
const SITE_TITLE = 'nicholascannon.com';

interface PropTypes {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const Section: React.FC<PropTypes> = ({ title = '', children, className }) => {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);
    const visible = useIsVisible(ref, VISIBILITY_OFFSET);

    if (visible && !hasBeenVisible) setHasBeenVisible(true);
    const websiteTitle = title ? `${SITE_TITLE} | ${title.toLowerCase()}` : SITE_TITLE;
    const animationClassName = visible || hasBeenVisible ? styles.sectionFadeIn : '';

    return (
        <>
            <Head>{visible && <title>{websiteTitle}</title>}</Head>

            <section className={`${className} ${animationClassName}`} ref={ref}>
                {title && <h2>{title.toLowerCase()}</h2>}
                {children}
            </section>
        </>
    );
};

export default Section;
