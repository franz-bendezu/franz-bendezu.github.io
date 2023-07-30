import { NextPage } from "next";
import Presentation from "../components/home/Presentation";

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24 ">
      <div className="max-w-4xl mx-auto antialiased">
        <Presentation />
      </div>
    </div>
  );
};

export default Home;
