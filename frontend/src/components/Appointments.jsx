import { useSelector } from "react-redux";
import BigCalendar from "./bigCalendar/BigCalendar";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import MenuHamburger from "./MenuHamburger";


const initialSpecialties = ["Clinic", "Cardiologist", "Dentist"].map(
  (item) => ({ label: item, value: item })
);

const Appointments = () => {
 
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [originalEvents, setOriginalEvents] = useState([]) // registro de originales
  const [events, setEvents] = useState([]) // Pasados a BigCalendar
  const [professional, setProfessional] = useState("") // Para filtro final
  const [profSelectList, setProfSelectList] = useState([]) // registro del original para reset
  const [specialty, setSpecialty] = useState("")
  const [specialtyList, setSpecialtyList] = useState([]) // Lista de especialidades tomadas de los turnos existentes
  const [allProfessionalList, setAllProfessionalList] = useState([]) // Con o sin turnos, viene de doctors endpoint

 /*  const URL = {
    doctors:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/doctors/",
    appointments:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/appointments/",
    patients:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/patients/",
    login:"http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000",
  } */
  useEffect( ()=> {
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
        //setEvents(dataFormated)      
        //  Esta funcionalidad pasa a handleSpecialty
      //   const drNames = data.map(item =>({
      //     // Para  rellenar selectPicker profesionales
      //     label:item.doctor_last_name+', '+item.doctor_first_name,
      //     value:item.doctor_last_name+', '+item.doctor_first_name,
      //   }))
      //   let doctorsWithoutDuplicates = drNames.filter((obj, index) => drNames.findIndex(o => o.label === obj.label) === index);
      //  // El otro algoritmo fallaba EN ESTE CASO
      //   setProfSelectList(doctorsWithoutDuplicates)
      //   setDisplayedProfSelectList(doctorsWithoutDuplicates)
      })
      .catch(err => console.log(err.message))
  },[])

  useEffect( ()=> {
    fetch(URL.doctors, 
      {method: "GET",headers: {accept: "application/json"}}
    )
      .then(res => res.json())
      .then(data => {
        setAllProfessionalList(data)
        const specialties = data.map(item => item.specialty)
        const specialtiesWithoutDuplicates = specialties.filter((el, index)=>{
          //console.log("index: ", index, "  specialties.indexOf(el): ", specialties.indexOf(el))
          return specialties.indexOf(el) === index;
        });
        const specialtiesFormated = specialtiesWithoutDuplicates.map(item=> ({label:item, value:item}))
        setSpecialtyList(specialtiesFormated)
      })
      .catch(err => console.log(err.message))
  },[])
  //console.log("PROFESIOLALSLIST: ", allProfessionalList)
  //console.log("EVENTS: ", events)
  //console.log("SPECIALTIESLIST: ", specialtyList)

  const handleProfessional = (n) =>{
    setProfessional(n)
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
    //console.log("FBPEvnt: ",filteredByProfessionalEvents)
    setEvents(filteredByProfessionalEvents)
    
  } 
  const handleSpecialty = (s) => {
    setSpecialty(s)
    //console.log("***  S  ***:", s)
    //console.log("** allProfessionalList ***: ",allProfessionalList)
    const filtered = allProfessionalList.filter(item =>item.specialty === s)
    //console.log("filtered en handleSpecialty", filtered)
    const drNamesInSelect = getDrWithAppointment(filtered, originalEvents)
    /* const newSelectList = filtered.map(item=> (
      {
        label:item.last_name+", "+item.first_name,
        value:item.last_name+", "+item.first_name
      }
    )) */
    //console.log("drNamesInSelect: ",drNamesInSelect )
    setProfSelectList(drNamesInSelect)
    
  }

  const handleOnCleanSpecialty = () => {
    //reset de professionals del select
    setEvents(originalEvents)
    console.log("originalEvents en handleOnClean: ", originalEvents)
    setProfSelectList(profSelectList)
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

  function getDrWithAppointment(drs, meets) {
    //allProfessionalList, events
    //con esta data setear displayedProfSelectList
    let drsWithApp = []
    for ( let i=0; i<drs.length; i++) {
      const el = meets.some( item => item.doctor_first_name===drs[i].first_name && item.doctor_last_name===drs[i].last_name)
      if (el) drsWithApp.push(drs[i])
    }
    const drNames = drsWithApp.map(item =>({
      // Para  rellenar selectPicker profesionales
      label:item.last_name+', '+item.first_name,
      value:item.last_name+', '+item.first_name,
    }))
  return drNames
  }

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
