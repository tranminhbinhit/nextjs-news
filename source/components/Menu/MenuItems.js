import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getMenuUrl, isEmptyObject } from "../../utils/utils";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const urlMenu = getMenuUrl(items);
  const isShowDown = dropdown && !isEmptyObject(items.ListView); 
  return (
    <li
      className={`menu-items ${isShowDown ? "current-dropdown" : ""}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!isEmptyObject(items.ListView) ? (
        <>
          <a className="nav-top-link cursor"
            aria-haspopup="menu"
            aria-expanded={isShowDown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.MenuName}
            {depthLevel > 0 ? <span>&raquo;</span> : <i className="ml5 fas fa-angle-down"></i>}
          </a>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.ListView}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={urlMenu}>{items.MenuName}</Link>
      )}
    </li>
  );
};

export default MenuItems;
