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
                    <ul>
                        <li>
                            Team Tech Lead for 2 projects, including a 35+ billion wallet event store migration and
                            event sourced wallet system redesign to handle 10x transactions for next 3 years.
                        </li>
                        <li>
                            Built a Postgres event store reader with Node.js, used by 3 teams to read billions of
                            events, guarantees events are read in order when written concurrently.
                        </li>
                        <li>
                            Executed major AWS RDS database instance upgrade by putting product into maintenance mode
                            and coordinating a team of 2 QAs and 1 Senior Engineer.
                        </li>
                        <li>
                            Participated as an on-call engineer, using OpenTelemetry and CloudWatch to monitor and
                            resolve incidents.
                        </li>
                        <li>
                            Mentored 2 Junior Engineers through a 6 month learning and development course, involved
                            reviewing code, providing feedback and coaching them through the team’s delivery process.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Junior Software Developer at B2Me</strong> [startup] (Jun 2019 - Dec 2020)
                    <ul>
                        <li>
                            Deployed event-driven news feed feature with Node.js and Postgres that delivers profile
                            updates and posts to the feeds of multiple followers.
                        </li>
                        <li>
                            Improved mobile user experience quickly by wrapping React app using Cordova, producing
                            native iOS app.
                        </li>
                        <li>
                            Increased user retention and created a new marketing channel by implementing mobile push
                            notifications.
                        </li>
                        <li>
                            Worked through Jira backlog to continuously deliver bug fixes and new features to
                            production.
                        </li>
                    </ul>
                </li>
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
                <li>Node.js / Fullstack TypeScript</li>
                <li>AWS</li>
                <li>Start Ups / Entrepreneurship / Working lean</li>
                <li>NBA / Formula 1</li>
            </ul>

            <div className={styles.resumeLink}>
                <a target="_blank" href="/docs/resume.pdf" title="Nicholas Cannon Resume">
                    Get my resume!
                </a>
            </div>
        </Section>
    );
};

export default AboutSection;
