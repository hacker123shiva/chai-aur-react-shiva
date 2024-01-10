import React from 'react';
import Home from './components/Home/Home';
import { Outlet } from 'react-router-dom'; // Outlet is used to render the child components of the parent component
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
