import React from 'react';
import Grid from '../Grid';
import Project from '../Project';
import Section from '../Section';

const ProjectsSection = () => {
    return (
        <Section title="Projects">
            <h3>projects that I&apos;ve been involved in</h3>

            <Grid maxColWidth={4} shrinkToSingleColumn={true}>
                <Project
                    name="B2Me"
                    image="/imgs/projects/b2me.webp"
                    description="Social site for community based service providers."
                    technologies={['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Cordova']}
                    link="https://b2me.com.au/"
                />

                <Project
                    name="Chumba Casino"
                    image="/imgs/projects/chumba.webp"
                    description="The fastest growing online social casino."
                    technologies={['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Pulumi', 'OpenTelemetry']}
                    link="https://www.chumbacasino.com/"
                />
            </Grid>
        </Section>
    );
};

export default ProjectsSection;
