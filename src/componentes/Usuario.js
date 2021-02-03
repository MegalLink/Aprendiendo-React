
import React from 'react'
import {Titulo} from './Titulo';
import styled from 'styled-components'
const Usuario=()=>{
const pais='Ecuador';
const amigos=['Jair','Henry','Eve']

    return(
      <div>
        <Parrafo>Tu lista de amigos es:</Parrafo>
       <Titulo usuario="Jeferson" color="red"/>
       <Titulo usuario="Alexander" color="blue"/>
       <Titulo/>
      {pais && <Parrafo>Eres de:{pais}</Parrafo>}
      <ul>
        {amigos.map((amigo,index)=>
           <li key={index}>{amigo}</li>
        )}
      </ul>
      <div>Saludos</div>
      </div>
    ); 
  };

  const Parrafo=styled.p`
  margin-bottom:20px;
  
  background-color:blue;
  `;
  export default Usuario;