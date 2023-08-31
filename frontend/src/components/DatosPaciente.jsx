import logo from "../assets/logo1.png"
import calendar from "../assets/calendar.png"

const DatosPaciente = () => {
    return (
        <>
        <div className="w-full h-full flex justify-center">
            <div className="w-[800px] h-[786px] pl-24 pr-24 border-2 border-pink-700">
                <div className="flex flex-row items-center  ">
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                    <p>Sanatorio integral de salud</p>
                </div>

                <div className="flex flex-row mt-16">
                    <div className="w-full h-full">
                        <h2 className="text-left ml-14">Datos del paciente</h2>
                        <hr className="h-1 bg-[#712EFF] rounded-md"/>
                    </div>
                </div>

                <div className="flex flex-row text-left gap-12 mt-6 ">
                    <div className="">
                        <p>Fecha de nacimiento</p>
                        <img src={calendar} alt="calendario" className="absolute mt-4 ml-[210px]"/>
                        <input type="text" placeholder="3/03/2016" className="bg-[#F0F0F0] rounded-md w-[256px] h-12"/>
                    </div>

                    <div className="">
                        <p>DNI</p>
                        <input type="text" placeholder="3488654" className="bg-[#F0F0F0] rounded-md w-[256px] h-12 "/>
                    </div>
                </div>

                <div className="text-left">
                    <div className="mt-5 ">
                        <p>Nombre y Apellido</p>
                        <input type="text" placeholder="Nuñez, Thiago" className="w-full h-12 bg-[#f0f0f0] rounded-md"/>
                    </div>
                    <div className="mt-5">
                        <p>Telefono/mail de contacto</p>
                        <input type="text" placeholder="2244- 15789906" className="w-full h-12 bg-[#f0f0f0] rounded-md"/>
                    </div>
                    <div className="mt-5">
                        <p>Nombre y Apellido</p>
                        <input type="text" placeholder="Osmiss" className="w-full h-12 bg-[#f0f0f0] rounded-md"/>
                    </div>
                </div>

                <div >
                    <div className="w-full h-full">
                        <div className="flex justify-end mt-20 gap-4">
                            <button className="border-1 border-black bg-[#fff]">Cancelar</button>
                            <button className="bg-[#DC4928]">Agendar</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default DatosPaciente