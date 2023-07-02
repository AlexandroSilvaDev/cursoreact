function SeuNome({setNome})
{
    return (
        <div>
            <h1>State Lift</h1>
            <p>Digite o seu nome:</p>
            <input 
                type="text" 
                placeholder="Qual é o seu nome?" 
                onChange={(e)=> setNome(e.target.value)}
            />
        </div>
    )
}

export default SeuNome