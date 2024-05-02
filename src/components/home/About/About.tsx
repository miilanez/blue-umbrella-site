import Image from "next/image";
import AnimateLogo from "./AnimateLogo";

const About = () => {
  return (
    <section className="py-10">
      <div className="w-full container mx-auto flex flex-col">
        <div className=" flex flex-col items-center p-8 mx-auto">
          <div className="flex flex-col w-full mb-8 text-center">
            {/* <AnimateLogo /> */}
            <div className="w-full mx-auto">
              <div className="flex justify-center items-center p-3 pt-10"></div>
              <h1 className="text-blue-950 mb-10 leading-10 font-semibold text-4xl sm:text-7xl p-2 overflow-hidden">
                Bem-vindos a Blue Umbrella Tech
              </h1>
              <p className="text-xl">
                Nascemos em Junho de 2021 com o intuito de melhorar a trazer
                solução para a vida das pessoas dentro do mercado de Tecnologia
                da Informação. Desde então trabalhamos com muito empenho para
                que este sonho se torne realidade.
              </p>
            </div>
          </div>
        </div>
        <div className=" items-center w-full p-5">
          <div className="flex flex-wrap justify-center w-full mx-auto">
            <div className="relative justify-center">
              <div className="lg:grid lg:grid-cols-2 text-center">
                <div className="p-1">
                  <Image
                    src="/assets/images/about/dev.jpg"
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-lg mx-auto items-center shadow-xl shadow-blue-200"
                  />
                </div>
                <div className="p-1 my-5 md:my-auto items-center text-center md:m-0">
                  <span className="">
                    A Blue Umbrella Tech é focada em trazer soluções
                    tecnológicas eficientes, oferecendo uma gama diversificada
                    de serviços para atender às necessidades dos clientes. Com
                    uma equipe experiente, fornecemos consultoria em TI,
                    desenvolvimento de software personalizado e implementação de
                    sistemas para internet. Nosso foco no cliente garante
                    soluções adaptadas às suas demandas específicas,
                    impulsionando a eficiência operacional e o crescimento dos
                    negócios. Confie na excelência tecnológica da Blue Umbrella
                    Tech para alcançar o sucesso do seu negócio.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
