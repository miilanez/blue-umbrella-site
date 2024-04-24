import Image from "next/image";

const About = () => {
  return (
    <section className="py-10">
      <div className="w-full container mx-auto flex flex-col">
        <div class=" flex flex-col items-center p-8 mx-auto">
          <div class="flex flex-col w-full mb-8 text-center">
            <div class="w-full mx-auto">
              <h1 className="mb-4 text-4xl text-blue-950 font-extrabold overflow-hidden md:text-5xl lg:text-6x">
                Sobre Nós
              </h1>
              <div className="flex justify-center items-center p-3 pt-10">
                <Image
                  src="/assets/images/about/logoumbrella.png"
                  alt="Blue Umbrella Tech logo"
                  width="50"
                  height="50"
                />
              </div>
              <p className="mb-8 text-lg font-normal">
                Bem-vindos a Blue Umbrella Tech
              </p>
              <p>
                A Blue Umbrella Tech surgiu em Janeiro de 2022 com o intuito de
                melhorar a trazer solução para a vida das pessoas dentro do
                mercado de Tecnologia da Informação. Desde então trabalhamos com
                muito empenho para que este sonho se torne realidade.
              </p>
            </div>
          </div>
        </div>
        <div class=" items-center w-full p-5">
          <div class="flex flex-wrap justify-center w-full mx-auto">
            <div class="relative justify-center">
              <div class="lg:grid lg:grid-cols-2 text-center">
                <div class="p-8">
                  <h1 class="font-extrabold text-3xl text-blue-800">
                    Nossa Visão
                  </h1>
                  <p>
                    Nossa visão é ser a referência em inovação na web, moldando
                    o futuro digital com soluções que transcendem expectativas.
                    Buscamos constantemente explorar novas fronteiras
                    tecnológicas e inspirar a evolução contínua da experiência
                    online.
                  </p>
                </div>
                <div class="p-8">
                  <h1 class="font-extrabold text-3xl text-blue-800">
                    Nossa Missão
                  </h1>
                  <p>
                    Nossa missão é capacitar negócios para alcançarem seu máximo
                    potencial na web, fornecendo soluções sob medida e
                    orientadas para resultados. Comprometemo-nos a oferecer
                    qualidade excepcional, colaboração transparente e suporte
                    contínuo, impulsionando o sucesso de nossos clientes.
                  </p>
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
