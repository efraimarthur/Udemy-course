import React from "react";
import Navigtaion from "./Navigtaion";

const Header = () => {
  return (
    <header className="bg-gray-200 p-3 flex justify-between items-center">
      <span className="font-bold">Its header</span>
      <Navigtaion />
    </header>
  );
};

export default Header;
