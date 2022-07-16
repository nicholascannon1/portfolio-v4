import Link from 'next/link';
import React from 'react';
import Grid from '../components/Grid';
import Section from '../components/Section';

type Post = {
    slug: string;
    frontmatter: { [key: string]: any };
};

type Props = {
    posts: Post[];
};

const BlogSection: React.FC<Props> = ({ posts }) => {
    return (
        <Section title="Technical Blog">
            <h3>subtext here</h3>

            <Grid maxColWidth={4} shrinkToSingleColumn={true}>
                {posts.map(({ slug, frontmatter }) => (
                    // TODO: finish blog component
                    <div key={slug}>
                        <Link passHref href={`posts/${slug}`}>
                            <h4>{frontmatter.title}</h4>
                            {/* img here */}
                        </Link>
                    </div>
                ))}
            </Grid>
        </Section>
    );
};

export default BlogSection;
