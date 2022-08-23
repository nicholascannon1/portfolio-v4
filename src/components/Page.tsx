import React from 'react';
import Footer from './Footer';
import { SEO } from './SEO';
import SocialHud from './SocialHud';

type Props = {
    children: React.ReactNode;
    title: string;
    description: string;
};

const Page = ({ children, title, description }: Props) => {
    return (
        <>
            <SEO title={title} description={description} />

            <SocialHud />

            <main>{children}</main>

            <Footer />
        </>
    );
};

export default Page;
