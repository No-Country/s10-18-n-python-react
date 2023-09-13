const CustomEvent = ({event}) => {
  //console.log("event en CustomEvent: ", event)
  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%"}}>
      <div>{event.patient_last_name}, {event.patient_first_name}</div>
    </div>
  )
}

export default CustomEvent