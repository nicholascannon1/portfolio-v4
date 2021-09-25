import type { NextPage } from "next";
import Footer from "../components/Footer";
import HomeSection from "../sections/Home";
import AboutSection from "../sections/About";
import SkillsSection from "../sections/Skills";
import ProjectsSection from "../sections/Projects";
import SocialHud from "../components/SocialHud";

const Home: NextPage = () => {
  return (
    <>
      <SocialHud />

      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
