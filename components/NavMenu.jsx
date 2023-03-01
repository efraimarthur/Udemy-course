import React from "react";
import Link from "next/link";

const NavMenu = (props) => {
  return (
    <div>
      <span className="font-bold text-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
        Udemy Course
      </span>
      <div className="mt-2 flex-col flex">
        <Link
          href="/"
          onClick={props.closeMenu}
          className="border-t border-b border-slate-200 text-sky-400 py-3 w-full"
        >
          Home
        </Link>

        <Link
          href="about"
          onClick={props.closeMenu}
          className="border-b border-slate-200 text-sky-400 py-3 w-full"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
