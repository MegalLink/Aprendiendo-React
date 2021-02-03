import React from 'react'
const Titulo=({usuario='usuario',color='green'})=>{
    //console.log(props.usuario)
    const nombre=usuario
    const colors=color
    return (
        <h1 className="titulo" style={{color:colors}}>Hola nariz de bola :{nombre}!!!</h1>
    );
}

export {Titulo};