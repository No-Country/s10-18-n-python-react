import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import EventModal from "./EventModal";
import CustomEvent from "./CustomEvent";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";
import { useMemo, useState } from "react";
import moment from "moment";
import 'moment-timezone' 
import "react-big-calendar/lib/css/react-big-calendar.css";
import { toast } from "sonner";
import AddEventModal from "./AddEventModal";


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
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [event, setEvent] = useState(null);
  const components = useMemo(
    () => ({
      event: CustomEvent, 
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
        eventPropGetter={
          () => {
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
          () => {
            const backgroundColor = "#F9FAEF";
            return { style: { backgroundColor } };
          }
        }
        resourceTitleAccessor={(resource) => resource.patient_last_name}
        defaultView={"week"}
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
          getAppointmentes={props.getAppointmentes}
        />
      )}
    </div>
  );
}
