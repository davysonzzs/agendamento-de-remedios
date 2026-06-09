import CardRemedio from "../CardRemedio";
import "./style.css"

export default function VisorDeRemedios({ remediosAgendados }) {
    console.log(remediosAgendados)
    return(
        <div className="visorRemedios">
            {remediosAgendados.map((item, index) => (
                <div className="remedio" key={index}>
                <CardRemedio nome={item.nome} quantidade={item.quatidade} tempoRestante={item.tempoRestante} />
                </div>
            ))}
        </div>
    )
}