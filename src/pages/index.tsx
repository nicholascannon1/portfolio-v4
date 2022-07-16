import type { NextPage } from 'next';
import ProjectsSection from '../sections/Projects';
import Page from '../components/Page';
import HomeSection from '../sections/Home';
import AboutSection from '../sections/About';
import TechSection from '../sections/Tech';

const Index: NextPage = () => {
    return (
        <Page title="Nicholas Cannon" description="Nicholas Cannon software development">
            <HomeSection />
            <AboutSection />
            <TechSection />
            <ProjectsSection />
        </Page>
    );
};

export default Index;
