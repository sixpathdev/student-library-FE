import React from "react";
import { Link } from 'react-router-dom';

import Logo from "./Logo"
import Avatar from "./Avatar"

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white h-16 shadow flex pr-10 items-center justify-between">
      <Logo />
      <ul className="flex items-center">
          <li className="md:mx-1 md:p-1">
            <Avatar />
          </li>
          <li className="md:mx-1 md:p-1">
              <Link to="/user/profile" className="text-gray-700 text-sm">Mimi</Link>
          </li>
      </ul>
      </nav>
    </header>
  );
};

export default Navbar;
