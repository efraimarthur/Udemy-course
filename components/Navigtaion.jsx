import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTransition, animated } from "react-spring";
import NavMenu from "./NavMenu";

const Navigtaion = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuTransition = useTransition(showMenu, {
    from: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -100 },
  });

  const maskTransition = useTransition(showMenu, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav>
      <button onClick={() => setShowMenu(!showMenu)}>
        <Icon
          icon="charm:menu-hamburger"
          className="text-2xl hover:opacity-70 "
        />
      </button>

      {menuTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="z-50 fixed bg-gray-800 text-white top-0 left-0 h-full w-4/5 p-3"
            >
              <NavMenu closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}

      {maskTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed bg-black/30 top-0 right-0 h-full w-full"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}
    </nav>
  );
};

export default Navigtaion;
