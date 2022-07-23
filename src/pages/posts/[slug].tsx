import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import * as fs from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import Page from '../../components/Page';
import { Frontmatter, validateFrontmatter } from '../../utils/validate-post';

import styles from '../../../styles/post.module.css';
import 'highlight.js/styles/github.css';
import Link from 'next/link';

type Params = {
    slug: string;
};

type Props = {
    frontmatter: Frontmatter;
    content: string;
};

const Post: NextPage<Props> = ({ content, frontmatter }) => {
    const { title, date, description, image, tags } = frontmatter;
    const markdown = md({
        typographer: true,
        highlight: (str, lang) => {
            if (hljs.getLanguage(lang)) {
                return hljs.highlight(str, { language: lang }).value;
            }
            return '';
        },
    });

    return (
        <Page title={title} description={description}>
            <header className={styles.postHeader}>
                <Link href="/" passHref>
                    <a>nicholas cannon</a>
                </Link>
            </header>

            <div className={styles.post}>
                <img className={styles.postImage} src={image} alt={title} />
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: markdown.render(content) }} />
            </div>
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
