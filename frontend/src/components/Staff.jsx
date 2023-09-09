import foto from "../assets/59e6de97da95c93020cb001ee8246d14.png"
import foto1 from "../assets/image 15.png"
import foto2 from "../assets/image 17.png"
import foto3 from "../assets/image 12.png"
import foto4 from "../assets/image 14.png"
import foto5 from "../assets/image 13.png"
import foto6 from "../assets/image 16.png"
import foto7 from "../assets/image 19.png"
import circulo from "../assets/Group_1000000929-removebg-preview2.png"
import circulo2 from "../assets/Group_1000000929-removebg-preview.png"

const medics = [
  {
    nombre: "Juan Pérez",
    rol: "Hematólogo",
    img: foto,
  },
  {
    nombre: "María González",
    rol: "Cardióloga",
    img: foto1,
  },
  {
    nombre: "Carlos Rodríguez",
    rol: "Pediatra",
    img: foto2,
  },
  {
    nombre: "Laura López",
    rol: "Cirujana General",
    img: foto3,
  },
  {
    nombre: "Ana Martínez",
    rol: "Ginecóloga",
    img: foto4,
  },
  {
    nombre: "Luis Sánchez",
    rol: "Neurólogo",
    img: foto5,
  },
  {
    nombre: "Elena Torres",
    rol: "Oftalmóloga",
    img: foto6,
  },
  {
    nombre: "Javier Fernández",
    rol: "Urología",
    img: foto7,
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
          src={circulo}
          alt="detalle circular de la página"
          className="absolute w-[3rem] md:w-[4rem] left-0 -top-6"
        />
        <img
          src={circulo2}
          alt="detalle circular de la página"
          className="absolute w-[4rem] md:w-[6rem] right-0 -bottom-6"
        />
      </section>
    </>
  )
}

export default Staff
