"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import Menu from "./Menu";

const networks = [
  { name: "Instagram", target: "", logo: <FaInstagram /> },
  { name: "LinkedIn", target: "", logo: <FaLinkedin /> },
  { name: "Facebook", target: "", logo: <FaFacebook /> },
  { name: "WhattsApp", target: "", logo: <FaWhatsapp /> },
];
const Header = () => {
  //gerenciamento de estados
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState("transparent");

  //mostrar navbar
  const handleShowNavbar = () => {
    setNavbar(!navbar);
  };

  //função para fechar mobile nav assim que clicar em um link do menu
  const handleLinkClick = () => {
    setNavbar(false); // Fecha o menu móvel após clicar em um link
  };

  //efeito na navbar ao scrollar a página
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 40) {
        setColor("#ffffff");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      // className="flex px-6 py-3 overflow-hidden absolute top-0 left-0 w-full z-50"
      className="fixed w-full py-3 z-10 ease-in duration-300"
    >
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
        <Menu containerStyles="hidden md:flex" />
        <div id="contact" className="hidden md:flex">
          <Button
            type="button"
            text="Fale Conosco"
            link="https://api.whatsapp.com/send?phone=5581982301817&text=Fala%20Gabriel%2C%20Bom%20dia!"
            containerStyles="px-4 py-2"
          />
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
              ? "fixed top-100 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 overflow-y-hidden"
              : "fixed top-0 right-[-100%] bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <div id="brand logo">
            <Link href="/">
              <Image
                width="250"
                height="60"
                src="/assets/images/nav/logo-blue-umbrella.png"
                alt="Blue Umbrella Tech Incorporated Logo"
                className="m-10"
              />
            </Link>
          </div>

          <Menu
            containerStyles="m-10 flex flex-col text-center gap-8"
            onLinkClick={handleLinkClick}
          />

          <div id="contact" className="m-10">
            <Button
              type="button"
              text="Fale Conosco"
              link="https://api.whatsapp.com/send?phone=5581982301817&text=Fala%20Gabriel%2C%20Bom%20dia!"
              containerStyles="px-5 py-2"
            />
          </div>

          <div id="social networks" className="flex flex-row">
            {networks.map((network, index) => {
              return (
                <Link key={index} href={network.target}>
                  <span className="flex flex-row mt-10 mb-10 px-5 text-3xl">
                    {network.logo}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
