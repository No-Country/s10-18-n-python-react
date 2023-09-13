import { Modal, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
//import logo from "../../assets/logo1.png";
import DatosPaciente from "../DatosPaciente";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AddEventModal = ({ 
  event, 
  openAdd, 
  handleClose, 
  professional,  
  handleReloadAppointments,
  handleSetNewAppointment
}) => {
  /* const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); */

  console.log("event en AddEventModal: ", event);
  //console.log("profesional en modal Add: ", professional);
  const [startDate, setStartDate] = useState(0);
  //console.log("startDate",startDate)
  
  const start = new Date(event.start);
  /* const startHours = start.getHours();
  const startMinutes = start.getMinutes().toString().padStart(2, "0"); */
  const end = new Date(event.end);
/*   const endHours = end.getHours();
  const endMinutes = end.getMinutes().toString().padStart(2, "0"); */

  /* const startToString = event.start.toISOString().substring(0,19) 
  const endToString = event.end.toISOString().substring(0,19) */
  const startToString = event.start.toISOString()
  const endToString = event.end.toISOString()

  useEffect(() => {
    if (event) {
      setStartDate(start.toISOString()/* .substring(0, 10) */);
    }
  }, []); 
  


 /*  console.log(
    "fecha formateada para POST: ",
    event.end.toISOString().substring(0, 19)
  );  */

  const addAppointment = (pFirstName, pLastName, diagnosis, patientState, prescription, dni) => {

    const appointmentData = {
      /* id: appAndPatinentId, */
      /* doctor_first_name: professional.first_name,
      doctor_last_name:professional.last_name, */
      start_datetime: startToString,
      end_datetime: endToString,
      diagnosis: diagnosis,
      id_doctor: professional.id,
      id_patient: dni,
      patient_first_name: pFirstName,
      patient_last_name: pLastName,
      prescription: prescription,
      state: patientState
    }
    /* setTimeout( ()=>{handleSetNewAppointment(appointmentData)
        console.log("setTimeout")
    }, 100) */
    handleSetNewAppointment(appointmentData)
    // fetch(`https://medicadminbackend-jeqz-dev.fl0.io/appointments/`,
    //   {
    //     method:"POST",
    //     headers: { 
    //       "content-type": "application/json",
    //       "accept": "application/json" 
    //     },
    //     body:JSON.stringify(appointmentData)
    //   }
    // )
    //   .then(res => {
    //     console.log("res.status", res.status)
    //     if (res.status === 201) {
    //       toast.success("Turno agendado")
    //     } else toast.error("Error, intente nuevamente")

    //   })
    //   .catch(err => console.log(err))
    //   /* .finally(window.location.reload()) */
    //   window.location.reload()
    const fetchPostData = async () => {
      try{
        const res = await fetch(`https://medicadminbackend-jeqz-dev.fl0.io/appointments/`,
          {
            method:"POST",
            headers: { 
              "content-type": "application/json",
              "accept": "application/json" 
            },
            body:JSON.stringify(appointmentData)
          }
        )
        if (res.status === 201) {
              toast.success("Turno agendado")
              } else toast.error("Error, intente nuevamente")
      } catch(err) {
        console.log(err)
      }
      window.location.reload()
    }
    fetchPostData()
  }

  /* const addAppointment = async (pFirstName, pLastName, diagnosis, patientState, prescription) => {
    const appAndPatinentId = Date.now().toString()
    const appointmentData = {
        id: appAndPatinentId,
        start_datetime: startToString,
        end_datetime: endToString,
        diagnosis: diagnosis,
        doctor_first_name: professional.first_name,
        doctor_last_name:professional.last_name,
        id_doctor: professional.id,
        id_patient: appAndPatinentId,
        patient_first_name: pFirstName,
        patient_last_name: pLastName,
        prescription: prescription,
        state: patientState
      }
      console.log("appointmentData: ", appointmentData)
    const request = await axios.post(
      URL,
      new URLSearchParams(appointmentData),
      {
        headers: { accept: "application/json" },
      }
    );
    const response = await request.data;
    return response;
  }; */

  return (
    <>
      <Modal
        backdrop={true}
        open={openAdd}
        onClose={handleClose}
        overflow={true}
        size={"md"}
        dialogClassName="p-0 rounded-none "
      >
        <div className="p-12 border-[2em] border-[#3E36B0] font-baloo2  BANDERA ">
          <DatosPaciente
            handleClose={handleClose}
            start={startDate}
            professional={professional}
            addAppointment={addAppointment}
          />
        </div>
      </Modal>
    </>
  );
};
export default AddEventModal;
