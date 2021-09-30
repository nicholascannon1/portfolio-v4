import React from "react";
import Grid from "../components/Grid";
import Project from "../components/Project";
import Section from "../components/Section";

const ProjectsSection: React.FC = () => {
  return (
    <Section title="Projects">
      <h2 style={{ marginBottom: "1rem" }}>projects</h2>

      <Grid maxColWidth={4} shrinkToSingleColumn={true}>
        <Project
          name="Portfolio v4 (this site)"
          image="/imgs/projects/portfolio-v4.png"
          description="Statically generated development portflio site."
          technologies={["TypeScript", "Next.js", "React", "AWS"]}
          github="https://github.com/nicholascannon1/portfolio-v4"
        />

        <Project
          name="B2Me"
          image="/imgs/projects/b2me.png"
          description="Startup I previously worked at. A social site for community based service providers."
          technologies={["JavaScript", "React", "Node.js", "PostgreSQL"]}
          demoLink="https://b2me.com.au/"
        />

        <Project
          name="Portfolio v3 & v2"
          image="/imgs/projects/portfolio-v3-v2.png"
          description="Previous iterations of my development site. v2 built using the MERN stack. v3 built fully serverless with the serverless framework."
          technologies={["JS / TS", "AWS", "MERN", "Serverless", "Docker", "Node.js"]}
          github="https://github.com/nicholascannon1/portfolio-v3"
          demoLink="https://old.niccannon.com/"
        />

        <Project
          name="Mello"
          image="/imgs/projects/mello.png"
          description="A simple Trello clone with Google OAuth."
          technologies={["JavaScript", "MERN", "Docker", "Google OAuth"]}
          github="https://github.com/nicholascannon1/Mello"
        />
      </Grid>
    </Section>
  );
};

export default ProjectsSection;
