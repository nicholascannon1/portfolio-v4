/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";

const TechSection: React.FC = () => {
  return (
    <Section title="Tech">
      <h2>tech</h2>
      <h3>some of the tools i like to work with</h3>

      <div>
        <div>
          <img src="imgs/tech/aws.svg" alt="AWS" title="AWS" />
          <span>AWS</span>
        </div>

        <div>
          <img src="imgs/tech/typescript.svg" alt="TypeScript" title="TypeScript" />
          <span>TypeScript / Node.js</span>
        </div>

        <div>
          <img src="imgs/tech/go.svg" alt="Golang" title="Golang" />
          <span>Go</span>
        </div>

        <div>
          <img src="imgs/tech/docker.svg" alt="Docker" title="Docker" />
          <span>Docker</span>
        </div>

        <div>
          <img src="imgs/tech/postgres.svg" alt="PostgreSQL" title="PostgreSQL" />
          <span>PostgreSQL</span>
        </div>

        <div>
          <img src="imgs/tech/react.svg" alt="React" title="React" />
          <span>React</span>
        </div>

        <div>
          <img src="imgs/tech/vim.svg" alt="Vim" title="Vim" />
          <span>Vim</span>
        </div>

        <div>
          <img src="imgs/tech/python.svg" alt="Python" title="Python" />
          <span>Python</span>
        </div>
      </div>
    </Section>
  );
};

export default TechSection;
