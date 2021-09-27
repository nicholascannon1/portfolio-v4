import React from "react";
import Grid from "../components/Grid";
import Project from "../components/Project";
import Section from "../components/Section";

const ProjectsSection: React.FC = () => {
  return (
    <Section title="Projects">
      <h2>projects</h2>

      <Grid>
        <Project
          name="Name"
          image="/imgs/projects/sitepreview.png"
          description="description"
          technologies={["TypeScript", "AWS", "Serverless", "a"]}
          // technologies={["TypeScript", "AWS"]}
          github="github"
          demoLink="link"
        />

        <Project
          name="Name"
          image="/imgs/projects/sitepreview.png"
          description="description"
          technologies={["TypeScript", "AWS"]}
          github="github"
          demoLink="link"
        />

        <Project
          name="Name"
          image="/imgs/projects/sitepreview.png"
          description="description"
          technologies={["TypeScript", "AWS"]}
          github="github"
          demoLink="link"
        />

        <Project
          name="Name"
          image="/imgs/projects/sitepreview.png"
          description="description"
          technologies={["TypeScript", "AWS"]}
          github="github"
          demoLink="link"
        />
      </Grid>
    </Section>
  );
};

export default ProjectsSection;
