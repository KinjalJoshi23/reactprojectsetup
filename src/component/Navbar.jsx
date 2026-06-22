import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-500 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">React</h1>

        <div className="flex gap-4">
          <Link
            to="/"
            className="rounded bg-blue-500 px-4 py-2 hover:bg-blue-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="rounded bg-green-500 px-4 py-2 hover:bg-green-600"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;