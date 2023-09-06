
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import EventModal from "./EventModal";
import AddEventModal from "./addEventModal";
import CustomEvent from "./CustomEvent";
import format from "date-fns/format";  
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  es: es,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

/* const initialEvents = [
  {
    start: new Date("2023-08-18T10:00:00"),
    end: moment("2023-08-18T11:00:00"),
    paciente: "Pablo Rodriguez",
    title: "MRI Registration",
    dr: "Juan Palotes",
    first_name:"carlos",
    second_name:"Flores",
    email:"dede@dede.com",
    specialty:"cardiología"
  },
  {
    start: moment("2023-08-21T10:00:00").toDate(),
    end: moment("2023-08-21T11:00:00").toDate(),
    paciente: "Jaun Rodriguez",
    title: "MRI Registration",
    dr: "Juan Palotes",
  },
  {
    start: moment("2023-08-21T14:00:00").toDate(),
    end: moment("2023-08-21T14:30:00").toDate(),
    paciente:'Pablo Ortega',
    title: "ENT Appointment",
    dr: "Juan Palotes II",
  },
  {
    start: moment("2023-08-22T17:00:00").toDate(),
    end: moment("2023-08-22T17:30:00").toDate(),
    paciente:'Juan Zeta',
    title: "EVENTO 1",
    dr: "Juan Palotes III",
  },
  {
    start: moment("2023-08-23T16:05:00").toDate(),
    end: moment("2023-08-23T16:30:00").toDate(),
    paciente:'Mateo Lopez',
    title: "EVENTO2",
    dr: "Juan Palotes IV",
  },
  {
    start: moment("2023-08-23T17:00:00").toDate(),
    end: moment("2023-08-23T17:30:00").toDate(),
    paciente:'Mateo Figueroa',
    title: "EVENTO3",
    dr: "Juan Palotes V",
  },
  {
    start: moment("2023-08-29T09:00:00").toDate(),
    end: moment("2023-08-29T09:30:00").toDate(),
    title: "OTRO EVENTO4",
    dr: "Juan Palotes VI",
    paciente:'Mateo IV'
  }
]; */

export default function Calendar(props) {
  console.info("***** RENDERIZA BIGCALENDAR *****")
  const components = useMemo(() => ({
    event: CustomEvent, // used by each view (Month, Day, Week)
  }), [])
  /* console.log("processedEvents: ", processedEvents) */
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false)
  const [event, setEvent] = useState(null)
  /* const [events, setEvents] = useState(processedEvents) */
    const handleOpen = (e) => {
      setEvent(e)
      setOpen(true)
    };
    const handleOpenAdd = (e) => {
      setEvent(e)
      setOpenAdd(true)
    };
    const handleClose = () => {
      setOpen(false)
      setOpenAdd(false)
      setEvent(null)
    };
  
    console.log("props.events en BigCalendar: ", props.events)
  // const handleSelectslot = (e) => {
  //   alert(`${e.start}`)
  //   console.log(moment(e).format())
  //   /* setEvents([...events, e] ) */
  // }
  /* console.log("events: ", events) */

 /*  fetch('http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/login', {
    method: 'POST',
    headers: {
      'accept': 'application/json'
    },
    body: new URLSearchParams({
      'grant_type': '',
      'username': 'esteban@lugo.com',
      'password': '123456',
      'scope': '',
      'client_id': '',
      'client_secret': ''
    })
    })
    .then(res => res.json())
    .then(data => console.log("data: ", data)) */


  return (
    <div style={{ height: "100vh", paddingTop:"1em", paddingBottom:"1em" , display:"flex", flexDirection:"row", justifyContent:"center", width:"100%" }}>
      <BigCalendar 
        {...props} 
        events={props.events}
        max={moment("2023-03-18T18:00:00").toDate()}
        min={moment("2023-03-18T08:00:00").toDate()}
        components={components}
        culture={'es'} 
        localizer={localizer} 
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          event: 'Evento',
          time: 'Hora'
        }}
        selectable
        onSelectEvent={(e) => handleOpen(e)}
        onSelectSlot={ (e)=>handleOpenAdd(e) }
        eventPropGetter={(/* props */) => {  
          return { style: { backgroundColor:' #A6DEF7', color: 'black', fontSize:'0.9em', height:'100%' } }
        }}
        dayPropGetter={(/* props */)=>{ 
          const backgroundColor ='#F9FAEF'
          return { style: { backgroundColor } }
        }}
        /* slotPropGetter={(props) => console.log(" props de slotPropGetter: ", props)} */
        /* elementProps={(props) => console.log("elementProps: ", props)} */
        resourceTitleAccessor={(resource)=> resource.patient_last_name}
        /* resourceTitleAccessor="paciente" */
        />
        { open && <EventModal event={event} open={open} handleOpen={handleOpen} handleClose={handleClose} />}
        { openAdd && <AddEventModal event={event} openAdd={openAdd} handleOpen={handleOpenAdd} handleClose={handleClose} />}
    </div>
  )
}
