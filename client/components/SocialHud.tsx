/* eslint-disable @next/next/no-img-element */

const SocialHud: React.FC = () => {
  return (
    <div>
      <a href="mailto:nicholas.cannon1@gmail.com">
        <img src="/imgs/email.svg" alt="email" />
      </a>
      <a href="https://www.linkedin.com/in/niccannon1" target="_blank" rel="noopener noreferrer">
        <img src="/imgs/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://github.com/nicholascannon" target="_blank" rel="noopener noreferrer">
        <img src="/imgs/github.svg" alt="github" />
      </a>
    </div>
  );
};

export default SocialHud;
