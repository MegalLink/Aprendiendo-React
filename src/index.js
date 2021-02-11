import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Usuario from './componentes/Usuario.js'
import Formulario from './componentes/Formulario'
import Contador from './componentes/Contador';
import Boton from './elementos/Boton'
import Blog from './componentes/Blog'
const APP=()=>{
  //Hook para autorenderizar 
  const [sesion,cambiarEstado]=useState(true) 
  return(
<div className="contenedor">
  {sesion?
    <div>
    <Usuario/> 
    <Blog></Blog>
    <Contador/>
    
    <Boton largo onClick={()=>cambiarEstado(false)}>Cerrar Sesion</Boton>
    </div>
    :
    <>
    <p>No has iniciado sesion</p>
    <Formulario cambiarEstado={cambiarEstado}/>

    
    </>
    }
</div>
  );
}




ReactDOM.render(
  <APP/>,
  document.getElementById('root')
);

