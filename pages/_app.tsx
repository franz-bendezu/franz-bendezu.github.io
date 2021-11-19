import "tailwindcss/tailwind.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
      <div className="  bg-white dark:bg-black flex flex-col min-h-screen">
        <Navbar />
        <main className=" flex-grow bg-white dark:bg-gray-900 justify-center text-center align-middle" >
          <Component {...pageProps} />
        </main>
        <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
