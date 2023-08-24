import React from "react";
import imgLocation from "../../assets/imgLocation.png";
import imgMail from "../../assets/imgMail.png";
import imgPhone from "../../assets/imgPhone.png";

const Item = ({ data }) => {
  const { location, mail, phone, street, img } = data;

  return (
    <div className="flex p-5 gap-10 justify-center text-start shadow-2xl w-auto rounded-2xl">
      <div className="avatar">
        <div className="rounded-2xl w-28">
          <img src={img}></img>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-bold">{location}</p>
        <div className="flex gap-2">
          <img
            className="w-3 h-3 mt-[5px]"
            src={imgPhone}
            alt="Logo teléfono"
          />
          <span>{phone}</span>
        </div>
        <div className="flex gap-2">
          <img className="w-3 h-3 mt-[5px]" src={imgMail} alt="Logo mail" />
          {mail}
        </div>
        <div className="flex gap-2">
          <img
            className="w-3 h-4 mt-1"
            src={imgLocation}
            alt="Logo ubicación"
          />
          {street}
        </div>
      </div>
    </div>
  );
};

export default Item;
