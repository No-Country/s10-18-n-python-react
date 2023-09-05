import { useSelector } from "react-redux";
import BigCalendar from "./bigCalendar/BigCalendar";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";


const prof = [
  // para tomar los nombres del filtro, reemplazar por un get de doctores
  {
    first_name:"Carlos",
    last_name:"Flores",
    email:"dede@dede.com",
    specialty:"cardiología"
  },
  {
    first_name:"Juan",
    last_name:"Gonzalez Prieto",
    email:"dede2@dede.com",
    specialty:"traumatología"
  }
]

const rowEvents = [
  {
    id:"dede3344",
    start_datetime: "2023-09-18T10:00:00",
    end_datetime: "2023-09-18T11:00:00",
    paciente: "Pablo Rodriguez",
    first_name:"Carlos",
    last_name:"Flores",
    specialty:"Cardiología"
  },
  {
    start_datetime: "2023-09-21T10:00:00",
    end_datetime: "2023-09-21T11:00:00",
    paciente: "Jaun Rodriguez",
    first_name:"Carlos",
    last_name:"Flores",
    specialty:"Cardiología"
  },
  {
    start_datetime: "2023-09-21T14:00:00",
    end_datetime: "2023-09-21T14:30:00",
    paciente:'Pablo Ortega',
    first_name:"Carlos",
    last_name:"Flores",
    specialty:"Cardiología"
  },
  {
    start_datetime: "2023-09-22T17:00:00",
    end_datetime: "2023-09-22T17:30:00",
    paciente:'Juan Zeta',
    first_name:"Juan",
    last_name:"Gonzalez Prieto",
    specialty:"Traumatologia"
  },
  {
    start_datetime: "2023-09-23T16:05:00",
    end_datetime: "2023-09-23T16:30:00",
    paciente:'Mateo Lopez',
    first_name:"Juan",
    last_name:"Gonzalez Prieto",
    specialty:"Traumatologia"
  },
  {
    start_datetime: "2023-09-23T17:00:00",
    end_datetime: "2023-09-23T17:30:00",
    paciente:'Mateo Figueroa',
    first_name:"Juan",
    last_name:"Gonzalez Prieto",
    specialty:"Traumatologia"
  },
  {
    start_datetime: "2023-09-29T09:00:00",
    end_datetime: "2023-09-29T09:30:00",
    paciente:'Mateo IV',
    first_name:"Juan",
    last_name:"Gonzalez Prieto",
    specialty:"Traumatologia"
  }
];

const especialidad = ["Obstetricia", "Pediatría", "Oftalmología", "Cardiología"].map(
  (item) => ({ label: item, value: item })
);

const Appointments = () => {
  const processedEvents = rowEvents.map(item =>({
    start:moment(item.start_datetime).toDate(),
    end:moment(item.end_datetime).toDate(),
    paciente:item.paciente,
    first_name:item.first_name,
    last_name:item.last_name,
    specialty:item.specialty
  }))
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [events, setEvents] = useState(processedEvents)
  const [displayedEvents, setDisplayedEvents] = useState(processedEvents)
  const [professional, setProfessional] = useState("")
  const [specialty, setSpecialty] = useState("")

  const drNames = prof.map(item =>({
    // Para  rellenar selectPicker profesionales
    label:item.last_name+', '+item.first_name,
    value:item.last_name+', '+item.first_name,
  }))

  const URL = {
    doctors:'https://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/doctors',
    appointments:'https://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/appointments',
    patients:'https://ec2-3-17-60-17.us-east-2.compute.amazonaws.com/patients',
    login:'https://ec2-3-17-60-17.us-east-2.compute.amazonaws.com/login',
  }
  //http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/doctors/


  fetch(URL.doctors)
  .then(res => res.json()
  .then(data => console.log("data: ", data)))
  .catch(err => console.log(err.message))
  .finally()

  /* let credentials = {
    username:'esteban@lugo.com',
    password:'123456'
  } */

  console.log("processedEvents: ", processedEvents)
  
  const handleProfessional = (n) =>{
    setProfessional(n)
    //filtrar appointmente por prof
    let drFirstAndSecondNameArr; 
    n? drFirstAndSecondNameArr = n.split(', ') : null 
    console.log("nombre arr: ", drFirstAndSecondNameArr)
    let drLastName 
    let drfirstName
    if (n) {
      drLastName = drFirstAndSecondNameArr[0]
      drfirstName = drFirstAndSecondNameArr[1]
    }
    console.log("PRUEBA NOMBRE Y APELLIDO:   apellido ", drLastName, "nombre: ",drfirstName, )
    console.log("BANDERA 1: ",drFirstAndSecondNameArr)
    console.log("events ")
    // chequear si events.length === displayedEvents.length, si no son iguales es que ya hay filtro aplicado 
    // y hay que filtrar nuevamente 
    if (events.length === displayedEvents.length) {
      const filteredByProfessionalEvents = events.filter(
        (item) => item.first_name === drfirstName && item.last_name === drLastName
        )
      console.log("FBPEvnt: ",filteredByProfessionalEvents)
      setDisplayedEvents(filteredByProfessionalEvents)
    }
    if (events.length !== displayedEvents.length) {
      const filteredByProfessionalEvents = displayedEvents.filter(
        (item) => item.first_name === drfirstName && item.last_name === drLastName
        )
      console.log("FBPEvnt: ",filteredByProfessionalEvents)
      setDisplayedEvents(filteredByProfessionalEvents)
    }
    /* setProfessional(professional =>({
      ...professional, 
      first_name:drFirstAndSecondNameArr[1],
      last_name:drFirstAndSecondNameArr[0]
    }))*/
  } 
  const handleSpecialty = (s) => {
    setSpecialty(s)
    const filteredEvents = events.filter(item =>item.specialty === s)
    console.log("filtered: ", filteredEvents)
    console.log(s)
    /* setEvents(filteredEvents) */
    setDisplayedEvents(filteredEvents)
  }

  const handleOnCleanSpecialty = () => {
    setDisplayedEvents(events)
    console.log("events en handleOnClean: ", events)
  }
  const handleOnCleanProfessional = () => {
    setDisplayedEvents(events)
    console.log("events en handleOnClean: ", events)
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center gap-8 mt-5">
        <SelectPicker
          data={especialidad}
          style={{ width: 224 }}
          placeholder="Especialidad"
          menuStyle={{ borderColor: "red", border: "1px" }}
          value={specialty}
          onChange={handleSpecialty}
          cleanable={true}
          onClean={handleOnCleanSpecialty}
        />
        <SelectPicker
          data={drNames}
          style={{ width: 224 }}
          placeholder="Profesional"
          value={professional} 
          onChange={handleProfessional}
          cleanable={true}
          onClean={handleOnCleanProfessional}
        />
      </div>
      <BigCalendar professional={professional} events={displayedEvents}  />
    </div>
  );
};

export default Appointments;
