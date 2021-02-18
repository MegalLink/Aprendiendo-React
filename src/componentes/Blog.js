import styled from "styled-components";
import useObtenerArticulos from "../hooks/useObtenerArticulos";
import {NavLink} from 'react-router-dom'
const Blog = () => {
  const [articulos, isLoading] = useObtenerArticulos();
  console.log(articulos);
  return (
    <ContenedorBlog>
      <Titulo>Blog</Titulo>
      {isLoading ? (
        <>
          <p id="cargando">Cargando....</p>
        </>
      ) : (
        <Lista id="articulos">
          {articulos.map((el) => {
            return (
            
            <NavLink to ={`/post/${el.id}`} key={el.id}>{el.titulo}</NavLink>
            
            );
          })}
        </Lista>
      )}
    </ContenedorBlog>
  );
};

const ContenedorBlog = styled.div`
  margin: 40px 0 20px 0;
`;
const Titulo = styled.h2`
  margin-bottom: 10px;
`;

const Lista= styled.div`
display:flex;
flex-direction:column;
`;

export default Blog;
