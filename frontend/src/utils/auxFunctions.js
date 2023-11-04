import moment from "moment"

const toArgHour = (a) =>{
  let str1 = a.substring(0,11)
  let str2 = a.substring(11,13)
  let str3 = a.substring(13,19)
  let num = Number(str2)
  let argH = (num-3).toString().padStart(2, "0")
  return `${str1}${argH}${str3}`
}

const dateFormater =(data) => {
  return data.map(item=>(
  { 
    diagnosis:item.diagnosis,
    doctor_first_name: item.doctor_first_name,
    doctor_last_name: item.doctor_last_name,
    start: moment(toArgHour(item.start_datetime)).toDate(),
    end: moment(toArgHour(item.end_datetime)).toDate(),
    id: item.id,
    id_doctor: item.id_doctor,
    id_patient: item.id_patient,
    patient_first_name: item.patient_first_name,
    patient_last_name: item.patient_last_name,
    prescription: item.prescription,
    state: item.state
  })) 
}

const specialtiesMaker = async (drs) => {
  try {
    const specialties = drs.map(item => item.specialty)
    const specialtiesWithoutDuplicates = specialties.filter((el, index)=>{
    return specialties.indexOf(el) === index;
    });
    const specialtiesFormated = specialtiesWithoutDuplicates.map(item=> ({label:item, value:item}))
    return specialtiesFormated
  } catch(err) {console.log(err.message)}
}


export {toArgHour,  dateFormater, specialtiesMaker}