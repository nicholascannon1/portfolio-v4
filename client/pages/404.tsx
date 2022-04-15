import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>niccannon.com | Not Found</title>
      </Head>

      <main>
        <h2>Page not found</h2>
        <p>
          Go back{" "}
          <Link href="/">
            <a>home</a>
          </Link>
        </p>
      </main>
    </>
  );
};

export default NotFound;
