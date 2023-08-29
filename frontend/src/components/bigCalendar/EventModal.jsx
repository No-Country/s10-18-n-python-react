import { Modal, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
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
      >
        <Modal.Header>
          <Modal.Title>{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Placeholder.Paragraph /> */}
          <p>Dr: {event.dr}</p>
          <p>Hora Inicio: {startHours}:{startMinutes} hs</p>
          <p>Hora Fin: {endHours}:{endMinutes} hs</p>
          <p>Paciente:{event.paciente}</p>
          {/* <p>{event.end}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EventModal