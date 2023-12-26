import { SEO } from '@/components/SEO';
import { SocialHud } from '@/components/SocialHud';
import Link from 'next/link';

const NotFound = () => {
    return (
        <>
            <SEO title="Not found!" description="Sorry this page could not be found!" />

            <SocialHud />

            <main className="container">
                <div>
                    <h2>Page not found</h2>
                    <p>
                        Go back{' '}
                        <Link href="/">
                            <a>home</a>
                        </Link>
                    </p>
                </div>
            </main>
        </>
    );
};

export default NotFound;
