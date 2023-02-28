import React from "react";
import Link from "next/link";

const NavMenu = (props) => {
  return (
    <div>
      <span className="font-bold text-xl">This is Menu</span>
      <div className="mt-2 flex-col flex">
        <Link
          href="/"
          onClick={props.closeMenu}
          className="border-t border-b border-slate-200 text-sky-400 py-3 max-w-max"
        >
          Home
        </Link>

        <Link
          href="about"
          onClick={props.closeMenu}
          className="border-b border-slate-200 text-sky-400 py-3 max-w-max"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
