import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

type Props = {
  children: ReactNode;
};

const Container: React.FC<Props> = ({ children, ...customMeta }) => {
  const router = useRouter();
  interface IMeta {
    image: string;
    title: string;
    description: string;
    type: string;
    date?: string;
  }
  const meta: IMeta = {
    title: "Franz Bendezu - Full Stack Developer",
    description: `I have been developing web applications for 3 years. Contact me to find out more.`,
    image: "/profile.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://franzbendezu.me${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://franzbendezu.me${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Franz Bendezu" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@franz_bendezu" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Container;
