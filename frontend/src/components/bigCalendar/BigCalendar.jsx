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
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEventModal from "./AddEventModal";
import { Toaster, toast } from "sonner";

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


export default function Calendar(props) {
  const components = useMemo(
    () => ({
      event: CustomEvent, // used by each view (Month, Day, Week)
    }),
    []
  );
  //console.log("***  Renderiza BigCalendar  ***")
  console.log("props.events en BigCalendar", props.events)

  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [event, setEvent] = useState(null);

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
        events={props.events}
        max={moment("2023-03-18T18:00:00").toDate()}
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
        onSelectSlot={(e) => handleOpenAdd(e)}
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
        /* resourceTitleAccessor={(resource) => resource.patient_last_name} */
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
    </div>
  );
}
