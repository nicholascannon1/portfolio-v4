/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  github?: string;
  demoLink?: string;
}

const Project = (props: Props) => {
  const { name, image, description, technologies, github, demoLink } = props;
  const hasLinks = github || demoLink;
  const techList = technologies.length && technologies.slice(1).reduce((text, tech) => `${text}, ${tech}`, technologies[0]);

  return (
    <div>
      <img src={image} alt={name} />

      <h4>{name}</h4>

      <p>{description}</p>

      <p>{techList}</p>

      {hasLinks && (
        <div>
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              github
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer">
              demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Project;
