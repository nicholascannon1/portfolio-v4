/* eslint-disable @next/next/no-img-element */
import styles from "../styles/hud.module.css";

const SocialHud: React.FC = () => {
  return (
    <div className={styles.hud}>
      <a href="https://www.linkedin.com/in/niccannon1" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://github.com/nicholascannon1" target="_blank" rel="noopener noreferrer">
        <img src="/github.svg" alt="github" />
      </a>
    </div>
  );
};

export default SocialHud;
