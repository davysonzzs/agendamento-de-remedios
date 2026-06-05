import { useState } from "react"

export default function AgendaRemedio({ enviar }) {
    const [ nome, setNome ] = useState("")
    const [ tempo, setTempo ] = useState("")
    const [ quatidade, setQuatidade ] = useState("")

    return(
        <>
        <label htmlFor="">Nome do Remedio</label>
        <input type="text" id="" />
        <label htmlFor="">De em quanto, quanto tempo</label>
        <input type="text" id="" />
        <label htmlFor="">Quantidade</label>
        <input type="text" id="" />
        <button>Agendar</button>
        </>
    )
}