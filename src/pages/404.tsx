import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/404.module.css';

const NotFound: NextPage = () => {
    return (
        <>
            <Head>
                <title>nicholascannon.com | Not Found</title>
            </Head>

            <main className={styles.container}>
                <h2>Page not found</h2>
                <p>
                    Go back{' '}
                    <Link href="/">
                        <a>home</a>
                    </Link>
                </p>
            </main>
        </>
    );
};

export default NotFound;
