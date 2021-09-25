/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import Section from "../components/Section";
import { ScreenSizeContext } from "../context/screenSize";
import styles from "../styles/home.module.css";

const HomeSection: React.FC = () => {
  const screenSize = useContext(ScreenSizeContext);

  return (
    <Section>
      <h1>Nicholas Cannon</h1>
      <img className={styles.profilePic} src="/profilePic.jpg" alt="profile picture" />
    </Section>
  );
};

export default HomeSection;
