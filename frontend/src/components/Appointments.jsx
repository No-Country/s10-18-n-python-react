import BigCalendar from "./bigCalendar/BigCalendar";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import MenuHamburger from "./MenuHamburger";
import { getAppointmentsFromApi } from "../store/AppointmentSlice"
import { useDispatch, useSelector } from "react-redux"
import { createAppointment } from "../store/AppointmentSlice"
const initialSpecialties = ["Clinic", "Cardiologist", "Dentist"].map(
  (item) => ({ label: item, value: item })
);

const Appointments = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [originalEvents, setOriginalEvents] = useState([]) // registro de originales
  const [events, setEvents] = useState([]) // Pasados a BigCalendar
  const [professional, setProfessional] = useState("") // data del dr seleccionado
  const [professionalSelected, setProfessionaSelected]=useState("") //nombre seleccionado <apellido, nombre>
  const [profSelectList, setProfSelectList] = useState([]) // registro del original para reset
  const [specialty, setSpecialty] = useState("")
  const [specialtyList, setSpecialtyList] = useState([]) // Lista de especialidades tomadas de los turnos existentes
  const [allProfessionalList, setAllProfessionalList] = useState([]) // Con o sin turnos, viene de doctors endpoint
  const [reloadAppointments, setReloadAppointments] = useState(false)
  const [count, setCount] = useState(0)
  /* const dispatch = useDispatch()
  const allAppointments = useSelector( state => state.appointments)
  console.log("allAppointments: ", allAppointments)
  const allAppointmentsFormated = ()=> {
    if (allAppointments.lenght) {
      allAppointments.map(item=>(
      { 
        diagnosis:item.diagnosis,
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
    } else return null
  }
  allAppointmentsFormated()  */

  useEffect(() => {
    /* dispatch(getAppointmentsFromApi()) */
    if (!user) {
      navigate("/");
    }
  }, []);
  
  /* useEffect(() => {
    console.log("Ejecuta Efecto por cambiar allApointments")
    allAppointments ? console.log("allAppointments", allAppointments) : console.log("NO FUNCA APPOINTMENTSSLICE")
  },[allAppointments]) */

  /* console.log("allAppointments: ", allAppointments) */
  const URL = {
    doctors:"https://medicadminbackend-jeqz-dev.fl0.io/doctors/",
    appointments:"https://medicadminbackend-jeqz-dev.fl0.io/appointments/",
    patients:"https://medicadminbackend-jeqz-dev.fl0.io/patients/",
    login:"https://medicadminbackend-jeqz-dev.fl0.io/login",
  }
  useEffect( ()=> {
    console.log("efecuta EFFECTO appointments, fetch")
    // al agregar appointment en el modal, llega antes el get que el post con la data actualizada
    fetch(URL.appointments, 
      {method: "GET",headers: {accept: "application/json"}}
    )
      .then(res => res.json())
      .then(data => {
        const dataFormated = data.map(item=>(
          { 
            diagnosis:item.diagnosis,
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
        console.log("Trae nueva data events del server")
        /* if (professionalSelected) {
          setOriginalEvents(dataFormated)
          //setEvents(dataFormated)
        }  */
      })
      .catch(err => console.log("ERROR MESSAGE: ", err.message))
  },[reloadAppointments])


  const handleReloadAppointments = () => {
    setReloadAppointments(prev => !prev)
    console.log("refetch de appointments")
   //  no sirve porque llega data vieja
  }
  const handleSetNewAppointment = (dataEvent) => {
    // setea el nuevo estado directo desde el modal, sin esperar la respuesta del post, pero no esta actualizando el calendar
    console.log("dataEvent en handleSetNewAppointment: " ,dataEvent)
    setOriginalEvents([ ...originalEvents , dataEvent])
    const newEvents = originalEvents.filter(
      // Prueba para ver si cambia el calendar, setEvent([...events, dataEvent]) no lo hace
      (item) => item.doctor_first_name === drfirstName && item.doctor_last_name === drLastName
      )
    setEvents(newEvents)
    //console.log("newEvents en Appointments: ",newEvents)
  }

  const handleSetCount = () => {
    setCount(prev => prev +1)
  }

  useEffect( ()=> {
    fetch(URL.doctors, 
      {method: "GET",headers: {accept: "application/json"}}
    )
      .then(res => res.json())
      .then(data => {
        setAllProfessionalList(data)
        const specialties = data.map(item => item.specialty)
        const specialtiesWithoutDuplicates = specialties.filter((el, index)=>{
          return specialties.indexOf(el) === index;
        });
        const specialtiesFormated = specialtiesWithoutDuplicates.map(item=> ({label:item, value:item}))
        setSpecialtyList(specialtiesFormated)
      })
      .catch(err => console.log(err.message))
  },[])

  const handleSpecialty = (s) => {
    setSpecialty(s)
    const filtered = allProfessionalList.filter(item =>item.specialty === s)
    const profSelListFormated = getDrNamesValuesSelect(filtered)
    setProfSelectList(profSelListFormated)
    //console.log("profSelListFormated: ", profSelListFormated)
    // Ahora se puede seleccionar cualquier professional, tenga o no turnos creados
  }

  const handleProfessional = (n) =>{
    let drFirstAndSecondNameArr; 
    n? drFirstAndSecondNameArr = n.split(', ') : null 
    let drLastName 
    let drfirstName
    if (n) {
      drLastName = drFirstAndSecondNameArr[0]
      drfirstName = drFirstAndSecondNameArr[1]
    }
    const filteredByProfessionalEvents = originalEvents.filter(
      (item) => item.doctor_first_name === drfirstName && item.doctor_last_name === drLastName
      )
    setEvents(filteredByProfessionalEvents)
    const professionalData = allProfessionalList.find(
      item=> item.first_name===drfirstName && item.last_name===drLastName
    )
    //console.log("N: ", n)
    //console.log("dr selected data: ", professionalData)
    setProfessionaSelected(n)
    setProfessional(professionalData)
  } 
  

  const handleOnCleanSpecialty = () => {
    //reset de professionals del select
    setEvents([])
    //console.log("originalEvents en handleOnClean: ", originalEvents)
    /* setProfSelectList(profSelectList) */
    setProfSelectList([])
    setProfessionaSelected('')// prueba reset
  }
  const handleOnCleanProfessional = () => {
    setEvents([])
    //console.log("events en handleOnClean: ", originalEvents)
    setProfessionaSelected('')
    /* setProfSelectList([]) */
  }

    function getDrNamesValuesSelect(drs) {
    const drNames = drs.map(item =>({
      // Para  rellenar selectPicker profesionales
      label:item.last_name+', '+item.first_name,
      value:item.last_name+', '+item.first_name,
    }))
  return drNames
  }

  /* const handleAddAppointment = () => {
    const data = {
      diagnosis:"",
      doctor_first_name: "Lolo",
      doctor_last_name: "Galo",
      end: item.end_datetime,
      id: Date.now(),
      id_doctor: "987654321",
      id_patient: "987654321",
      patient_first_name: "Cacho",
      patient_last_name: "Loco",
      prescription: "vago",
      start: "",
      state: ""
    }
    dispatch(createAppointment(data))
  } */
  //console.log("professional list: ", allProfessionalList)
  //console.log(events)
  //console.log("professional en Appointments: ", professional)
  console.log("events en Appointmest: ", events)
  console.log("originalEvents en Appointments: ", originalEvents)
  /* const addEventFake = () => {
    const newEvent = {
      diagnosis: "string",
      doctor_first_name: "Esteban",
      doctor_last_name: "Lugo",
      end: "2023-09-09T09:30:00",
      id: "a5f078b9-4965-45e5-b4cc-68085b6b44ab",
      id_doctor: "88f907ff-7b24-4276-8326-ea7959d2838a",
      id_patient: "45212365",
      patient_first_name: "Jan",
      patient_last_name: "Miranda",
      prescription: "string",
      start: "2023-09-09T09:00:00",
      state: "reserved"
    }
    setEvents([...events, newEvent])
  } */

  
  return (
    <div className="w-full">
      <MenuHamburger/>
      <div className="w-full flex justify-center gap-8 mt-10">
        <SelectPicker
          data={specialtyList}
          style={{ width: 224 }}
          placeholder="Especialidad"
          menuStyle={{ borderColor: "red", border: "1px" }}
          value={specialty}
          onChange={handleSpecialty}
          cleanable={true}
          onClean={handleOnCleanSpecialty}
        />
        <SelectPicker
          data={profSelectList}
          style={{ width: 224 }}
          placeholder="Profesional"
          value={professionalSelected} 
          onChange={handleProfessional}
          cleanable={true}
          onClean={handleOnCleanProfessional}
        />
      </div>
      <BigCalendar 
        professional={professional} 
        events={events}
        handleReloadAppointments = {handleReloadAppointments}
        handleSetNewAppointment = {handleSetNewAppointment}
        handleSetCount = {handleSetCount}
      />
      <h3>{count}</h3>
    </div>
  );
};

export default Appointments;

// Post
/* {
  "diagnosis": "string",    opcional
  "end": "2023-09-09T15:30:00.000Z",  *
  "id": "dfd88414-a3e2-4fd2-8970-2500c3e7dc7e",
  "id_doctor": "88f907ff-7b24-4276-8326-ea7959d2838a",
  "id_patient": "1d243d1f-cbc6-4009-9cba-1bae8854b9f6",   dni
  "patient_first_name": "Maria",
  "patient_last_name": "Salas",
  "prescription": "string",
  "start": "2023-09-09T15:00:00.000Z",  *
  "state": "reserved"    *
} */


//Necesito
/* {
  "diagnosis": "string",
  "doctor_first_name": "Esteban",
  "doctor_last_name": "Lugo",
  "end": "2023-09-09T15:30:00",
  "id": "dfd88414-a3e2-4fd2-8970-2500c3e7dc7e",
  "id_doctor": "88f907ff-7b24-4276-8326-ea7959d2838a",
  "id_patient": "25623120",
  "patient_first_name": "Maria",
  "patient_last_name": "Salas",
  "prescription": "string",
  "start": "2023-09-09T15:00:00",
  "state": "reserved"
} */
