import React from 'react';
import { NavLink } from 'react-router';
import bgImage from '../../assets/hero-bg.jpg';

function Home() {
  return (
    <main
      className="mt-[70px] h-screen bg-cover bg-top"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='flex items-center flex-col h-[100vh] justify-center'>
        <h1 className="text-4xl text-black font-[Raleway,sans-serif] font-[300]">
         OMUR FARUK
        </h1>
        <p className="text-black font-[Raleway,sans-serif] font-[300]">
        I'm a professional illustrator from San Francisco
        </p>

        <button className="bg-white text-black px-4 py-2 mt-4 rounded-md"><NavLink to='about'>About Me</NavLink></button>
      </div>
    </main>
  );
}

export default Home;
