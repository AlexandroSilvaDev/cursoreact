import { Link } from "react-router-dom"
import React from 'react'

function NavBar()
{
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Empresa">Empresa</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
            </ul>
        </div>
    )
}

export default NavBar