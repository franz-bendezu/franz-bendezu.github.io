import { NextPage } from "next";
import Presentation from "../components/home/Presentation";

const Home: NextPage = () => {
  return <Presentation />;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`../messages/home/${locale}.json`),
        ...require(`../messages/common/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  };
}

export default Home;
