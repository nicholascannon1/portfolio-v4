import React, { useRef } from "react";

const Section: React.FC = ({ children }) => {
  const ref = useRef<HTMLElement>(null);

  return <section ref={ref}>{children}</section>;
};

export default Section;
