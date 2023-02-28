import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navigtaion = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <span onClick={() => setShowMenu(!showMenu)}>
        <Icon
          icon="charm:menu-hamburger"
          className="text-2xl hover:opacity-70 cursor-pointer"
        />
      </span>
      {showMenu && (
        <>
          <div className="fixed w-4/5 top-0 left-0 z-10 shadow h-full bg-white">
            Manu
          </div>
          <div
            className="fixed h-full top-0 right-0 bg-black/20 w-full"
            onClick={() => setShowMenu(false)}
          >
            Hello
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigtaion;
