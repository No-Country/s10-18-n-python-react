import BigCalendar from "./bigCalendar/BigCalendar";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import MenuHamburger from "./MenuHamburger";
import { getAppointmentsFromApi } from "../store/AppointmentSlice"
import { useDispatch, useSelector } from "react-redux"
import { createAppointment } from "../store/AppointmentSlice"



/* const initialSpecialties = ["Clinic", "Cardiologist", "Dentist"].map(
  (item) => ({ label: item, value: item })
); */

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
  

  const toArgHour = (a) =>{
    let str1 = a.substring(0,11)
    let str2 = a.substring(11,13)
    let str3 = a.substring(13,19)
    let num = Number(str2)
    let argH = (num-3).toString().padStart(2, "0")
    return `${str1}${argH}${str3}`
  }

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
            start: moment(toArgHour(item.start_datetime)).toDate(),
            end: moment(toArgHour(item.end_datetime)).toDate(),
            /* start: moment(item.start_datetime).toDate(),
            end: moment(item.end_datetime).toDate(), */
            id: item.id,
            id_doctor: item.id_doctor,
            id_patient: item.id_patient,
            patient_first_name: item.patient_first_name,
            patient_last_name: item.patient_last_name,
            prescription: item.prescription,
            state: item.state
          })) 
        setOriginalEvents(dataFormated)
        /* setEvents(dataFormated) */
        console.log("Trae nueva data events del server")
      })
      .catch(err => console.log("ERROR MESSAGE: ", err.message))
  },[])

  /* useEffect( () => {  // Intento de conservar filtros en reload
    const isSpecilty = localStorage.getItem('medical-specialty')
    const dr = JSON.parse(localStorage.getItem("doctor-professional"))
    console.log("dr: ", dr)
    if (isSpecilty && dr) {
      const filteredEvents = originalEvents.filter( 
        item => item.specialty===isSpecilty && item.doctor_first_name===dr.drfirstName && item.doctor_last_name===drLastName
      ) 
      setEvents(filteredEvents)
      setSpecialty(isSpecilty)
      setProfessionaSelected(`${dr.drLastName}, ${dr.drfirstName}`)
    }
  },[originalEvents]) */

    console.log("prof Sel: ",professionalSelected)

  const handleReloadAppointments = () => {
    setReloadAppointments(prev => !prev)
    console.log("refetch de appointments")
   //  no sirve porque llega data vieja
  }
  const handleSetNewAppointment = (dataEvent) => {
    // setea el nuevo estado directo desde el modal, sin esperar la respuesta del post, pero no esta actualizando el calendar
    console.log("dataEvent en handleSetNewAppointment: " ,dataEvent)
    setOriginalEvents([ ...originalEvents , dataEvent])
    setEvents([ ...events , dataEvent])
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
    localStorage.setItem('medical-specialty',s)
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
    const dataToLS = {drfirstName, drLastName}
    localStorage.setItem("doctor-professional",   JSON.stringify(dataToLS))
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

  
  //console.log("professional list: ", allProfessionalList)
  //console.log(events)

  //console.log("professional en Appointments: ", professional)
  console.log("events en Appointmest: ", events)
  console.log("originalEvents en Appointments: ", originalEvents)

  
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
      />
    </div>
  );
};

export default Appointments;
