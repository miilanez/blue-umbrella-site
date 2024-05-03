import Button from "../../ui/Button";

const CallToAction = () => {
  return (
    <div className="container my-3">
      <div className="mx-5 p-3 bg-blue-950 rounded-xl">
        <div className="text-white mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-secondary text-2xl md:text-3xl font-semibold leading-tight text-center lg:text-left">
            Gostou do que viu? Vamos tomar um café e conversar!
          </h1>
          <Button
            text="Iniciar Projeto"
            link="https://api.whatsapp.com/send?phone=5581982301817&text=Fala%20Gabriel%2C%20Bom%20dia!"
            containerStyles="px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
