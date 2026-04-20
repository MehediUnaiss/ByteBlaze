import React from "react";
import Hero from "../componets/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex flex-col justify-center relative items-center min-h-[calc(100vh-117px)]">
      <Hero></Hero>
      <img className="absolute w-full bottom-0" src={wave} alt="" />
    </div>
  );
};

export default Home;
