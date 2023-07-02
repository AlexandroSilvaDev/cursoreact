import Button from "./evento/Button"

function Evento({numero})
{
    function meuEvento()
    {
        console.log(`Opa, fui ativado! ${numero}`)
    }

    function meuEvento2()
    {
        console.log(`Ativando o primeiro evento!`)
    }

    function segundoEvento()
    {
        console.log(`Ativando o segundo evento!`)
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
            <Button event={meuEvento2} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento