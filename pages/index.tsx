import type { NextPage } from "next";
import Footer from "../components/Footer";
import HomeSection from "../sections/Home";
import AboutSection from "../sections/About";
import SkillsSection from "../sections/Skills";
import ProjectsSection from "../sections/Projects";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
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
