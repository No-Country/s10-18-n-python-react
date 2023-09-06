import { useSelector } from "react-redux";
import BigCalendar from "./bigCalendar/BigCalendar";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import MenuHamburger from "./MenuHamburger";


/* const professionalsList = [
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
] */


const initialSpecialties = ["Clinic", "Cardiologist", "Dentist"].map(
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
  console.info("RENDERIZA APPOINTMENTS")
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [originalEvents, setOriginalEvents] = useState([])
  const [events, setEvents] = useState([])
  const [professional, setProfessional] = useState("")
  const [profSelectList, setProfSelectList] = useState([]) // registro del original para reset
  const [displayedProfSelectList, setDisplayedProfSelectList] = useState([])// mostrada en el select
  const [specialty, setSpecialty] = useState("")
  const [specialtyList, setSpecialtyList] = useState([])

  const [allProfessionalList, setAllProfessionalList] = useState([]) 
  
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
        setEvents(dataFormated)      
        const drNames = data.map(item =>({
          // Para  rellenar selectPicker profesionales
          label:item.doctor_last_name+', '+item.doctor_first_name,
          value:item.doctor_last_name+', '+item.doctor_first_name,
        }))
        let doctorsWithoutDuplicates = drNames.filter((obj, index) => drNames.findIndex(o => o.label === obj.label) === index);
       // El otro algoritmo fallaba EN ESTE CASO
        setProfSelectList(doctorsWithoutDuplicates)
        setDisplayedProfSelectList(doctorsWithoutDuplicates)
      })
      .catch(err => console.log(err.message))
  },[])
      //console.log("prof mostrados por el Select:", profSelectList)
    console.log("originalEvents: ", originalEvents)




  useEffect( ()=> {
    fetch(URL.doctors, 
      {method: "GET",headers: {accept: "application/json"}}
    )
      .then(res => res.json())
      .then(data => {
        //console.log("DATA DOCTORS: ",data)
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
  //console.log("SPECIALTIESLIST: ", specialtyList)
  
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
  ////////////////////////COMENTADO PARA PRUEBA/ reemplazado /////////////////////////////////
  // useEffect(()=>{
  //   const drNames = professionalsList.map(item =>({
  //     // Para  rellenar selectPicker profesionales
  //     label:item.last_name+', '+item.first_name,
  //     value:item.last_name+', '+item.first_name,
  //   }))
  //   setProfSelectList(drNames)
  // },[])
  ///////////////////////////////////////////////////////////////////
  //console.log("processedEvents: ", processedEvents)
  
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
    console.log()
    const filteredByProfessionalEvents = originalEvents.filter(
      (item) => item.first_name === drfirstName && item.last_name === drLastName
      )
    console.log("FBPEvnt: ",filteredByProfessionalEvents)
    setEvents(filteredByProfessionalEvents)
    
  } 
  const handleSpecialty = (s) => {
    setSpecialty(s)
    // const filteredEvents = originalEvents.filter(item =>item.specialty === s)
    // console.log("filtered: ", filteredEvents)
    // /* setevents(filteredEvents) */
    // Hay que filtrar los profesionales por specialty
    const filteredallProfessionalList = allProfessionalList.filter(item =>item.specialty === s)
    console.log("filteredallProfessionalList en handleSpecialty", filteredallProfessionalList)
    /* const fplWithoutDuplicates */ 
    const newSelectList = filteredallProfessionalList.map(item=> (
      {
        label:item.last_name+", "+item.first_name,
        value:item.last_name+", "+item.first_name
      }
    ))
    setDisplayedProfSelectList(newSelectList)
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

  console.log("allProfessionalList: ", allProfessionalList)

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
