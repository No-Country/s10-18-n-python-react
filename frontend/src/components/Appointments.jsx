import BigCalendar from "./bigCalendar/BigCalendar";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuHamburger from "./MenuHamburger";
import { useSelector } from "react-redux"
import { dateFormater, specialtiesMaker, toArgHour } from "../utils/auxFunctions";
import { URL } from "../utils/url";
import { getDoctors } from "../utils/getDoctors";


const Appointments = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [originalEvents, setOriginalEvents] = useState([]) // from endpoint
  const [events, setEvents] = useState([]) // originalEvents filtered pased to BigCalendar
  const [professional, setProfessional] = useState("") // data del dr seleccionado
  const [professionalSelected, setProfessionaSelected]=useState("") //nombre seleccionado <apellido, nombre>
  const [profSelectList, setProfSelectList] = useState([]) // registro del original para reset
  const [specialty, setSpecialty] = useState("")
  const [specialtyList, setSpecialtyList] = useState([]) // Lista de especialidades tomadas de los turnos existentes
  const [allProfessionalList, setAllProfessionalList] = useState([]) // Con o sin turnos, viene de doctors endpoint


  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
 console.log("URL: ", import.meta.env.VITE_APPOINTMENTS)
  const getAppointmentes = () => {
    fetch(`${import.meta.env.VITE_APPOINTMENTS}` , 
      {method: "GET",headers: {accept: "application/json"}}
    )
      .then(res => res.json())
      .then(data => {
          const dataFormated = dateFormater(data) 
        setOriginalEvents(dataFormated)
        console.log("dataFormated: ", dataFormated)
        if (professionalSelected){
          const drNameArr = professionalSelected.split(', ')
          let drLastName 
          let drfirstName
          drLastName = drNameArr[0]
          drfirstName = drNameArr[1]
          const filteredByProfessionalEvents = dataFormated.filter(
            (item) => item.doctor_first_name === drfirstName && item.doctor_last_name === drLastName
            )
          setEvents(filteredByProfessionalEvents)
        }
      })
      .catch(err => console.log("ERROR MESSAGE: ", err.message))
  }
  useEffect( ()=> {
    getAppointmentes()
  },[])

  // useEffect( () => {  // Para conservar filtros en reload
  //   const isSpecilty = localStorage.getItem('medical-specialty')
  //   const dr = JSON.parse(localStorage.getItem("doctor-professional"))

  //   if (isSpecilty && dr) {
  //     const {drfirstName, drLastName, id} = dr
  //     const filteredEvents = originalEvents.filter( item => item.id_doctor===id) 
  //     //console.log("filteredEvents: ", filteredEvents)
  //     setEvents(filteredEvents)
  //     setSpecialty(isSpecilty)
  //     const filtered = allProfessionalList.filter(item =>item.specialty === isSpecilty)///***** */
  //     const profSelListFormated = getDrNamesValuesSelect(filtered)// ****
  //     setProfSelectList(profSelListFormated) // ***
  //     setProfessionaSelected(`${drLastName}, ${drfirstName}`)
  //     /* const filteredByProfessionalEvents = originalEvents.filter(
  //       (item) => item.doctor_first_name === dr.drfirstName && item.doctor_last_name === dr.drLastName
  //       )
  //     setEvents(filteredByProfessionalEvents) */
  //     const professionalData = allProfessionalList.find(
  //       item=> item.id===id
  //     )
  //     setProfessional(professionalData)
  //   }
  // },[originalEvents])

  const handleSetEvents = (appointments) => {
    setEvents(appointments)
  }
  
  useEffect( ()=> {  
    async function setDrspecialties() {
      const doctors = await getDoctors()
      setAllProfessionalList(doctors)
      const specialtiesArr = await specialtiesMaker(doctors)
      setSpecialtyList(specialtiesArr)
    }
    setDrspecialties()
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
      const filteredByProfessionalEvents = originalEvents.filter(
        (item) => item.doctor_first_name === drfirstName && item.doctor_last_name === drLastName
        )
      setEvents(filteredByProfessionalEvents)
    }
    const professionalData = allProfessionalList.find(
      item=> item.first_name===drfirstName && item.last_name===drLastName
    )
    const dataToLS = {drfirstName, drLastName, id:professionalData.id}
    localStorage.setItem("doctor-professional",   JSON.stringify(dataToLS))
    setProfessionaSelected(n)
    setProfessional(professionalData)
  } 
  

  const handleOnCleanSpecialty = () => {
    setEvents([])
    setProfSelectList([])
    setProfessionaSelected('')
  }
  const handleOnCleanProfessional = () => {
    setEvents([])
    setProfessionaSelected('')
  }

    function getDrNamesValuesSelect(drs) {
    const drNames = drs.map(item =>({
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
          value={professionalSelected} 
          onChange={handleProfessional}
          cleanable={true}
          onClean={handleOnCleanProfessional}
        />
      </div>
      <BigCalendar 
        professional={professional} 
        events={events}
        handleSetEvents = {handleSetEvents}
        getAppointmentes = {getAppointmentes}
      />
    </div>
  );
};

export default Appointments;

