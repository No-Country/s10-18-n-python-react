import doctorOldmen from "../assets/images/doctorOldmen.png"
import doctorMen from "../assets/images/doctorMen.png"
import doctorFemale from "../assets/images/doctorFemale.png"
import doctorMen2 from "../assets/images/doctorMen2.png"
import doctorFemaleYoung from "../assets/images/doctorFemaleYoung.png"
import doctorFemaleYoung2 from "../assets/images/doctorFemaleYoung2.png"
import doctorFemaleYoung3 from "../assets/images/doctorFemaleYoung3.png"
import doctorMenYoung from "../assets/images/doctorMenYoung.png"
import blueCircleDetail from "../assets/images/blueCircleDetail.avif"

const medics = [
  {
    nombre: "Juan Pérez",
    rol: "Hematólogo",
    img: doctorOldmen,
  },
  {
    nombre: "María González",
    rol: "Cardióloga",
    img: doctorMen,
  },
  {
    nombre: "Carlos Rodríguez",
    rol: "Pediatra",
    img: doctorFemale,
  },
  {
    nombre: "Laura López",
    rol: "Cirujana General",
    img: doctorMen2,
  },
  {
    nombre: "Ana Martínez",
    rol: "Ginecóloga",
    img: doctorFemaleYoung,
  },
  {
    nombre: "Luis Sánchez",
    rol: "Neurólogo",
    img: doctorFemaleYoung2,
  },
  {
    nombre: "Elena Torres",
    rol: "Oftalmóloga",
    img: doctorFemaleYoung3,
  },
  {
    nombre: "Javier Fernández",
    rol: "Urología",
    img: doctorMenYoung,
  },
]

const Staff = () => {
  return (
    <>
      <section className="flex flex-col justify-center w-full bg-lightBlue rounded-tr-[120px] rounded-bl-[120px] relative">
        <header className="flex flex-col mt-5 items-start justify-center p-16 md:px-32 text-start">
          <h2 className=" font-baloo2 font-bold text-3xl text-orange">Staff</h2>
          <h3 className=" font-latoBold text-xl text-black whitespace-nowrap">
            Nuestros profesionales
          </h3>
          <p className=" font-latoRegular text-sm sm:text-base text-lightGray">
            Excelencia profesional que caracteriza los servicios brindados a
            nuestros pacientes.
          </p>
        </header>

        <section className="flex flex-wrap justify-center items-center gap-8 pb-16 md:px-16 lg:px-36  ">
          {medics.map(({ nombre, rol, img }) => {
            return (
              <div
                key={nombre}
                className="flex flex-col gap-5 p-4 pb-8 pt-4 rounded-3xl text-center bg-white shadow-2xl"
              >
                <img
                  src={img}
                  alt="Foto de médico"
                  className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] object-cover rounded-2xl"
                />
                <div className="flex flex-col">
                  <p className=" font-latoBold text-base text-black">
                    {nombre}
                  </p>
                  <p className=" font-latoRegular m-0">{rol}</p>
                </div>
              </div>
            )
          })}
        </section>

        <img
          src={blueCircleDetail}
          alt="detalle circular de la página"
          className="absolute w-[3rem] md:w-[4rem] left-0 -top-6"
        />
        <img
          src={blueCircleDetail}
          alt="detalle circular de la página"
          className="absolute w-[4rem] md:w-[6rem] right-0 -bottom-6"
        />
      </section>
    </>
  )
}

export default Staff
