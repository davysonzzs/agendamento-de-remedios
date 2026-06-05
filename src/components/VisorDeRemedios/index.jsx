import CardRemedio from "../CardRemedio";

export default function VisorDeRemedios({ remediosAgendados }) {
    return(
        <div>
            {remediosAgendados.map((item, index) => (
                <div key={index}>
                <CardRemedio nome={item.nome} quantidade={item.quantidade} tempoRestante={item.tempoRestante} />
                </div>
            ))}
        </div>
    )
}