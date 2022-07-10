import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../../styles/404.module.css';
import { SEO } from '../components/SEO';

const NotFound: NextPage = () => {
    return (
        <>
            <SEO title="Not found!" description="Sorry this page could not be found!" />

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
