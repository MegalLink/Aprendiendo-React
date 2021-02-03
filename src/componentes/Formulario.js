import styles from'./Formulario.module.css';
import React, { useState } from "react";
import Boton from '../elementos/Boton';
const Formulario = (props) => {
  const [usuario, cambiarUsuario] = useState("");
  const [password, cambiarPassword] = useState("");
//   const onChangeUsuario=(e)=>{
//     cambiarUsuario(e.target.value)
//   }
//   const onChangePassword=(e)=>{
//       cambiarPassword(e.target.value)
//   }

  const onChangeInputs=(e)=>{
      if(e.target.name==="usuario"){
        cambiarUsuario(e.target.value)
      }else if(e.target.name==="password"){
        cambiarPassword(e.target.value)
      }
  }
  const onSubmit=(e)=>{
      e.preventDefault();
      if(usuario==='Jeff'&& password==='123'){
        alert('Datos correctos')
        props.cambiarEstado(true)
      }else{
        alert('Datos incorrectos')
        props.cambiarEstado(false)
      }
  }
  return (
    <div>
      <form onSubmit={onSubmit} className={styles.formulario}>
        <p>Usuario:{usuario}</p>
        <p>Contraseña:{password}</p>
        <div>
          <label htmlFor="usuario" className={styles.label}>Usuario</label>
          <input className={styles.input}
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={onChangeInputs}
          />
        </div>
        <div>
          <label htmlFor="Password" className={styles.label}>Password</label>
          <input className={styles.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangeInputs}
          />
        </div>
        <Boton  type="submit" >Iniciar Sesion</Boton>
      </form>
    </div>
  );
};
export default Formulario;
