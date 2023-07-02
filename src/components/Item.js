import PropTypes from 'prop-types'
import React from 'react'
function Item({marca, ano_lancamento})
{
    return(
        <div>
        <ul>
            <li>{marca} - {ano_lancamento}</li>
        </ul>
            <p>Teste</p>
        </div>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0
}

export default Item