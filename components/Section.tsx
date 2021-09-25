import React, { useRef } from "react";
import Head from "next/head";
import useIsVisible from "../hooks/useIsVisible";

const VISIBILITY_OFFSET = "-50%";
const SITE_TITLE = "niccannon.com";

interface PropTypes {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Section: React.FC<PropTypes> = ({ title = "", children, className }) => {
  const ref = useRef<HTMLElement>(null);
  const visible = useIsVisible(ref, VISIBILITY_OFFSET);
  const websiteTitle = title ? `${SITE_TITLE} | ${title.toLowerCase()}` : SITE_TITLE;

  return (
    <>
      <Head>{visible && <title>{websiteTitle}</title>}</Head>

      <section className={className} ref={ref}>
        {children}
      </section>
    </>
  );
};

export default Section;
