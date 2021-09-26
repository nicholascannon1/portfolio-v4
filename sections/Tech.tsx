/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";
import styles from "../styles/tech.module.css";

const TechSection: React.FC = () => {
  return (
    <Section title="Tech">
      <h2>tech</h2>
      <h3>some of my favourite tools</h3>

      <div className={styles.container}>
        <div className={styles.techTable}>
          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>

          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>

          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>

          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>

          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>

          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>

          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>

          <div className={styles.tech}>
            <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
            <span>AWS</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechSection;
