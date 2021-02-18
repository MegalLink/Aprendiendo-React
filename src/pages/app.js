import React, { useState } from "react";
import Usuario from "../componentes/Usuario";
import Formulario from "../componentes/Formulario";
import Contador from "../componentes/Contador";
import Boton from "../elementos/Boton";
import Blog from "../componentes/Blog";
import { BrowserRouter, Route,Link } from "react-router-dom";
const App = () => {
  const [sesion, cambiarEstado] = useState(true);

  return (
    <BrowserRouter>
      <div className="contenedor">
        {sesion ? (
          <div>
              <h1>Mi blog personal</h1>
              <nav>
                <Link to="/">Inicio</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contador">Contador</Link>
              </nav>
            <Route path="/" exact={true}>
              

              <Usuario />
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contador">
              <Contador />
            </Route>

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

export default App;
