import React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import data from "../data/navbar";
import logo from "../images/logo.svg";
const Navbar = () => {
  const [links, setLinks] = useState(data);
  return (
    <>
      <header className="flex justify-between items- px-10 py-5 fixed w-full">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center">
            {links.map((l) => {
              const { id, link } = l;
              return (
                <li key={id} className="mr-3">
                  {link}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
