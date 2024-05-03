import Button from "@/components/ui/Button";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contato" className="py-10">
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-around items-center text-left">
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h1 className="text-3xl overflow-hidden font-extrabold text-blue-900 sm:text-4xl">
            Fique por dentro!
          </h1>
          <h3 className="my-2 font-light sm:text-xl">
            Digite seu e-mail e assine nossa Newsletter
          </h3>
          <div id="form-newslleter" className="mb-10">
            <form action="#">
              <div className="items-center mb-3 flex flex-row">
                <input
                  type="email"
                  id="email"
                  placeholder="Insira seu e-mail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                ></input>
                <Button type="submit" containerStyles="p-2 rounded rounded-tl-none rounded-bl-none" link="/" text="Inscrever"/>
              </div>
              <div className="flex flex-row text-sm text-left">
                <p className="">
                  Saiba como protegemos seus dados. Leia a nossa
                  <a
                    href="#"
                    className="ml-1 hover:font-medium hover:underline"
                  >
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
              <FaMapMarkerAlt size={20} />
              <p className="ml-2 ">
                Av. Abdo Cabus 867, Candeias, Jaboatão dos Guararapes - PE
              </p>
            </div>
            <div className="flex flex-row items-center">
              <FaEnvelope size={20} />{" "}
              <p className="ml-2">gabrielmilanez@blueumbrella.com.br</p>
            </div>
            <h3 className="mt-6 font-semibold text-lg text-blue-950">
              Telefone
            </h3>
            <div className="flex flex-row items-center">
              <FaPhoneAlt size={20} />{" "}
              <p className="ml-2 ">+55 (81) 98230-1817</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-6 flex flex-col items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.9947378708175!2d-34.927592788421016!3d-8.20328178225813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae13ef04a6363%3A0x2b039f2fa5ba0dd5!2sAv.%20Abdo%20Cabus%2C%20867%20-%20Candeias%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054440-350!5e0!3m2!1spt-BR!2sbr!4v1714069488654!5m2!1spt-BR!2sbr"
            width="400"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
