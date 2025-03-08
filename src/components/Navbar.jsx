import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav
      className="shadow-lg shadow-green-300 p-2 bg-green-800 flex center fixed z-10 top-0"
      style={{ height: 60, width: "100%" }}
    >
      <div className="container mx-auto my-auto flex gap-5 text-white font-semibold ">
        <NavLink to={"/"} end className={"hover:text-green-400"}>
          Home
        </NavLink>
        <NavLink to={"/store"} end className={"hover:text-green-400"}>
          Marketplace
        </NavLink>
        <NavLink to={"/about-us"} end className={"hover:text-green-400"}>
          About Us
        </NavLink>
        <NavLink to={"/contact-us"} end className={"hover:text-green-400"}>
          Contact Us
        </NavLink>
        <NavLink to={"/dashboard"} end className={"hover:text-green-400"}>
          My Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
