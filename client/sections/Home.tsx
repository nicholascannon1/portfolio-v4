/* eslint-disable @next/next/no-img-element */
import Section from '../components/Section';

const HomeSection: React.FC = () => {
  return (
    <Section className="flex flex-col-reverse justify-center md:flex-row">
      <div className="flex flex-col items-center justify-center text-center md:text-left md:w-1/2">
        <div>
          <h1 className="text-2xl font-bold">Nicholas Cannon</h1>
          <p className="text-xl">Software Developer</p>
          <span className="text-brandGrey">Perth, Western Australia</span>
        </div>
      </div>

      <div className="flex items-center md:w-1/2">
        <img className="p-4" src="/imgs/profilePic.jpg" alt="profile picture" />
      </div>
    </Section>
  );
};

export default HomeSection;
