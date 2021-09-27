/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/project.module.css";

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

  return (
    <div className={styles.project}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={styles.techList}>
        <ul>
          {technologies.slice(0, technologies.length / 2).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <ul>
          {technologies.slice(technologies.length / 2).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      {hasLinks && (
        <div className={styles.links}>
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
