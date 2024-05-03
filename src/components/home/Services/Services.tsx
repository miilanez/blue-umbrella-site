// import { FaChalkboardTeacher, FaCreditCard, FaDesktop } from "react-icons/fa";

import Image from "next/image";

// const Services = () => {
//   return (
//     <section className="md:py-10">
//       <div className="w-full container mx-auto flex flex-col">
//         <div className="w-full flex flex-col items-center text-center justify-center">
//           <h1 className="mb-4 text-4xl text-blue-950 font-extrabold overflow-hidden md:text-5xl lg:text-6x">
//             O que fazemos
//           </h1>
//           <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
//             Forneçemos serviços com qualidade e inovação para nossos clientes
//           </p>
//           <div className="w-full py-6 flex flex-col md:flex-row justify-evenly">
//             <div className="w-full md:w-1/3 flex flex-col gap-3 p-6 items-center">
//               <FaDesktop size={50} className="text-blue-900" />
//               <h2 className="font-extrabold text-3xl text-blue-800">
//                 Sites Profissionais
//               </h2>
//               <p className="text-lg">
//                 Criamos e desenvolvemos sites para a sua empresa ou negócio.
//               </p>
//             </div>
//             <div className="w-full md:w-1/3 flex flex-col gap-3 p-6 items-center">
//               <FaChalkboardTeacher size={50} className="text-blue-900" />
//               <h2 className="font-extrabold text-3xl text-blue-800">
//                 Landing Pages
//               </h2>
//               <p className="text-lg">
//                 Criamos páginas que conta com todos os elementos voltados à
//                 conversão, do visitante ao Lead ou da oportunidade ao cliente.
//               </p>
//             </div>
//             <div className="w-full md:w-1/3 flex flex-col gap-3 p-6 items-center">
//               <FaCreditCard size={50} className="text-blue-900" />
//               <h2 className="font-extrabold text-3xl text-blue-800">
//                 e-Commerce
//               </h2>
//               <p className="text-lg">
//                 Criamos o seu comércio digital para que você venda seus produtos
//                 de forma prática pela internet.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import CardService from "./CardService";

const Services = () => {
  return (
    <section id="servicos" className="py-12">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="mb-12 text-center mx-auto">
          <h1 className="text-blue-950 mb-16 leading-10 font-semibold text-4xl sm:text-6xl xl:text-8xl p-2 overflow-hidden">
            <span className="mr-3 z-20">Junte-se a nós e mudaremos o</span>
            <span className="bg-blue-100 z-10 rounded-lg ml-1 md:ml-3">futuro.</span>
          </h1>
          <p className="text-2xl text-neutral-600 tracking-tight">
            Sua jornada de excelência digital começa aqui. Conheça os nossos
            serviços:
          </p>
        </div>
        <div className="mb-20 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <CardService
              cardTitle="Sites Profissionais"
              cardDescription="Criamos e desenvolvemos sites para você ou para a sua empresa."
              cardImage="/assets/images/services/sites.png"
            />
            <CardService
              cardTitle="Landing Pages"
              cardDescription="Criamos páginas que contam com todos os elementos voltados à conversão, do visitante ao Lead ou da oportunidade ao cliente."
              cardImage="/assets/images/services/hotsites.png"
            />
            <CardService
              cardTitle="eCommerce"
              cardDescription="Criamos o seu comércio digital para que você venda seus produtos de forma prática pela internet."
              cardImage="/assets/images/services/ecommerce.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
