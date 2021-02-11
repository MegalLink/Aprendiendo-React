
import styled from 'styled-components'
import useObtenerArticulos from '../hooks/useObtenerArticulos'
const Blog=()=>{

    const [articulos,isLoading]=useObtenerArticulos();
   console.log(articulos)
    return(
        <ContenedorBlog>
            <Titulo>Blog</Titulo>
            {isLoading?
            <>
           <p id="cargando">Cargando....</p>
            </>
            :
            <div id="articulos"> 
                {
                articulos.map((el)=>{
                    return <Articulo key={el.id}>{el.titulo}</Articulo>
                })
            }</div>

            }

           
           
            
        </ContenedorBlog>
    )
}

const ContenedorBlog=styled.div`
margin:40px 0 20px 0;
`
const Titulo=styled.h2`
margin-bottom:10px
`
const Articulo=styled.p`
padding:10px 0;
margin-bottom:10px;
border-bottom:1px solid #ccc;
`


export default Blog;