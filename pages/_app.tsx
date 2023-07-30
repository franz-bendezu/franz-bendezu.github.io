import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Head>
          <title>
            Franz Bendezu - Software Developer
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="  bg-white dark:bg-black flex flex-col min-h-screen">
          <Navbar />
          <main className=" flex-grow bg-white dark:bg-gray-900 justify-center text-center align-middle" >
            <div className="space-y-14 lg:space-y-24 ">
              <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto antialiased">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
