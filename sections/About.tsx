/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";
import styles from "../styles/about.module.css";

const AboutSection: React.FC = () => {
  return (
    <Section title="About">
      <h1>about</h1>

      <h3>experience</h3>
      <ul>
        <li>
          <strong>Software Engineer at VGW (Chumba Casino)</strong> (Dec 2020 - Present)
          <ul>
            <li>Fullstack development with Node.js, TypeScript, PostgreSQL, AWS, Docker & React</li>
            <li>Associate engineer from Dec 2020 - Jun 2021, engineer from Jun 2021 - present</li>
          </ul>
        </li>
        <li>
          <strong>Junior Software Developer at B2Me</strong> [startup] (Jun 2019 - Dec 2020)
          <ul>
            <li>Fullstack development with React, Node.js, PostgreSQL & Docker</li>
            <li>Developed and launched their iOS app</li>
          </ul>
        </li>
      </ul>

      <h3>education</h3>
      <ul>
        <li>
          <strong>Bachelor of Science</strong> - Majoring in Computer Science and Data Science (2017-2019)
        </li>
        <li>
          <strong>Bachelor of Science (Honours)</strong> - Computer Science and Software Engineering [Research in
          Machine Learning] (2020)
          <ul>
            <li>Awarded highest mark in Machine Learning (CITS5508) unit</li>
          </ul>
        </li>
      </ul>

      <h3>interests</h3>
      <ul>
        <li>TypeScript / JavaScript / Node.js</li>
        <li>FullStack Development</li>
        <li>DevOps</li>
        <li>StartUps / Tech Business</li>
        <li>AWS / Cloud / Serverless</li>
        <li>Basketball</li>
      </ul>

      <h3>certifications</h3>
      <div>
        <a href="/docs/sa-cert.pdf" target="_blank">
          <img className={styles.badge} src="/imgs/aws-saa.png" alt="AWS Solutions Architect Associate" />
        </a>
        <a href="/docs/sysops-cert.pdf" target="_blank">
          <img className={styles.badge} src="/imgs/aws-sysops.png" alt="AWS SysOps Administrator Associate" />
        </a>
      </div>
    </Section>
  );
};

export default AboutSection;
