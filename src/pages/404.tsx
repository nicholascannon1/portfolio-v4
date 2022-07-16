import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../../styles/404.module.css';
import Page from '../components/Page';

const NotFound: NextPage = () => {
    return (
        <Page title="Not found!" description="Sorry this page could not be found!">
            <div className={styles.container}>
                <h2>Page not found</h2>
                <p>
                    Go back{' '}
                    <Link href="/">
                        <a>home</a>
                    </Link>
                </p>
            </div>
        </Page>
    );
};

export default NotFound;
