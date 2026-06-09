import { useState, useEffect } from "react"
import AgendaRemedio from "./components/AgendaRemedio"
import VisorDeRemedios from "./components/VisorDeRemedios"
import Remedio from "./assets/remedio.png"
import "./styles/app.css"

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
    <div className="container">
      <div className="remedios">
        <h2> Ajudamos na sua rotina de medicações </h2>
        <div className="remediosPainel">
        <div className="nomeLogo">
          <img src={Remedio}/>
          <h1>FarmaCon</h1>
        </div>
          <AgendaRemedio enviar={setRemedios} />
        </div>
      </div>
        <div className="listaRemedios">
          <h2>Lista de Remedios</h2>
          <VisorDeRemedios remediosAgendados={remedios} deletar={deletar}/>
        </div>
    </div>
  )
}