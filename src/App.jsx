import { useState } from "react"
import AgendaRemedio from "./components/AgendaRemedio"
import VisorDeRemedios from "./components/VisorDeRemedios"

export default function App() {
  const [ remedios, setRemedios ] = useState([])

  return(
    <div>
      <h1> Agendamento de Remedios</h1>
      <h2> Ajudamos na sua rotina de medicações </h2>
      <div>
        <AgendaRemedio enviar={setRemedios}/>
      </div>
      <div>
        <VisorDeRemedios remediosAgendados={remedios}/>
      </div>
    </div>
  )
}