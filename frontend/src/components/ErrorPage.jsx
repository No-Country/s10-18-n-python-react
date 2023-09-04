import React from "react";
import imgError from "../assets/images/errorPage/imgErrorPage.png";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center my-10">
      <h2 className="font-baloo2 text-orange text-xl sm:text-3xl">
        Ha ocurrido un error inesperado
      </h2>
      <img
        className="w-72 sm:w-96 m-auto"
        src={imgError}
        alt="Imagen página no encontrada"
      />
      <p className="font-baloo2 text-orange text-xl sm:text-3xl">
        Error 404 - Página no encontrada
      </p>
      <p className="font-baloo2 text-orange text-xl sm:text-3xl">
        Vuelve a intentarlo en unos minutos
      </p>
      <Link
        style={{ textDecoration: "none" }}
        className="bg-orange w-36 py-2 m-auto text-white font-baloo2 text-xl mt-5 rounded-md hover:text-white hover:scale-95 transition-all"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
