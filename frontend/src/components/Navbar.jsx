import React from "react";
import NavIcon from "./NavIcon";
const Navbar = () => {
  return (
    <div className="bg-transparent w-full h-[10%] text-white px-20 py-5 flex items-center justify-between">
      <h1 className="text-2xl font-bold cursor-pointer">Leo Foundary</h1>
      <NavIcon />
    </div>
  );
};

export default Navbar;
