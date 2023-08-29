const CustomEvent = ({event}) => {
  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <div>{event.paciente}</div>
    </div>
  )
}

export default CustomEvent