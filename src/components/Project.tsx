/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../styles/project.module.css';

interface Props {
    name: string;
    image: string;
    description: string;
    technologies: string[];
    github?: string;
    link?: string;
}

const Project = (props: Props) => {
    const { name, image, description, technologies, github, link } = props;
    const hasLinks = github || link;
    const techList =
        technologies.length && technologies.slice(1).reduce((text, tech) => `${text}, ${tech}`, technologies[0]);

    return (
        <div className={styles.project}>
            <img src={image} alt={name} />

            <h4>{name}</h4>

            <p>{description}</p>

            <p className={styles.techList}>{techList}</p>

            {hasLinks && (
                <div className={styles.links}>
                    {github && (
                        <a href={github} target="_blank" rel="noreferrer">
                            github
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer">
                            visit
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default Project;
