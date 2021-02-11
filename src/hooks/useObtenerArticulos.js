import React, { useState,useEffect} from 'react'

const useObtenerArticulos=()=>{
    const [isLoading,establecerCargado]=useState(true);
    const [articulos,establecerArticulos]=useState([]);
    useEffect(()=>{
        
        setTimeout(()=>{
         establecerArticulos([
             {
                id:1,
                titulo:"Titulo articulo 1"
             },
             {
                id:2,
                titulo:"Titulo articulo 2"
             },
             {
                id:3,
                titulo:"Titulo articulo 3"
             },
         ])  
         establecerCargado(false); 
        },3000)
      
     
    },[])

    return [articulos,isLoading];
}
export default useObtenerArticulos;