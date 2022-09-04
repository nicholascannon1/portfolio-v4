import Section from '../Section';
import styles from '../../../styles/home.module.css';

const HomeSection = () => {
    return (
        <Section className={styles.container}>
            <img className={styles.profilePic} src="/imgs/profile-picture.webp" alt="profile picture" />

            <div className={styles.titleBox}>
                <h1>Nicholas Cannon</h1>
                <h2>Full Stack Software Developer</h2>
                <h3>Perth, Western Australia</h3>
            </div>
        </Section>
    );
};

export default HomeSection;
