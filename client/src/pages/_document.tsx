/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import environment from '../config';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Nicholas Cannon Development Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
                        rel="stylesheet"
                    />

                    {environment.googleAnalyticsCode && (
                        <>
                            <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsCode}`}
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', "${environment.googleAnalyticsCode}", { page_path: window.location.pathname });
              `,
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
