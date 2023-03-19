import React, {useState} from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const navMenuItem = [
    { title: "Home", link: "/" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <div className="w-screen h-fit">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
        <div>
            logo
        </div>
        <ul className={`hidden md:flex items-center justify-center text-xl space-x-5`}>
            {navMenuItem.map((item, index) => (
                <li key={index} className={`px-3 rounded-full ${location.pathname  === item.link ? 'ring-2 ring-purple-500' : 'hover:text-slate-200 hover:scale-105'} duration-200`}>
                    <NavLink to={item.link} className='flex space-x-2'>
                        <p className={`${location.pathname  === item.link ? 'block' : 'hidden'}`}> ˂  </p>
                        <p>{item.title}</p>
                        <p className={`${location.pathname  === item.link ? 'block' : 'hidden'}`}> /˃ </p>
                    </NavLink>
                </li>
            ))}
        </ul>
        <button className="md:hidden flex flex-col h-6 w-12 justify-center items-center group" onClick={() => setIsOpen(!isOpen)} >
            <div className={`${hamburgerLine} ${
                isOpen
                ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100 scale-[250%]"
                : "opacity-50 group-hover:opacity-100"
            }`}
            />
            <div className={`${hamburgerLine} ${
                isOpen
                ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100 scale-[250%]"
                : "opacity-50 group-hover:opacity-100"
            }`}
            />
        </button>
        <ul 
            className={`${isOpen 
                ? 'block ease-in-out duration-500' 
                : ' ease-in-out duration-500 fixed -left-[100%]'} 
                z-50 pt-16 bg-slate-800 md:hidden text-xl fixed left-0 top-0 w-[60%] h-full border-r border-purple-900 shadow-2xl shadow-purple-800`}
            >
            <h1 className="text-center text-5xl mb-6">Logo</h1>
            {navMenuItem.map((item, index) => (
                <li key={index} className={`text-3xl px-3 rounded-full ${location.pathname  === item.link ? 'ring-2 ring-purple-500' : 'hover:text-slate-200 hover:scale-105'} my-3 mx-8 duration-200`}>
                    <NavLink to={item.link} className='flex space-x-2'>
                        <p className={`${location.pathname  === item.link ? 'block' : 'hidden'}`}> ˂  </p>
                        <p>{item.title}</p>
                        <p className={`${location.pathname  === item.link ? 'block' : 'hidden'}`}> /˃ </p>
                    </NavLink>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
