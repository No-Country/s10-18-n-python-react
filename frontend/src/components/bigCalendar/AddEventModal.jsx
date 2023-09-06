import { Modal, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import logo from "../../assets/logo1.png"
import DatosPaciente from '../DatosPaciente';

const AddEventModal = ({event, openAdd, handleClose}) => {
  /* const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); */

  //console.log('event en EventModal: ',event )

  if (event) {
   const start =new Date(event.start)
   const startHours = start.getHours()
   const startMinutes = start.getMinutes().toString().padStart(2, "0")
   const end =new Date(event.end)
   const endHours = end.getHours()
   const endMinutes = end.getMinutes().toString().padStart(2, "0")
  }
  /* console.log("startMinutes: ", startMinutes) */
  return (
    <>
      {/* <ButtonToolbar>
        <Button onClick={handleOpen}> Open</Button>
      </ButtonToolbar> */}
      <Modal 
        backdrop={true} 
        open={openAdd} 
        onClose={handleClose} 
        overflow={true}
        size={'md'}
        dialogClassName='p-0 rounded-none '
        /* className='p-8 bg-blue-700 rounded-none' */
      >
        <div className='p-12 border-[2em] border-[#3E36B0] font-baloo2  BANDERA '>
        <DatosPaciente />
        </div>
      </Modal>
    </>
  );
};
export default AddEventModal