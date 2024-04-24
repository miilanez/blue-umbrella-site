"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollLink } from "react-scroll";
import ContactButton from "./ContactButton";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Principal", target: "principal", offset: "-100" },
  { name: "Sobre", target: "sobre", offset: "-80" },
  { name: "Serviços", target: "servicos", offset: "-80" },
  { name: "Contato", target: "contato", offset: "0" },
];

const Header = () => {
  //gerenciamento de estados
  const [navbar, setNavbar] = useState(false);

  //mostrar navbar
  const handleShowNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="flex px-6 py-3 overflow-hidden">
      <nav className="w-full container mx-auto flex flex-row justify-between items-center">
        <div id="brand logo">
          <Link href="/">
            <Image
              width="200"
              height="60"
              src="/assets/images/nav/logo-blue-umbrella.png"
              alt="Blue Umbrella Tech Incorporated Logo"
              className="hover:opacity-85"
            />
          </Link>
        </div>
        <div id="menu" className="hidden md:flex">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.target}
                className="mx-3 text-blue-950 hover:text-blue-700"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div id="contact" className="hidden md:flex">
          <ContactButton text="Fale Conosco" link="/" />
        </div>

        {/* Mobile Button  */}
        <div
          onClick={handleShowNavbar}
          id="mobile menu"
          className="block md:hidden text-blue-950 z-10"
        >
          {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            navbar
              ? "sm:hidden fixed top-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 overflow-y-hidden"
              : "sm:hidden fixed top-0 right-[-100%] bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <div className="text-principal text-4xl font-semibold">
            <Link href="/">
              {"<"}
              <span className="text-white">Dev Milanez</span>
              {"/>"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
