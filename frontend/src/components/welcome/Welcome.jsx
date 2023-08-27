import React from "react";
import imgWelcome from "../../assets/images/welcome/imgWelcome.png";
import Button from "./Button.jsx";

const Welcome = () => {
  return (
    <div className="flex flex-col text-center gap-16 justify-between pb-20">
      <h1 className="text-3xl font-bold text-[#DC4928]">Bienvenido/a</h1>
      <img src={imgWelcome} alt="Logo" className="m-auto w-96 animate-flotar" />
      <Button text="Agenda de Turnos" link="/" />
      <Button text="Historias Clínicas" link="/" />
    </div>
  );
};

export default Welcome;
