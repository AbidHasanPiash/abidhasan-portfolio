import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navMenuItem = [
    { title: "Home", link: "/" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <div className="w-screen h-fit">
      <div>
        <ul className="flex">
            {navMenuItem.map((item, index) => (
                <li key={index}>
                    <NavLink to={item.link}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
