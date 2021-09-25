/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import Section from "../components/Section";
import { ScreenSizeContext } from "../context/screenSize";
import styles from "../styles/home.module.css";

const HomeSection: React.FC = () => {
  const screenSize = useContext(ScreenSizeContext);
  const largeScreen = screenSize === "large";
  const containerClass = largeScreen ? styles.containerLarge : styles.container;
  const imgClass = largeScreen ? styles.profilePicLarge : styles.profilePic;

  return (
    <Section className={containerClass}>
      <div className={styles.titleBox}>
        <h1>Nicholas Cannon</h1>
        <p>Software Developer</p>
        <span style={{ color: "#7a7a7a", fontSize: "0.9rem" }}>Perth, Western Australia</span>
      </div>
      <img className={imgClass} src="/profilePic.jpg" alt="profile picture" />
    </Section>
  );
};

export default HomeSection;
