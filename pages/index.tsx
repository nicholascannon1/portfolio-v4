import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import HomeSection from "../sections/Home";
import AboutSection from "../sections/About";
import SkillsSection from "../sections/Skills";
import ProjectsSection from "../sections/Projects";
import { ScreenSizeContext, calcScreenSize, SCREEN_SIZES } from "../context/screenSize";

const Home: NextPage = () => {
  const [screenSize, setScreenSize] = useState<SCREEN_SIZES>("small");

  useEffect(() => {
    const updateScreenSize = (size: number) => setScreenSize(calcScreenSize(size));
    window.addEventListener("resize", () => updateScreenSize(window.innerWidth));
    () => window.removeEventListener("resize", () => updateScreenSize(window.innerHeight));
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
    </ScreenSizeContext.Provider>
  );
};

export default Home;
