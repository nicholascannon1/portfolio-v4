import type { NextPage, InferGetStaticPropsType } from 'next';
import * as fs from 'fs';
import matter from 'gray-matter';
import ProjectsSection from '../components/sections/Projects';
import Page from '../components/Page';
import HomeSection from '../components/sections/Home';
import AboutSection from '../components/sections/About';
import TechSection from '../components/sections/Tech';
import BlogSection from '../components/sections/Blog';
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
        .filter((post) => post.startsWith('.') === false)
        .map((post) => {
            const slug = post.replace('.md', '');
            const { data } = matter(fs.readFileSync(`posts/${post}`, 'utf-8'));
            const frontmatter = validateFrontmatter(data);

            return { slug, frontmatter };
        });

    return { props: { posts } };
};

export default Index;
