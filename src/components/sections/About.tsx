import Section from '../Section';
import styles from '../../../styles/about.module.css';

const AboutSection = () => {
    return (
        <Section title="About">
            <h3>experience</h3>
            <ul>
                <li>
                    <strong>Software Engineer at VGW</strong> [Chumba Casino] (Dec 2020 - Present)
                    <ul>
                        <li>
                            <strong>Stack:</strong> Node.js, TypeScript, PostgreSQL, AWS, Pulumi, Docker & React
                        </li>
                        <li>Fullstack development</li>
                        <li>Engineer from Jun 2021 - present</li>
                        <li>Associate Engineer from Dec 2020 - Jun 2021</li>
                    </ul>
                </li>
                <li>
                    <strong>Junior Software Developer at B2Me</strong> [startup] (Jun 2019 - Dec 2020)
                    <ul>
                        <li>
                            <strong>Stack:</strong> Node.js, JavaScript, PostgreSQL, Docker & React
                        </li>
                        <li>Fullstack development</li>
                        <li>Developed and launched iOS app with Cordova</li>
                    </ul>
                </li>
            </ul>

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
                <li>Node.js / Go</li>
                <li>AWS / Cloud Computing</li>
                <li>Start Ups / Entrepreneurship / Working lean</li>
                <li>NBA / Formula 1</li>
            </ul>

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

            <div className={styles.resumeLink}>
                <a target="_blank" href="/docs/resume.pdf" title="Nicholas Cannon Resume">
                    Get my resume!
                </a>
            </div>
        </Section>
    );
};

export default AboutSection;
