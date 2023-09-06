import { useSelector } from "react-redux";
import BigCalendar from "./bigCalendar/BigCalendar";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";


const professionalsList = [
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
  /* const processedEvents = rowEvents.map(item =>({
    start:moment(item.start_datetime).toDate(),
    end:moment(item.end_datetime).toDate(),
    paciente:item.paciente,
    first_name:item.first_name,
    last_name:item.last_name,
    specialty:item.specialty
  })) */
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [originalEvents, setOriginalEvents] = useState([])
  const [events, setEvents] = useState([])
  const [professional, setProfessional] = useState("")
  const [profSelect, setProfSelect] = useState([])
  const [specialty, setSpecialty] = useState("")

  /* const drNames = professionalsList.map(item =>({
    // Para  rellenar selectPicker profesionales
    label:item.last_name+', '+item.first_name,
    value:item.last_name+', '+item.first_name,
  })) */

  const URL = {
    doctors:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/doctors/",
    appointments:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/appointments/",
    patients:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/patients/",
    login:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000",
  }
  useEffect( ()=> {
    fetch(URL.appointments, 
      {method: "GET",headers: {accept: "application/json"}}
    )
      .then(res => res.json())
      .then(data => {
        const dataFormated = data.map(item=>(
          { 
            doctor_first_name: item.doctor_first_name,
            doctor_last_name: item.doctor_last_name,
            end: moment(item.end_datetime).toDate(),
            id: item.id,
            id_doctor: item.id_doctor,
            id_patient: item.id_patient,
            patient_first_name: item.patient_first_name,
            patient_last_name: item.patient_last_name,
            prescription: item.prescription,
            start: moment(item.start_datetime).toDate(),
            state: item.state
          })) 
        setOriginalEvents(dataFormated)
        setEvents(dataFormated)
      })
      .catch(err => console.log(err.message))
  },[])
 /*  diagnosis: "completar"
  doctor_first_name: "Carla"
  doctor_last_name: "Morales"
  end_datetime: "2023-09-11T09:00:00"
  id: "049ecdc6-cd23-4955-bf22-f012ec6be479"
  id_doctor: "fce7aa9c-85d3-4d1d-9072-1da90b6e166a"
  id_patient: "4efb817c-3566-43b8-8723-3bf4544982ba"
  patient_first_name: "Carlos"
  patient_last_name: "Sol"
  prescription: "completar"
  start_datetime: "2023-09-11T08:30:00"
  state: "reserved" */




  // useEffect( ()=> {
  //   fetch(URL.doctors, 
  //     {method: "GET",headers: {accept: "application/json"}}
  //   )
  //     .then(res => res.json()
  //     .then(data => console.log("data: ", data)))
  //     .catch(err => console.log(err.message))
  // },[])
/*  useEffect(() => {
    fetch(
      "http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/doctors/",
      { method: "GET", headers: { accept: "application/json" } }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, []); */

  /* let credentials = {
    username:'esteban@lugo.com',
    password:'123456'
  } */
  useEffect(()=>{
    const drNames = professionalsList.map(item =>({
      // Para  rellenar selectPicker profesionales
      label:item.last_name+', '+item.first_name,
      value:item.last_name+', '+item.first_name,
    }))
    setProfSelect(drNames)
  },[])
  //console.log("processedEvents: ", processedEvents)
  
  const handleProfessional = (n) =>{
    setProfessional(n)
    //filtrar appointmente por prof
    let drFirstAndSecondNameArr; 
    n? drFirstAndSecondNameArr = n.split(', ') : null 
    let drLastName 
    let drfirstName
    if (n) {
      drLastName = drFirstAndSecondNameArr[0]
      drfirstName = drFirstAndSecondNameArr[1]
    }
    const filteredByProfessionalEvents = originalEvents.filter(
      (item) => item.first_name === drfirstName && item.last_name === drLastName
      )
    console.log("FBPEvnt: ",filteredByProfessionalEvents)
    /* setevents(filteredByProfessionalEvents) */
    
  } 
  const handleSpecialty = (s) => {
    setSpecialty(s)
    const filteredEvents = originalEvents.filter(item =>item.specialty === s)
    console.log("filtered: ", filteredEvents)
    /* setevents(filteredEvents) */
  }

  const handleOnCleanSpecialty = () => {
    setEvents(originalEvents)
    console.log("originalEvents en handleOnClean: ", originalEvents)
  }
  const handleOnCleanProfessional = () => {
    setEvents(originalEvents)
    console.log("events en handleOnClean: ", originalEvents)
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
          data={profSelect}
          style={{ width: 224 }}
          placeholder="Profesional"
          value={professional} 
          onChange={handleProfessional}
          cleanable={true}
          onClean={handleOnCleanProfessional}
        />
      </div>
      <BigCalendar professional={professional} events={events}  />
    </div>
  );
};

export default Appointments;
