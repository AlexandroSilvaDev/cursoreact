import Item from "./Item"
import React from 'react'

function List()
{
    return (
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1997}/>
                <Item marca="Renault" ano_lancamento={2005} />
                <Item />
            </ul>
        </div>
    )
}

export default List