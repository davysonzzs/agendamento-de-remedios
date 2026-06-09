import { useState, useEffect } from "react"
import AgendaRemedio from "./components/AgendaRemedio"
import VisorDeRemedios from "./components/VisorDeRemedios"

export default function App() {
  const [ remedios, setRemedios ] = useState([])
  function deletar(id){
    const novosRemedios = remedios.filter((_, index) => index !== id)
    setRemedios(novosRemedios)
  }

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission()
    }
  }, [])
  
  return(
    <div>
      <h1> Agendamento de Remedios</h1>
      <h2> Ajudamos na sua rotina de medicações </h2>
      <div>
        <AgendaRemedio enviar={setRemedios}/>
      </div>
      <div>
        <VisorDeRemedios remediosAgendados={remedios} deletar={deletar}/>
      </div>
    </div>
  )
}