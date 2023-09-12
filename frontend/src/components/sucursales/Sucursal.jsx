import React from "react"
import Item from "./Item"
import imgSucursales from "../../assets/images/imgSucursales.png"
import imgCapital from "../../assets/images/hospitalCapital.avif"
import imgCordoba from "../../assets/images/hospitalCordoba.png"
import imgLaPlata from "../../assets/images/hospitalLaplata.png"
import imgMendoza from "../../assets/images/hospitalMendoza.png"
import imgRioCuarto from "../../assets/images/hospitalRiocuarto.png"
import imgSantaFe from "../../assets/images/hospitalSantafe.png"

const Sucursal = () => {
  const data = [
    {
      id: 0,
      location: "Capital Federal",
      mail: "snatoriobs@luxi.com",
      phone: "+123 456 78 91",
      street: "Caseros no 14 A",
      img: imgCapital,
    },
    {
      id: 1,
      location: "La Plata",
      mail: "slaplatas@luxi.com",
      phone: "+123 456 78 91",
      street: "San Martín 64",
      img: imgLaPlata,
    },
    {
      id: 2,
      location: "Córdoba Capital",
      mail: "scordoba@luxi.com",
      phone: "+123 456 78 91",
      street: "Av. Colón no 230",
      img: imgCordoba,
    },
    {
      id: 3,
      location: "Mendoza",
      mail: "sanatmend@luxi.com",
      phone: "+123 456 78 91",
      street: "Guemes 333",
      img: imgMendoza,
    },
    {
      id: 4,
      location: "Río Cuarto",
      mail: "sriocuarto@luxi.com",
      phone: "+123 456 78 91",
      street: "Av. Ferreyra 600",
      img: imgRioCuarto,
    },
    {
      id: 5,
      location: "Santa Fé",
      mail: "stafesanat@luxi.com",
      phone: "+123 456 78 91",
      street: "Santa Clara 560",
      img: imgSantaFe,
    },
  ]

  return (
    <section className="flex flex-col gap-5 md:gap-20 mx-5 md:mx-10 mb-20">
      <div className="flex flex-col gap-4">
        <header className="flex items-center gap-4 px-0 md:px-12 lg:px-24 font-bold font-baloo2 text-2xl">
          Sucursales
          <img className="w-10" src={imgSucursales} alt="logo" />
        </header>
        <p className="px-0 md:px-12 lg:px-24 font-latoSemibold text-base text-start">
          MediPro en diversos puntos del país.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-3 lg:gap-7 p-0 lg:px-10 justify-center lg:justify-center items-center">
        {data.map(({ id }) => (
          <Item data={data[id]} key={id} />
        ))}
      </div>
    </section>
  )
}

export default Sucursal
