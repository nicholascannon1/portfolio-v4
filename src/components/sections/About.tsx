import Section from '../Section';
import styles from '../../../styles/about.module.css';

const AboutSection = () => {
    return (
        <Section title="About">
            <h3>experience</h3>
            <ul>
                <li>
                    <strong>Software Engineer at Virtual Gaming Worlds (VGW)</strong> [Chumba Casino] (Dec 2020 -
                    Present)
                </li>
                <li>
                    <strong>Junior Software Developer at B2Me</strong> (Jun 2019 - Dec 2020)
                </li>
            </ul>

            <div className={styles.resumeLink}>
                <a target="_blank" href="/docs/resume.pdf" title="Nicholas Cannon Resume">
                    View my resume!
                </a>
            </div>

            <h3>certifications</h3>
            <div>
                <a href="/docs/sa-cert.pdf" target="_blank" title="AWS Certified Solutions Architect">
                    <img
                        className={styles.badge}
                        src="/imgs/certs/aws-saa.webp"
                        alt="AWS Certified Solutions Architect"
                    />
                </a>
                <a href="/docs/sysops-cert.pdf" target="_blank" title="AWS Certified SysOps Administrator">
                    <img
                        className={styles.badge}
                        src="/imgs/certs/aws-sysops.webp"
                        alt="AWS Certified SysOps Administrator"
                    />
                </a>
            </div>

            <h3>education</h3>
            <ul>
                <li>
                    <strong>Bachelor of Science (Honours)</strong> - Computer Science and Software Engineering [Research
                    in Machine Learning] (2020)
                    <ul>
                        <li>Awarded highest mark in Machine Learning (CITS5508) unit</li>
                    </ul>
                </li>
                <li>
                    <strong>Bachelor of Science</strong> - Majoring in Computer Science and Data Science (2017-2019)
                </li>
            </ul>

            <h3>interests</h3>
            <ul>
                <li>Shipping things to production!</li>
                <li>Node.js & Golang</li>
                <li>AWS</li>
                <li>Start Ups & Entrepreneurship</li>
                <li>NBA & Formula 1</li>
            </ul>
        </Section>
    );
};

export default AboutSection;
