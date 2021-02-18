import React, { useState } from "react";
import Usuario from "../componentes/Usuario";
import Formulario from "../componentes/Formulario";
import Contador from "../componentes/Contador";
import Boton from "../elementos/Boton";
import Blog from "../componentes/Blog";
import styled,{css} from 'styled-components'
import { BrowserRouter, Route,NavLink } from "react-router-dom";
const App = () => {
  const [sesion, cambiarEstado] = useState(true);

  return (
    <BrowserRouter>
      <div className="contenedor">
        {sesion ? (
          <div>
              <h1>Mi blog personal</h1>
              <Navbar>
                <NavLink to="/inicio">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contador">Contador</NavLink>
              </Navbar>
            <Route path="/inicio" exact={true}>
              

              <Usuario />
            </Route>
            <Route path="/blog" exact={true}>
              <Blog></Blog>
            </Route>
            <Route path="/contador" exact={true} component={Contador}/>
              

            <Boton largo onClick={() => cambiarEstado(false)}>
              Cerrar Sesion
            </Boton>
          </div>
        ) : (
          <>
            <p>No has iniciado sesion</p>
            <Formulario cambiarEstado={cambiarEstado} />
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

const Navbar=styled.nav`
display:flex;
justify-content:space-around;
margin: 10px 10px;
a{
    text-decoration:none;
    color:red;
    
}
a:hover{
    color:blue;
}
a.active::after{
      
      content: '';
      display: block;
      height: 2px;
        background-color:blue;
}

`
export default App;
