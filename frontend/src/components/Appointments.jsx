import BigCalendar from "./bigCalendar/BigCalendar"
import { SelectPicker } from 'rsuite';

const especialidad = ['Obstetricia', 'Pediatría', 'Oftalmología'].map(
  item => ({ label: item, value: item })
);

const profesional = ['Wick, John', 'Cena, John', 'mircha, jon'].map(
  item => ({ label: item, value: item })
);

const Appointments = () => {
  return (
    <>
      <div className="w-full flex justify-center gap-8">
        <SelectPicker data={profesional} style={{ width: 224 }} placeholder="Profesional"/>
        <SelectPicker data={especialidad} style={{ width: 224 }} placeholder="Especialidad" menuStyle={{borderColor:"red", border:"1px"}}/>
      </div>
      <BigCalendar />
    </>
  )
}

export default Appointments