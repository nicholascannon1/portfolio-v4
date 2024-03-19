import Image from 'next/image';

export const SocialHud = () => {
    return (
        <div className="hud">
            <a href="mailto:nicholas.cannon1@gmail.com">
                <Image src="/images/socials/email.svg" width={24} height={24} alt="email" />
            </a>
            <a href="https://www.linkedin.com/in/niccannon1" target="_blank" rel="noopener noreferrer">
                <Image src="/images/socials/linkedin.svg" width={24} height={24} alt="linkedin" />
            </a>
            <a href="https://github.com/nicholascannon" target="_blank" rel="noopener noreferrer">
                <Image src="/images/socials/github.svg" width={24} height={24} alt="github" />
            </a>
        </div>
    );
};
