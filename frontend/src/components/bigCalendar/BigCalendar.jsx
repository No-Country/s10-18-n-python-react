import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import EventModal from "./EventModal";
import CustomEvent from "./CustomEvent";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import 'moment-timezone' 
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEventModal from "./AddEventModal";
import { Toaster, toast } from "sonner";


const locales = {
  es: es,
};
moment.tz.setDefault("America/Argentina/Buenos_Aires")
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialState = [
  {
    diagnosis: "",
    doctor_first_name: "Carlos",
    doctor_last_name: "Broggi",
    end : "2023-10-17T15:30:00.000Z",
    id: "ab2af4cd-0693-4919-b611-b197985f49b6",
    id_doctor: "36533e34-7c51-42b9-a208-22fdbaaea51e",
    id_patient: "26541259",
    patient_first_name: "Mario",
    patient_last_name: "Merlo",
    prescription: "4521-5698",
    start: "2023-10-17T15:00:00.000Z",
    state: "reserved"
  },
  {
    diagnosis: "",
    doctor_first_name: "Carlos",
    octor_last_name: "Broggi",
    end: "2023-09-14T16:00:00.000Z",
    id: "d2d031bd-ea8a-424d-9885-1fb75081fb4f",
    id_doctor: "36533e34-7c51-42b9-a208-22fdbaaea51e",
    id_patient: "26541259",
    patient_first_name: "Mario",
    patient_last_name: "Merlo",
    prescription: "4521-4562",
    start: "2023-09-14T15:30:00.000Z",
    state: "reserved"
  },
  {
  diagnosis: "",
  doctor_first_name: "Carlos",
  doctor_last_name: "Broggi",
  end: "2023-10-13T14:30:00.000Z",
  id: "707744da-6031-4bf9-bcb2-869b868d3d32",
  id_doctor: "36533e34-7c51-42b9-a208-22fdbaaea51e",
  id_patient: "36456985",
  patient_first_name: "Ramiro",
  patient_last_name: "Tirso",
  prescription: "4569-7812",
  start: "2023-10-13T14:00:00.000Z",
  state: "reserved"
  }
]


export default function Calendar(props) {
  //console.log("***  Renderiza BigCalendar  ***")
  /* const events = props.events */
  const [profEvents, setProfEvents] = useState(initialState)
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [event, setEvent] = useState(null);
  
  const components = useMemo(
    () => ({
      event: CustomEvent, // used by each view (Month, Day, Week)
    }),[]);
    
  const handleOpen = (e) => {
    setEvent(e);
    setOpen(true);
  };
  const handleOpenAdd = (e) => {
    if (props.professional) {
      setEvent(e);
      setOpenAdd(true);
    } else {
      toast.error("Debe seleccionar un profesional");
    }
  };
  const handleClose = () => {
    setOpen(false);
    setOpenAdd(false);
    setEvent(null);
  };

  // const handleSelectslot = (e) => {
  //   alert(`${e.start}`)
  //   console.log(moment(e).format())
  //   /* setEvents([...events, e] ) */
  // }
  /* console.log("events: ", events) */
  
  const addFakeEvent = (e)=> {
    const appointmentData = {
      start: e.start,
      end: e.end,
      diagnosis: "-",
      id_doctor: "36533e34-7c51-42b9-a208-22fdbaaea51e",
      id_patient: "25854790",
      patient_first_name: "Juan",
      patient_last_name: "Juanes III",
      prescription: "-",
      state: "-"
    }
    
    setProfEvents([...profEvents, {...appointmentData}])
  }
  console.log("profEvents", profEvents)
  //console.log("props.events en BigCalendar", props.events)
  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "1em",
        paddingBottom: "1em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <BigCalendar
        {...props}
        /* events={profEvents} */
        events={props.events}
        max={moment("2023-03-18T19:00:00").toDate()}
        min={moment("2023-03-18T08:00:00").toDate()}
        components={components}
        culture={"es"}
        localizer={localizer}
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          event: "Evento",
          time: "Hora",
        }}
        selectable
        onSelectEvent={(e) => handleOpen(e)}
        onSelectSlot={(e) =>{ 
          e.start.getHours() >= 8 ? handleOpenAdd(e) : null}}
        /* onSelectSlot={(e)=> addFakeEvent(e)} */
        eventPropGetter={
          (/* props */) => {
            return {
              style: {
                backgroundColor: " #A6DEF7",
                color: "black",
                fontSize: "0.9em",
                height: "100%",
              },
            };
          }
        }
        dayPropGetter={
          (/* props */) => {
            const backgroundColor = "#F9FAEF";
            return { style: { backgroundColor } };
          }
        }
        /* slotPropGetter={(props) => console.log(" props de slotPropGetter: ", props)} */
        /* elementProps={(props) => console.log("elementProps: ", props)} */
        resourceTitleAccessor={(resource) => resource.patient_last_name}
        defaultView={"week"}
        /* resourceTitleAccessor="paciente" */
      />
      {open && (
        <EventModal
          event={event}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleSetCount={props.handleSetCount}
        />
      )}
      {openAdd && (
        <AddEventModal
          event={event}
          openAdd={openAdd}
          handleOpen={handleOpenAdd}
          handleClose={handleClose}
          professional={props.professional}
          handleReloadAppointments={props.handleReloadAppointments}
          handleSetNewAppointment = {props.handleSetNewAppointment}
        />
      )}
      {/* <button onClick={addFakeEvent}>Add Evento</button> */}
    </div>
  );
}
