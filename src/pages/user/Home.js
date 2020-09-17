import React from "react";

import Navbar from "../../components/Navbar";
import Bookcard from "../../components/Bookcard";
import soulriver from "../../assets/images/soul_is_a_river.jpeg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="ml-8 md:ml-20 mt-6 text-xl text-gray-700">Random uploads by students</div>
      <div className="flex flex-wrap md:mx-6 mt-4 mb-10 pl-8">
      <Bookcard image={soulriver} title="Soul River" />
      <Bookcard image={soulriver} title="Soul River" />
      <Bookcard image={soulriver} title="Soul River" />
      <Bookcard image={soulriver} title="Soul River" />
      </div>
    </>
  );
};

export default Home;
