import { useState } from "react"
import "./style.css"

export default function AgendaRemedio({ enviar }) {
    const [ nome, setNome ] = useState("")
    const [ tempo, setTempo ] = useState("")
    const [ quatidade, setQuatidade ] = useState("")

    function coverterTempo(){
        let tempoSplit = tempo.split("")
        let grandezaTempo 
        let medidaConversão
        tempoSplit.forEach((e) =>{
            if(e == "H" || e == "h"){
                grandezaTempo = "h"
                medidaConversão = 3600000
                return
            } else if(e == "M" || e == "m"){
                grandezaTempo = "m"
                medidaConversão = 60000
                return
            } else if(e == "S" || e == "s"){
                grandezaTempo = "s"
                medidaConversão = 1000
                return
            }
        })
        let numeroParaConverter = tempoSplit.filter(letra => letra >= "0" && letra <= "9").join("")
        let tempoEmMs = numeroParaConverter * medidaConversão
        return tempoEmMs
    }
    
    function Agendar(){
        if(nome == "" ||  quatidade == "" || tempo == ""){
            alert("insira algo")
            return
        }
        console.log(coverterTempo())
        const novoAgendamento = {
            nome: nome,
            quatidade: quatidade,
            tempoRestante: coverterTempo()
        }
        enviar(itensAnteriores => [...itensAnteriores, novoAgendamento])
        setNome("")
        setQuatidade("")
        setTempo("")
    }

    return(
        <>
        <div className="remedioInfo">
            <label>Nome do Remedio</label>
            <input type="text" id="" value={nome} onChange={e => setNome(e.target.value)}/>
            <label>intervalo de doses</label>
            <input type="text" id="" value={tempo} onChange={e => setTempo(e.target.value)}/>
            <label>Quantidade</label>
            <input type="text" id="" value={quatidade} onChange={e => setQuatidade(e.target.value)}/>
            <button onClick={Agendar}>Agendar</button>
        </div>
        </>
    )
}