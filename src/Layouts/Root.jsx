import React from "react";
import { Outlet } from "react-router";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-117px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
