import { useState, useEffect } from "react"

export default function CardRemedio({ nome, quantidade, tempoRestante, deletar, index }) {
    const [ tempo, setTempo ] = useState(tempoRestante)
    const [ pause, setAtivo ] = useState(false)
    const dispararNotificacao = () => {
        if (!("Notification" in window)) {
        alert("Este navegador não suporta notificações.")
        return
        }

        if (Notification.permission === "granted") {
        new Notification("Ta na hora", { body: "tome o remedio " + nome })
        } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
            new Notification("Permissão Concedida!", { body: "Obrigado!" })
            }
        })
        }
  }
    

    useEffect(() =>{
        let intevalo = null

        if(pause && tempo > 0){
            intevalo = setInterval(() => {
                setTempo((tempoAtual) => {
                    if(tempoAtual <= 1000){
                        setAtivo(false)
                        dispararNotificacao()
                        let res = prompt("Você tomou? 'digite S'").toLowerCase()
                        if(res == "s"){
                            setTempo(tempoRestante)
                        }
                        return 0
                    }
                    return tempoAtual - 1000
                })
            }, 1000)
        }

        return () => clearInterval(intevalo)
    }, [pause, tempo])

    const formataTempo = (ms) => {
        const totalsegundo = Math.floor(ms / 1000)

        const horas = Math.floor(totalsegundo / 3600)
        const minutos = Math.floor((totalsegundo % 3600) / 60)
        const segundos = totalsegundo % 60

        return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
    }
    return(
        <div>
            <h1>{nome}</h1>
            <p><span>{quantidade}</span></p>
            <p><span>{formataTempo(tempo)}</span></p>
            <button onClick={() => setAtivo(!pause)}>{pause ? "pausar" : "iniciar"}</button>
            <button onClick={() => deletar(index)}>Excluir</button>
        </div>
    )
}