import React from "react";
import { NavLink } from "react-router";
import bgImage from "../../assets/hero-bg.jpg";

function Home() {

  return (
    <main
      className="h-screen bg-cover bg-top"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center flex-col h-[100vh] justify-center gap-y-2.5 fade-out">
        <h1 className={`text-black font-[Raleway,sans-serif] font-[700] text-4xl`} >
          OMUR FARUK
        </h1>
        <p className="text-black font-[Raleway,sans-serif] font-[500]">
          I'm a professional illustrator from San Francisco
        </p>

        <NavLink
          className="text-[16px] bg-[rgb(52,183,167)] hover:bg-[rgb(97,199,187)] text-white font-[600] px-10 py-2 mt-4 rounded-full"
          to="about"
        >
          ABOUT ME
        </NavLink>
      </div>
    </main>
  );
}

export default Home;
