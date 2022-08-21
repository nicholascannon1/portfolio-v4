import type { NextPage, InferGetStaticPropsType } from 'next';

import * as fs from 'fs';
import matter from 'gray-matter';

import ProjectsSection from '../sections/Projects';
import Page from '../components/Page';
import HomeSection from '../sections/Home';
import AboutSection from '../sections/About';
import TechSection from '../sections/Tech';
import BlogSection from '../sections/Blog';
import { validateFrontmatter } from '../utils/validate-post';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<Props> = ({ posts }) => {
    return (
        <Page title="Nicholas Cannon" description="Nicholas Cannon software development">
            <HomeSection />
            <AboutSection />
            {posts.length ? <BlogSection posts={posts} /> : undefined}
            <TechSection />
            <ProjectsSection />
        </Page>
    );
};

export const getStaticProps = () => {
    const posts = fs
        .readdirSync('posts')
        .filter((post) => post.startsWith('.'))
        .map((post) => {
            const slug = post.replace('.md', '');
            const { data } = matter(fs.readFileSync(`posts/${post}`, 'utf-8'));
            const frontmatter = validateFrontmatter(data);

            return { slug, frontmatter };
        });

    return { props: { posts } };
};

export default Index;
