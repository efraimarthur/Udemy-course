import Link from "next/link";
import React from "react";
import Navigtaion from "./Navigtaion";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-3 flex justify-between items-center">
      <span className="font-bold text-2xl bg-gradient-to-r from-sky-400 to-fuchsia-500 text-transparent bg-clip-text">
        Udemy course
      </span>
      <span className="md:hidden block">
        <Navigtaion />
      </span>
      <div className="md:flex hidden gap-5 mr-5 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
