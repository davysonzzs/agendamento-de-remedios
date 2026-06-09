import CardRemedio from "../CardRemedio";
import "./style.css"

export default function VisorDeRemedios({ remediosAgendados, deletar }) {
    return(
        <div className="visorRemedios">
            {remediosAgendados.map((item, index) => (
                <div className="remedio" key={index}>
                <CardRemedio nome={item.nome} quantidade={item.quatidade} tempoRestante={item.tempoRestante} index={index} deletar={deletar}/>
                </div>
            ))}
        </div>
    )
}