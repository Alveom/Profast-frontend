import React from "react";
import { Outlet } from "react-router";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

function Root() {
  return (
    <div className="urbanist w-6xl mx-auto">
      {" "}
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
