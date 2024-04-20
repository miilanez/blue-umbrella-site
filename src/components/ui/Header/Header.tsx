"use client";

import Link from "next/link";
import { ScrollLink } from "react-scroll";
import ContactButton from "./ContactButton";
import Image from "next/image";

const links = [
  { name: "Principal", target: "principal", offset: "-100" },
  { name: "Sobre", target: "sobre", offset: "-80" },
  { name: "Serviços", target: "servicos", offset: "-80" },
  { name: "Contato", target: "contato", offset: "0" },
];

const Header = () => {
  return (
    <header className="flex px-6 py-3">
      <nav className="w-full  container mx-auto flex flex-row justify-between items-center">
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
        <div id="menu">
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
        <div id="contact">
          <ContactButton text="Fale Conosco" link="/" />
        </div>
        {/* <div id="mobile menu"></div> */}
      </nav>
    </header>
  );
};

export default Header;
