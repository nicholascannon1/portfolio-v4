import Link from 'next/link';
import React from 'react';
import Grid from '../components/Grid';
import Section from '../components/Section';
import styles from '../../styles/blog.module.css';

type Post = {
    slug: string;
    frontmatter: { [key: string]: any };
};

type Props = {
    posts: Post[];
};

const BlogSection: React.FC<Props> = ({ posts }) => {
    return (
        <Section className={styles.container} title="Technical Blog">
            <Grid maxColWidth={4} shrinkToSingleColumn={true}>
                {posts.map(({ slug, frontmatter }) => (
                    <Link key={slug} passHref href={`posts/${slug}`}>
                        <a className={styles.blog}>
                            <img src={frontmatter.image} alt={`${frontmatter.title} image`} />
                            <div>
                                <h4>{frontmatter.title}</h4>
                                <p>{frontmatter.description}</p>
                                <p>{frontmatter.date}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </Grid>
        </Section>
    );
};

export default BlogSection;
