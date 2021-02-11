import React, { useState,useEffect,useReducer } from 'react'
import Boton from '../elementos/Boton';
// import styles from './Contador.module.css'
const Contador=()=>{
const [contador,cambioContador]=useState(0);
useEffect(()=>{console.log("OnChange")})
const hacerCero=()=>cambioContador(0)

const estadoInicial={multiplicar:1}
const reducer=(estado,accion)=>{
    switch(accion.tipo){
        case 'DOBLE': return {multiplicar:estado.multiplicar*2}
        case 'TRIPLE': return {multiplicar:estado.multiplicar*3}
        default: console.log("Ninguna opcion")
    }
}

const [estado,dispatch]=useReducer(reducer,estadoInicial);
console.log("Estado",estado)
useEffect(()=>{console.log("OnInit")},[])
useEffect(()=>{console.log("OnChange Contador")},[contador])
useEffect(()=>{ 
    //Llamar Api
    
    
    return (()=>{
        //cerar sesion Api
        console.log("OnDelete Ele")})},[])

    return (
        <div>
            <h1>Contador:{contador}  - {estado.multiplicar}</h1>
            <Boton m_5 tema_negro  onClick={()=>cambioContador(contador+1)}>Incrementar </Boton>
            <Boton m_5 tema_negro onClick={()=>cambioContador(contador-1)}>Decrementar</Boton>
            <Boton m_5 onClick={()=>hacerCero()}>Volver a 0</Boton>
            <Boton m_5 onClick={()=>dispatch({tipo:'DOBLE'})}>Doble</Boton>
            <Boton m_5 onClick={()=>dispatch({tipo:'TRIPLE'})}>Triple</Boton>

        </div>

        
    );
}
export default Contador;