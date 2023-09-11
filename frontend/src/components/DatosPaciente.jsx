import logo from "../assets/logo1.png";
import calendar from "../assets/calendar.png";
import { Input, InputGroup } from "rsuite";
import { useState } from "react";
import axios from "axios";

const DatosPaciente = ({ handleClose, start, professional, addAppointment }) => {
  const URL =
    "https://medicadminbackend-jeqz-dev.fl0.io/appointments/";
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [drName, setDrName] = useState(professional.first_name);
  const [drLastName, setDrLastName] = useState(professional.last_name);
  const [pacientState, setPacientState] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const [dni, setDni] = useState("")

  //   console.log("FECHA: ", start.toISOString().substring(0, 10));

 /*  const postAppointment = async (appointmentNewData) => {
    const request = await axios.post(
      URL,
      new URLSearchParams(appointmentNewData),
      {
        headers: { accept: "application/json" },
      }
    );
    const response = await request.data.user;
    localStorage.setItem("user", JSON.stringify(response));
    toast.success("Has iniciado sesión correctamente");
    return response;
  }; */

  const handleClikAdd = () => {
    handleClose()
    setTimeout(()=>addAppointment(name, lastName, diagnosis, pacientState, prescription, dni), 1000)
  }
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="   ">
          <div className="flex flex-row items-center  ">
            <div className="">
              <img src={logo} alt="logo" />
            </div>
            <p>Sanatorio integral de salud</p>
          </div>

          <div className="flex flex-row mt-10">
            <div className="w-full h-full">
              <h2 className="text-left ml-14">Datos del paciente</h2>
              <hr className="h-1 bg-[#712EFF] rounded-md" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-left gap-5 sm:gap-10 mt-6">
            {/* <div className="">
              <p>Nombre del Profesional</p>
              <Input disabled value={`${drName} ${drLastName}`} />
              </div> */}
              
              <div className="">
              <p>Fecha de Nacimiento</p>
              <InputGroup>
              <Input />
              <InputGroup.Addon>
              <img src={calendar} alt="calendario" />
              </InputGroup.Addon>
              </InputGroup>
            </div>
            <div className="">
              <p>DNI</p>
              <Input value={dni} onChange={(e)=> setDni(e)} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-left sm:gap-10 mt-6">

            <div className="mt-5 ">
              <p>Nombre</p>
              <Input
                value={name}
                onChange={(e) => setName(e)}
                placeholder=""
                required
              />
            </div>
            <div className="mt-5 ">
              <p>Apellido</p>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e)}
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="text-left">
            {/* <div className="mt-5">
              <p>Diagnóstico</p>
              <Input
                value={diagnosis}
                onChange={(e) => setDiagnosis(e)}
                type="text"
                placeholder=""
              />
            </div> */}
            <div className="mt-5">
              <p>Teléfono/ mail de contacto</p>
              <Input
                value={prescription}
                onChange={(e) => setPrescription(e)}
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-5">
              <p>Obra Social</p>
              <Input
                value={pacientState}
                onChange={(e) => setPacientState(e)}
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <div className="w-full h-full">
              <div className="flex justify-end mt-20 gap-4">
                <button
                  onClick={handleClose}
                  className="border border-black border-solid rounded-lg py-2 px-4 bg-white hover:scale-95 transition-all text-black"
                >
                  Cancelar
                </button>
                {/* className="border-1 border-black bg-[#fff]" */}
                <button 
                  onClick={handleClikAdd}
                  className="border border-orange border-solid rounded-lg py-2 px-4 hover:scale-95 transition-all bg-orange font-latoRegular text-black"
                >
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosPaciente;
