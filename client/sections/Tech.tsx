/* eslint-disable @next/next/no-img-element */
import Grid from "../components/Grid";
import Section from "../components/Section";
import styles from "../styles/tech.module.css";

const TechSection: React.FC = () => {
  return (
    <Section title="Tech">
      <h2>tech</h2>
      <h3>some of my favourites</h3>

      <Grid maxColWidth={5}>
        <div className={styles.tech}>
          <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
          <span>AWS</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/typescript.svg" alt="TypeScript" title="TypeScript" />
          <span>TypeScript</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/nodejs.svg" alt="Node.js" title="Node.js" />
          <span>Node.js</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/react.svg" alt="React" title="React" />
          <span>React</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/postgres.svg" alt="PostgreSQL" title="PostgreSQL" />
          <span>PostgreSQL</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/python.svg" alt="Python" title="Python" />
          <span>Python</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/docker.svg" alt="Docker" title="Docker" />
          <span>Docker</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/linux.svg" alt="Linux" title="Linux" />
          <span>Linux</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/lambda.svg" alt="Lambda" title="Lambda" />
          <span>AWS Lambda</span>
        </div>

        <div className={styles.tech}>
          <img src="imgs/tech/go.svg" alt="Go" title="Go" />
          <span>Golang</span>
        </div>
      </Grid>
    </Section>
  );
};

export default TechSection;
