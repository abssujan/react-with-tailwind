import React, { useState } from "react";
import Link from "../Link/Link";
import { BeakerIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "./home" },
    { id: 2, name: "Product", path: "./product" },
    { id: 3, name: "Order", path: "./order" },
    { id: 4, name: "Contact", path: "./contact" },
    { id: 5, name: "About", path: "./about" },
  ];
  return (
    <nav className="bg-purple-200 relative w-full">
      <div onClick={() => setOpen(!open)} className="size-6 text-blue-500 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul className={`md:flex justify-center w-full md:static bg-purple-200 absolute duration-500 ease-in ${open ? 'top-6' : '-top-40'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
