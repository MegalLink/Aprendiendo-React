import React, { useState } from 'react'
import styles from './Contador.module.css'
const Contador=()=>{
const [contador,cambioContador]=useState(0);

    return (
        <div>
            <h1>Contador:{contador}</h1>
            <button className={styles.boton} onClick={()=>cambioContador(contador+1)}>Incrementar</button>
            <button className={styles.boton} onClick={()=>cambioContador(contador-1)}>Decrementar</button>
        </div>

        
    );
}
export default Contador;