import React from "react"
import imgLocation from "../../assets/imgLocation.png"
import imgMail from "../../assets/imgMail.png"
import imgPhone from "../../assets/imgPhone.png"

const Item = ({ data }) => {
  const { location, mail, phone, street, img } = data

  return (
    <article className="w-fit h-auto flex p-5 px-7 gap-10 justify-center items-center text-start shadow-xl rounded-2xl bg-white hover:scale-105 transition-all">
      <img src={img} className='w-[150px] h-[80px] rounded-2xl object-cover'></img>
      <section className="flex flex-col justify-between gap-1">
        <p className="font-latoBold text-base">{location}</p>
        <div className="flex gap-3">
          <img
            className="w-3 h-3 mt-[5px]"
            src={imgPhone}
            alt="Logo teléfono"
          />
          <span className=' font-latoRegular'>{phone}</span>
        </div>
        <div className="flex gap-3">
          <img className="w-3 h-3 mt-[5px]" src={imgMail} alt="Logo mail" />
          <p className=' font-latoRegular'>{mail}</p>
        </div>
        <div className="flex gap-3">
          <img
            className="w-3 h-4 mt-1 "
            src={imgLocation}
            alt="Logo ubicación"
          />
          <p className=' font-latoRegular'>{street}</p>
        </div>
      </section>
    </article>
  )
}

export default Item
