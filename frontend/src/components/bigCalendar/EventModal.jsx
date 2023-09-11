import { Modal, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import logo from "../../assets/logo1.png"
import { useEffect } from 'react';
const EventModal = ({event, open, handleClose, handleSetCount}) => {
  /* const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); */
  //console.log('event en EventModal: ',event )
  const start =new Date(event.start)
  const startHours = start.getHours()
  const startMinutes = start.getMinutes().toString().padStart(2, "0")
  const end =new Date(event.end)
  const endHours = end.getHours()
  const endMinutes = end.getMinutes().toString().padStart(2, "0")
  /* console.log("startMinutes: ", startMinutes) */
  //console.log("event.end: ", event.end.toISOString().substring(0,19))


  const handlePutAppointment = ()=> {
    fetch(`http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/appointments/${event.id}`,
    {
      method:"PUT",
      headers: { 
        'content-type': 'application/json',
        "Accept": "application/json" 
      },
      body:JSON.stringify({
        id: "dfd88414-a3e2-4fd2-8970-2500c3e7dc7e",
        start_datetime: "2023-09-09T12:00:00",
        end_datetime: "2023-09-09T12:30:00",
        diagnosis: "string",
        doctor_first_name: "Esteban",
        doctor_last_name: "Lugo",
        id_doctor: "88f907ff-7b24-4276-8326-ea7959d2838a",
        id_patient: "1d243d1f-cbc6-4009-9cba-1bae8854b9f6",
        patient_first_name: "Maria",
        patient_last_name: "Salas",
        prescription: "string",
        state: "reserved"
      })
    })
      .then(res => res.json())
      .then(data => console.log("data response: ",data))
      .catch(err => console.log(err))
  }
  /* useEffect(()=>{
    fetch(`http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/appointments/${event.id}`,
      {
        method:"PUT",
        headers: { 
          'content-type': 'application/json',
          "Accept": "application/json" 
        },
        body:JSON.stringify({
          id: "dfd88414-a3e2-4fd2-8970-2500c3e7dc7e",
          start_datetime: "2023-09-09T12:00:00",
          end_datetime: "2023-09-09T12:30:00",
          diagnosis: "string",
          doctor_first_name: "Esteban",
          doctor_last_name: "Lugo",
          id_doctor: "88f907ff-7b24-4276-8326-ea7959d2838a",
          id_patient: "1d243d1f-cbc6-4009-9cba-1bae8854b9f6",
          patient_first_name: "Maria",
          patient_last_name: "Salas",
          prescription: "string",
          state: "reserved"
        })
      })
        .then(res => res.json())
        .then(data => console.log("data response: ",data))
        .catch(err => console.log(err))
  },[]) */

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
  
  
  return (
    <>
      {/* <ButtonToolbar>
        <Button onClick={handleOpen}> Open</Button>
      </ButtonToolbar> */}
      <Modal 
        backdrop={true} 
        open={open} 
        onClose={handleClose} 
        overflow={true}
        size={'md'}
        dialogClassName='p-0 rounded-none '
        /* className='p-8 bg-blue-700 rounded-none' */
      >
        <div className='p-12 border-[2em] border-[#3E36B0] font-baloo2  BANDERA '>
        <Modal.Header>
          <div className="flex flex-row items-center  ">
            <div className="">
                <img src={logo} alt="" />
            </div>
            <h1 className='text-lg font-bold translate-y-1'>Sanatorio integral de salud</h1>
            </div>
            <div className="flex flex-row mt-10">
              <div className="w-full h-full">
                  <h2 className="text-left ml-6 text-2xl font-bold">Datos del paciente</h2>
                  <hr className="h-1 bg-[#712EFF] rounded-md"/>
              </div>
            </div>
        </Modal.Header>
        <Modal.Body className='mt-10'>
            <Modal.Title>{event.title}</Modal.Title>
          {/* <Placeholder.Paragraph /> */}
          <p>Dr: {event.doctor_last_name}, {event.doctor_first_name}</p>
          <p>Hora Inicio: {startHours}:{startMinutes} hs</p>
          <p>Hora Fin: {endHours}:{endMinutes} hs</p>
          <p>Paciente:{event.patient_last_name}, {event.patient_first_name}</p>
          {/* <p>{event.end}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handlePutAppointment} appearance="subtle">
            Modificar
          </Button>
          <Button className='text-lg outline outline-1 px-4 text-black'  onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button className="bg-[#DC4928] text-white text-lg">Aceptar</Button>
        </Modal.Footer>
        </div>
        <Button onClick={handleSetCount}>Count +1</Button>
      </Modal>
    </>
  );
};
export default EventModal