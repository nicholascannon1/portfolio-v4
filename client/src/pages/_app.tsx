import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import environment from '../environment';

declare global {
    interface Window {
        gtag?: any;
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const handleRouteChange = (url: string) => {
        if (window.gtag) window.gtag('config', environment.googleAnalyticsCode, { page_path: url });
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps} />;
}

export default MyApp;
