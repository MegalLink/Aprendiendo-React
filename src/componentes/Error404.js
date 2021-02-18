import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404=()=>{
    return (
        <div>
            <h1>Oppps no se encontro la página</h1>
            <NavLink to="/inicio" >Ir a inicio </NavLink>
            
        </div>
    )
}
export default Error404;