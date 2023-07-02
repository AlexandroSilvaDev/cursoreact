import React from 'react'

function Pessoa({nome, idade, profissao, foto})
{
    return (
        <div>
            <img src={foto} alt={nome} />
            <h1>Nome: {nome}</h1>
            <h2>Idade: {idade}</h2>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa