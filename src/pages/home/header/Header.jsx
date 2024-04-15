import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="searchInput mx flex-row items-center justify-between sticky top-2 mb-8 z-50">
      <input
        type="text"
        className="py-2 px-4 w-1/3 rounded-md border-neutral-400 mr-2 ml-10 opacity-55"
        placeholder="Search Movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="py-2 px-4 rounded-md bg-slate-500 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        onClick={handleSearch}
      >
        Search
      </button>

      <Link to="/" className="text-sm text-white hover:text-gray-300 ml-40">
        Home
      </Link>
      <Link to="/about" className="text-sm hover:text-gray-300 text-white px-5">
        About Us
      </Link>
      <Link to="/contact" className="text-sm hover:text-gray-300 text-white">
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
