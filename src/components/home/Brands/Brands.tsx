import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  return (
    <section className="w-full flex flex-col overflow-hidden">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#bfdbfe"
            fill-opacity="1"
            d="M0,128L720,32L1440,192L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-blue-200 -m-[1px]">
        <div className="container mx-auto pb-10 text-center">
          <h1 className="mb-4 text-4xl text-blue-950 font-extrabold overflow-hidden md:text-5xl lg:text-6x">
            Você está em boa companhia
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
            A Blue Umbrella Tech está há anos atuando no mercado de Tecnologia
            da Informação prestando serviço de qualidade em diversos setores,
            gerando inovação e valor a longo prazo.
          </p>

          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-blue-700 uppercase">
              Conheça algumas empresas que já trabalharam conosco
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center py-6 md:py-20 sm:justify-between">
              <Link href="#" className="my-5">
                <Image
                  src="/assets/images/brands/rcs.png"
                  alt="marca-empresa"
                  rel="noopener noreferrer"
                  width="150"
                  height="60"
                />
              </Link>
              <Link href="#" className="my-5">
                <Image
                  src="/assets/images/brands/tascom.png"
                  alt="marca-empresa"
                  rel="noopener noreferrer"
                  width="150"
                  height="60"
                />
              </Link>
              <Link href="#" className="my-5">
                <Image
                  src="/assets/images/brands/echoinfo.png"
                  alt="marca-empresa"
                  rel="noopener noreferrer"
                  width="150"
                  height="60"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
