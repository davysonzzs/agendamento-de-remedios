import CardRemedio from "../CardRemedio";

export default function VisorDeRemedios({ remediosAgendados, deletar }) {
    return(
        <div>
            {remediosAgendados.map((item, index) => (
                <div key={index}>
                <CardRemedio nome={item.nome} quantidade={item.quatidade} tempoRestante={item.tempoRestante} index={index} deletar={deletar}/>
                </div>
            ))}
        </div>
    )
}