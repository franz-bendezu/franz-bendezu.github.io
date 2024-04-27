import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <title>Franz Bendezu - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white dark:bg-black">
        <Navbar />
        <main className="flex-grow justify-center bg-white  align-middle dark:bg-gray-900">
          <div className="container mx-auto space-y-14 px-4 py-8 antialiased lg:space-y-24">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
