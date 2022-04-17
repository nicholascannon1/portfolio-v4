import React from "react";
import Grid from "../components/Grid";
import Project from "../components/Project";
import Section from "../components/Section";

const ProjectsSection: React.FC = () => {
  return (
    <Section title="Projects">
      <h3>projects that I&apos;ve worked on myself or have been involved in</h3>

      <Grid maxColWidth={4} shrinkToSingleColumn={true}>
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
          link="https://b2me.com.au/"
        />
      </Grid>
    </Section>
  );
};

export default ProjectsSection;
