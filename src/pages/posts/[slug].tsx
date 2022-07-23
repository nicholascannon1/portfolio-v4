import * as fs from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Page from '../../components/Page';
import { Frontmatter, validateFrontmatter } from '../../utils/validate-post';

type Params = {
    slug: string;
};

type Props = {
    frontmatter: Frontmatter;
    content: string;
};

const Post: NextPage<Props> = ({ content, frontmatter }) => {
    const { title, date, description, image, tags } = frontmatter;

    return (
        <Page title={title} description={description}>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </Page>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = fs.readdirSync('posts').map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
    const slug = params?.slug;
    if (slug === undefined) {
        throw new Error(`Post page has no slug value in getStaticProps params: ${params}`);
    }

    const post = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data, content } = matter(post);

    const frontmatter = validateFrontmatter(data);

    return {
        props: {
            content,
            frontmatter,
        },
    };
};

export default Post;
