import child1 from "../assets/images/child1.jpg";
import addIcon from "../assets/images/Add-user.svg";
import studiesIcon from "../assets/images/showStudies.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuHamburger from "./MenuHamburger";
import { Loader } from "rsuite";

const TableRow = ({ name, obraSocial, tel, date }) => {
  return (
    <>
      <tr>
        <td className="flex gap-3 justify-start items-center font-latoRegular py-4 px-8">
          <img
            src={child1}
            alt="imagen icono de persona"
            className="w-[1.5rem]"
          />
          {name}
        </td>
        <td className=" font-latoRegular py-4 px-6">{obraSocial}</td>
        <td className=" font-latoRegular py-4 px-6 whitespace-nowrap">{tel}</td>
        <td className=" font-latoRegular py-4 px-6">{date}</td>
        <td className=" font-latoRegular py-4 px-6">
          <button className="cursor-pointer">
            <img
              src={studiesIcon}
              alt="icono de tabla que indica ver los estudios del paciente"
              className="w-[1.5rem] mx-auto"
            />
          </button>
        </td>
      </tr>
    </>
  );
};

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetch("https://medicadminbackend-jeqz-dev.fl0.io/patients/")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="w-[90%] mx-auto gap-7 justify-center items-center">
      <MenuHamburger />
      <header className="w-fit font-baloo2 text-orange text-3xl font-black self-start ml-14 mt-6">
        Perfil
      </header>
      <div className="flex flex-col gap-5 overflow-x-scroll scroll-smooth lg:overflow-hidden pb-7 mx-10">
        <table className="table-auto m-5">
          <div className="table-header-group bg-lightBlue border-spacing-y-8 px-10">
            <tr className="">
              <th className=" font-baloo2 py-4 px-6 rounded-l-md text-center truncate">
                Nombre y Apellido
              </th>
              <th className=" font-baloo2 py-4 px-6">Obra Social</th>
              <th className=" font-baloo2 py-4 px-6">Teléfono</th>
              <th className=" font-baloo2 py-4 px-6 text-center truncate">
                Fecha de Nacimiento
              </th>
              <th className=" font-baloo2 py-4 px-6 rounded-r-md">Estudios</th>
            </tr>
          </div>
          <tbody className="m-5">
            {patients.length < 1 ? (
              <tr>
                <td colSpan={5}>
                  <Loader size="md" center content="Cargando..." />
                </td>
              </tr>
            ) : (
              patients.map((patient) => {
                return (
                  <TableRow
                    key={patient.id}
                    name={`${patient.first_name} ${patient.last_name}`}
                    obraSocial={patient.health_insurance}
                    tel={patient.phone}
                    date={patient.date_of_birth}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {patients.length >= 1 && (
        <button className="flex gap-4 bg-orange text-white rounded-md px-5 py-2 mx-auto mb-6">
          <img src={addIcon} alt="" />
          Agregar paciente
        </button>
      )}
    </main>
  );
};

export default Patients;
