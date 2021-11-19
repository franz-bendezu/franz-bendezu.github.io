import { NextPage } from "next";
import Head from "next/head";
import Presentation from "../components/Presentation";

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto pt-16 antialiased">
        <Presentation />
      </div>
    </div>
  );
};

export default Home;
