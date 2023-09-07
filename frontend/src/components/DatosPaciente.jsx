import logo from "../assets/logo1.png";
import calendar from "../assets/calendar.png";
import { Input, InputGroup, SelectPicker } from "rsuite";
import { useState } from "react";
import axios from "axios";

const DatosPaciente = ({ onClose, start }) => {
  const URL =
    "http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/appointments/";
  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [socialWork, setSocialWork] = useState("");

  console.log(start);

  const dataSocialWork = ["Obstetricia", "Pediatría", "Oftalmología"].map(
    (item) => ({ label: item, value: item })
  );

  const postAppointment = async (appointmentNewData) => {
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
  };
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
            <div className="">
              <p>Fecha de nacimiento</p>
              <InputGroup>
                <Input
                  autoFocus
                  className="bg-[#F0F0F0]"
                  placeholder="03/10/2023"
                  onChange={(e) => setBirthDate(e)}
                  value={birthDate}
                />
                <InputGroup.Addon>
                  <img src={calendar} alt="calendario" />
                </InputGroup.Addon>
              </InputGroup>
            </div>

            <div className="">
              <p>DNI</p>
              <Input
                value={dni}
                onChange={(e) => setDni(e)}
                className="bg-[#F0F0F0]"
                placeholder="3488654"
              />
            </div>
          </div>

          <div className="text-left">
            <div className="mt-5 ">
              <p>Nombre y Apellido</p>
              <Input
                value={name}
                onChange={(e) => setName(e)}
                className="bg-[#F0F0F0]"
                placeholder="Nuñez Thiago"
              />
            </div>
            <div className="mt-5">
              <p>Telefono/mail de contacto</p>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e)}
                type="number"
                className="bg-[#F0F0F0]"
                placeholder="2244- 15789906"
              />
            </div>
            <div className="mt-5">
              <p>Obra Social</p>
              <SelectPicker
                data={dataSocialWork}
                className="bg-[#F0F0F0]"
                style={{ width: 224 }}
              />
            </div>
          </div>

          <div>
            <div className="w-full h-full">
              <div className="flex justify-end mt-20 gap-4">
                <button
                  onClick={onClose}
                  className="border border-black border-solid rounded-lg py-2 px-4 bg-white hover:scale-95 transition-all text-black"
                >
                  Cancelar
                </button>
                {/* className="border-1 border-black bg-[#fff]" */}
                <button className="border border-orange border-solid rounded-lg py-2 px-4 hover:scale-95 transition-all bg-orange font-latoRegular text-black">
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
