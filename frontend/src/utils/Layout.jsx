import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
