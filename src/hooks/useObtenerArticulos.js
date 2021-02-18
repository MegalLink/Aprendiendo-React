import React, { useState,useEffect} from 'react'

const useObtenerArticulos=()=>{
    const [isLoading,establecerCargado]=useState(true);
    const [articulos,establecerArticulos]=useState([]);
    useEffect(()=>{
        
        setTimeout(()=>{
         establecerArticulos([
             {
                id:1,
                titulo:"Titulo articulo 1",
                contenido:"Contenido de esta madre"
             },
             {
                id:2,
                titulo:"Titulo articulo 2",
                contenido:"Contenido de esta madre"
             },
             {
                id:3,
                titulo:"Titulo articulo 3",
                contenido:"Contenido de esta madre"
             },
         ])  
         establecerCargado(false); 
        },3000)
      
     
    },[])

    return [articulos,isLoading];
}
export default useObtenerArticulos;