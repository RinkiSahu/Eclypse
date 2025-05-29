import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="container mx-auto flex flex-wrap items-center justify-between md:flex-row px-4 md:px-2 py-6 nav">
      <div className="flex items-center md:ps-12">
        <Link to="/">
          <img
            src="assets/images/eclypseIcon.png"
            className="w-8 h-8"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex gap-8 md:gap-16 md:pe-12">
        <li>
          <Link to="/About">About </Link>
        </li>
        <li>
          <Link to="/Waitlist">Waitlist</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>

        <li>
          <Link
            to="/"
            className="px-6 py-3 bg-white text-black border border-gray-400 rounded-lg hover:bg-gray-200"
          >
            Buy
          </Link>
        </li>


      </div>
    </ul>
  );
}

export default Navbar;
