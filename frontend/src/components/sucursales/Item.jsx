import imgLocation from "../../assets/images/imgLocation.png"
import imgMail from "../../assets/images/imgMail.png"
import imgPhone from "../../assets/images/imgPhone.png"

const Item = ({ data }) => {
  const { location, mail, phone, street, img } = data

  return (
    <article className="w-fit h-auto flex py-5 px-6 gap-5 lg:gap-10 items-center text-start shadow-xl rounded-2xl bg-white hover:scale-105 transition-all">
      <img src={img} className='w-[115px] h-[74px] lg:w-[150px] lg:h-[90px] rounded-3xl object-cover'></img>
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
