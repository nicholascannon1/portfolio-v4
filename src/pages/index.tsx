import { SEO } from '@/components/SEO';
import { SocialHud } from '@/components/SocialHud';
import { ServerRuntime } from 'next/types';

const Index = () => {
    return (
        <>
            <SEO title="Nicholas Cannon" description="Nicholas Cannon software development" />

            <SocialHud />

            <main className="container">
                <h1>Coming soon...</h1>
            </main>
        </>
    );
};

export default Index;

export const runtime: ServerRuntime = 'experimental-edge';
