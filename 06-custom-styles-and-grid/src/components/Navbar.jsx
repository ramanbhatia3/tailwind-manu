import React, { useState } from "react";

function Navbar() {
  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div className="shadow-paaji relative m-auto md:mt-2 flex max-w-2xl items-center justify-between md:rounded-full bg-white p-2">
        <img
          src="https://ui.aceternity.com/logo.png"
          width={30}
          alt="Aceternity UI"
          className="rounded-full"
        />
        <div className="hidden md:flex items-center gap-2 mr-5 text-sm text-neutral-700">
          {links.map((link, index) => (
            <a href={link.href} key={index} className="hover:text-neutral-900">
              {link.name}
            </a>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="mr-2 md:hidden">
            <img src={"/menu.png"} alt="Menu" width={20} />
        </button>
        {isOpen && (<div className="absolute inset-x-0 top-12 bg-white rounded-md shadow-paaji max-w-[90%] mx-auto">
            <div className="flex flex-col items-start gap-4 md:hidden p-2 text-sm text-neutral-700">
          {links.map((link, index) => (
            <a href={link.href} key={index} className="hover:text-neutral-900">
              {link.name}
            </a>
          ))}
        </div>
        </div>)}
      </div>
    </div>
  );
}

export default Navbar;
