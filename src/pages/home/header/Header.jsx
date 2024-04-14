import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const Header = () => {
  return (
    <div className="searchInput mx flex-row items-center sticky top-2 mb-8 z-50 ">
      <input
        type="text"
        className="py-2 px-4 w-1/3 rounded-md border-neutral-400 mr-2 opacity-55"
        placeholder="Search Movies"
      />
      <button
        className="py-2 px-4 rounded-md bg-slate-500 text-white  
      bg-gradient-to-r from-green-400 to-blue-500
       hover:from-pink-500 hover:to-yellow-500"
      >
        Search
      </button>
    </div>
  );
};

export default Header;
