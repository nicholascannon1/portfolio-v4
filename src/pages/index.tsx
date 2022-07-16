import type { NextPage } from 'next';
import Footer from '../components/Footer';
import HomeSection from '../sections/Home';
import AboutSection from '../sections/About';
import TechSection from '../sections/Tech';
import ProjectsSection from '../sections/Projects';
import SocialHud from '../components/SocialHud';
import { SEO } from '../components/SEO';

const Index: NextPage = () => {
    return (
        <>
            <SEO title="Nicholas Cannon" description="Nicholas Cannon software development" />

            <SocialHud />

            <main>
                <HomeSection />
                <AboutSection />
                <TechSection />
                <ProjectsSection />
            </main>

            <Footer />
        </>
    );
};

export default Index;
