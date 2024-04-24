import { FaChalkboardTeacher, FaCreditCard, FaDesktop } from "react-icons/fa";

const Services = () => {
  return (
    <section className="md:py-10">
      <div className="w-full container mx-auto flex flex-col">
        <div className="w-full flex flex-col items-center text-center justify-center">
          <h1 className="mb-4 text-4xl text-blue-950 font-extrabold overflow-hidden md:text-5xl lg:text-6x">
            O que fazemos
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
            Forneçemos serviços com qualidade e inovação para nossos clientes
          </p>
          <div className="w-full py-6 flex flex-col md:flex-row justify-evenly">
            <div className="w-full md:w-1/3 flex flex-col gap-3 p-6 items-center">
              <FaDesktop size={50} className="text-blue-900" />
              <h2 className="font-extrabold text-3xl text-blue-800">
                Sites Profissionais
              </h2>
              <p className="text-lg">
                Criamos e desenvolvemos sites para a sua empresa ou negócio.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-3 p-6 items-center">
              <FaChalkboardTeacher size={50} className="text-blue-900" />
              <h2 className="font-extrabold text-3xl text-blue-800">
                Landing Pages
              </h2>
              <p className="text-lg">
                Criamos páginas que conta com todos os elementos voltados à
                conversão, do visitante ao Lead ou da oportunidade ao cliente.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-3 p-6 items-center">
              <FaCreditCard size={50} className="text-blue-900" />
              <h2 className="font-extrabold text-3xl text-blue-800">
                e-Commerce
              </h2>
              <p className="text-lg">
                Criamos o seu comércio digital para que você venda seus produtos
                de forma prática pela internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
