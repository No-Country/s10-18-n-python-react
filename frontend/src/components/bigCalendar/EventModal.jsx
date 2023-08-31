import { Modal, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import logo from "../../assets/logo1.png"
const EventModal = ({event, open, handleClose}) => {
  /* const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); */
  console.log('event en EventModal: ',event )
  const start =new Date(event.start)
  const startHours = start.getHours()
  const startMinutes = start.getMinutes().toString().padStart(2, "0")
  const end =new Date(event.end)
  const endHours = end.getHours()
  const endMinutes = end.getMinutes().toString().padStart(2, "0")
  /* console.log("startMinutes: ", startMinutes) */
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
          <p>Dr: {event.dr}</p>
          <p>Hora Inicio: {startHours}:{startMinutes} hs</p>
          <p>Hora Fin: {endHours}:{endMinutes} hs</p>
          <p>Paciente:{event.paciente}</p>
          {/* <p>{event.end}</p> */}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleClose} appearance="subtle">
            Aceptar
          </Button> */}
          <Button className='text-lg outline outline-1 px-4 text-black'  onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button className="bg-[#DC4928] text-white text-lg">Aceptar</Button>
        </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};
export default EventModal