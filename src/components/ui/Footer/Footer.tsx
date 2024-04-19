import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
  { name: "Principal", target: "principal", offset: "-100" },
  { name: "Sobre", target: "sobre", offset: "-80" },
  { name: "Serviços", target: "servicos", offset: "-80" },
  { name: "Contato", target: "contato", offset: "0" },
];

const networks = [
  { name: "Instagram", target: "", logo: <FaInstagram /> },
  { name: "LinkedIn", target: "", logo: <FaLinkedin /> },
  { name: "Facebook", target: "", logo: <FaFacebook /> },
  { name: "WhattsApp", target: "", logo: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="flex p-6 bg-slate-950 text-white">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row justify-between items-center">
          <div id="brand logo" className="w-1/2">
            <Link href="/">
              <Image
                width="280"
                height="60"
                src="/assets/images/nav/logo-blue-umbrella.png"
                alt="Blue Umbrella Tech Incorporated Logo"
                className="hover:opacity-85"
              />
            </Link>
            <p>
              Nosso trabalho é trazer as melhores soluções <br></br>{" "}
              tecnológicas para o seu negócio.
            </p>
          </div>
          <div className="w-1/2 text-right">
            <div id="menu" className="">
              {links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.target}
                    className="flex flex-col"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center py-4">
          <div id="social networks" className="flex flex-row">
            {networks.map((network, index) => {
              return (
                <Link key={index} href={network.target}>
                  <span className="flex flex-row p-3 text-xl">
                    {network.logo}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="">gabrielmilanez@blueumbrella.com</div>
        </div>
        <hr className="mb-6"></hr>
        <div className="w-full text-xs text-center ">
          Copyright © 2024 Blue Umbrella Tech | Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
