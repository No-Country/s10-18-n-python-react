import { Button, Modal} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import DatosPaciente from "../DatosPaciente";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AddEventModal = ({ 
  event, 
  openAdd, 
  handleClose, 
  professional,  
  getAppointmentes

}) => {

  const [startDate, setStartDate] = useState(0);
  const start = new Date(event.start);
  const end = new Date(event.end);
  const startToString = event.start.toISOString()
  const endToString = event.end.toISOString()

  useEffect(() => {
    if (event) {
      setStartDate(start.toISOString());
    }
  }, []); 


  const addAppointment = (pFirstName, pLastName, diagnosis, patientState, prescription, dni) => {

    const appointmentData = {
      doctor_first_name: professional.first_name,
      doctor_last_name: professional.last_name,
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

    const fetchPostData = async () => {
      try{
        const res = await fetch(`${import.meta.env.VITE_APPOINTMENTS}`,
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
              await getAppointmentes()
              } else toast.error("Error, intente nuevamente")
      } catch(err) {
        console.log(err)
      }
    }
    fetchPostData()
    /* getAppointmentes() */
  }

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
            /* handleCount={handleCount} */
          />
        </div>
      </Modal>
    </>
  );
};
export default AddEventModal;
