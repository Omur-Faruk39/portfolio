import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

function Root () {

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;


