/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";

const HomeSection: React.FC = () => {
  return (
    <Section>
      <div>
        <h1>Nicholas Cannon</h1>
        <p>Software Developer</p>
        <span>Perth, Western Australia</span>
      </div>

      <img src="/imgs/profilePic.jpg" alt="profile picture" />
    </Section>
  );
};

export default HomeSection;
