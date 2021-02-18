import React from "react";

import { Redirect, useParams } from "react-router-dom";
const posts = [
  {
    id: 1,
    titulo: "Titulo articulo 1",
    contenido: "Contenido de esta madre",
  },
  {
    id: 2,
    titulo: "Titulo articulo 2",
    contenido: "Contenido de esta madre",
  },
  {
    id: 3,
    titulo: "Titulo articulo 3",
    contenido: "Contenido de esta madre",
  },
];
const Post = () => {
  const { id } = useParams();

  return (
    <>
      {posts[id - 1] ? (
        <div>
          <h3>Soy el post con id: {id}</h3>
          <h4>{posts[id - 1].titulo}</h4>
          <p>{posts[id - 1].contenido}</p>
        </div>
      ) : (
        <div>
            
            <Redirect to="/blog"></Redirect>
        </div>
       
      )}
    </>
  );
};
export default Post;
