import React from "react";
import Project from "../components/Project";
import Section from "../components/Section";

const ProjectsSection: React.FC = () => {
  return (
    <Section title="Projects">
      <h2 style={{ marginBottom: "1rem" }}>projects</h2>

      <div>
        <Project
          name="Portfolio v4 (this site)"
          image="/imgs/projects/portfolio-v4.png"
          description="Statically generated portfolio site."
          technologies={["TypeScript", "Next.js", "React", "AWS", "Pulumi"]}
          github="https://github.com/nicholascannon/portfolio-v4"
        />

        <Project
          name="B2Me"
          image="/imgs/projects/b2me.png"
          description="Social site for community based service providers."
          technologies={["JavaScript", "React", "Node.js", "PostgreSQL", "Cordova"]}
          demoLink="https://b2me.com.au/"
        />
      </div>
    </Section>
  );
};

export default ProjectsSection;
