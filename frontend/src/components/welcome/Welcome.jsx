import React from "react"
import imgWelcome from "../../assets/images/welcome/imgWelcome.png"
import circulo2 from "../../assets/images/welcome/Group_1000000929-removebg-preview.png"
import Button from "./Button.jsx"
import MenuHamburger from "../MenuHamburger"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [])

  return (
    <main className="flex flex-col text-center gap-7 justify-between mt-10 mb-20">
      <h1 className="text-2xl sm:text-3xl font-baloo2 font-bold text-orange">
        Bienvenido/a {user?.user?.first_name}
      </h1>
      <img
        src={imgWelcome}
        alt="Logo"
        className="m-auto w-56 sm:w-72 animate-flotar"
      />
      <Button text="Agenda de Turnos" link="/appointment" />
      <Button text="Historias Clínicas" link="/patients" />
      <MenuHamburger />
      <img
        src={circulo2}
        alt="detalle circular de la página"
        className="absolute w-[3rem] md:w-[6rem] right-0 bottom-5"
      />
    </main >
  )
}

export default Welcome
