export default function CardRemedio({ nome, quantidade, tempoRestante }) {
    return(
        <div>
            <h1>{nome}</h1>
            <p><span>{quantidade}</span></p>
            <p><span>{tempoRestante}</span></p>
        </div>
    )
}