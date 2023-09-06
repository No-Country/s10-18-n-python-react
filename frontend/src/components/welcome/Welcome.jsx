import React from "react";
import imgWelcome from "../../assets/images/welcome/imgWelcome.png";
import Button from "./Button.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col text-center gap-10 justify-between mt-5 pb-20">
      <h1 className="text-xl sm:text-3xl font-latoBold text-[#DC4928]">
        Bienvenido/a {user?.user?.first_name}
      </h1>
      <img
        src={imgWelcome}
        alt="Logo"
        className="m-auto w-72 sm:w-96 animate-flotar"
      />
      <Button text="Agenda de Turnos" link="/appointment" />
      <Button text="Historias Clínicas" link="/patients" />
    </div>
  );
};

export default Welcome;
