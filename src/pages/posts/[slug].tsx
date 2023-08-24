import 'highlight.js/styles/github.css';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import * as fs from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import Page from '../../components/Page';
import { Frontmatter, validateFrontmatter } from '../../utils/validate-post';
import Link from 'next/link';

import styles from '../../../styles/post.module.css';

const Post: NextPage<Props> = ({ content, frontmatter }) => {
    const { title, date, description, image, tags } = frontmatter;

    return (
        <Page title={title} description={description}>
            <header className={styles.postHeader}>
                <Link href="/" passHref>
                    <a>nicholas cannon</a>
                </Link>
            </header>

            <section className={styles.post}>
                <img className={styles.postImage} src={image} alt={title} />
                <span>Published {date}</span>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
            </section>
        </Page>
    );
};

type Props = {
    frontmatter: Frontmatter;
    content: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const paths = fs
        .readdirSync('posts')
        .filter((fileName) => fileName.startsWith('.') === false)
        .map((fileName) => ({
            params: {
                slug: fileName.replace('.md', ''),
            },
        }));

    return { paths, fallback: false };
};

type Params = {
    slug: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
    const slug = params?.slug;
    if (slug === undefined) {
        throw new Error(`Post page has no slug value in getStaticProps params: ${params}`);
    }

    const post = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data, content: rawContent } = matter(post);

    const frontmatter = validateFrontmatter(data);

    const markdown = md({
        typographer: true,
        highlight: (str, lang) => {
            if (hljs.getLanguage(lang)) {
                return hljs.highlight(str, { language: lang }).value;
            }
            return '';
        },
    });
    const content = markdown.render(rawContent);

    return {
        props: {
            content,
            frontmatter,
        },
    };
};

export default Post;
