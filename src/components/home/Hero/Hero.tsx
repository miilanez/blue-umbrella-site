import Button from "@/components/ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="/" className="">
      <div className="bg-blue-100 pt-[80px]">
        <div className="w-full container mx-auto flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center w-full md:w-1/2 p-6">
            <Image
              src="/assets/images/hero/3ddeveloper.png"
              alt=""
              width="500"
              height="500"
              className="md:py-8"
            />
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2 p-6 -mt-20 md:mt-0">
            <div className="flex flex-col items-start my-12 text-left">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                Experiência em diversas tecnologias
              </span>
              <h1 className="my-8 text-4xl md:text-6xl overflow-hidden font-bold text-blue-950">
                Temos a solução web perfeita para você.
              </h1>
              <p className="text-base leading-relaxed text-left">
                A Blue Umbrella Tech dedica-se incansavelmente a criar soluções
                tecnológicas inovadoras, moldando o futuro digital dos nossos
                clientes com excelência e compromisso.
              </p>
              <div className="my-8 sm:flex">
                <Button
                  type="button"
                  text="Fale Conosco"
                  link="#contato"
                  containerStyles="px-10 py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="#dbeafe"
            fill-opacity="1"
            d="M0,0L720,96L1440,32L1440,0L720,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
