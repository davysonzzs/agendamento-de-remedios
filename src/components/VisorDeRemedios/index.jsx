import CardRemedio from "../CardRemedio";

export default function VisorDeRemedios({ remediosAgendados }) {
    console.log(remediosAgendados)
    return(
        <div>
            {remediosAgendados.map((item, index) => (
                <div key={index}>
                <CardRemedio nome={item.nome} quantidade={item.quatidade} tempoRestante={item.tempoRestante} />
                </div>
            ))}
        </div>
    )
}