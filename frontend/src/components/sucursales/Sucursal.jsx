import React from "react";
import Item from "./Item";
import imgSucursales from "../../assets/imgSucursales.png";
import imgCapital from "../../assets/capital.png";
import imgCordoba from "../../assets/cordoba.png";
import imgLaPlata from "../../assets/laplata.png";
import imgMendoza from "../../assets/mendoza.png";
import imgRioCuarto from "../../assets/riocuarto.png";
import imgSantaFe from "../../assets/santafe.png";

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
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 font-bold text-2xl">
          Sucursales
          <img className="w-10" src={imgSucursales} alt="logo" />
        </div>
        <p className="text-start">
          Sanatorio Integral de Salud en diversos puntos del país.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-10 justify-evenly">
        {data.map(({ id }) => (
          <div key={id} className="hover:scale-105 transition-all">
            <Item data={data[id]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sucursal;
