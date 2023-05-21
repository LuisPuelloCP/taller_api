import React from "react";

const PeticionApi = () => {
  const [personajes, setPersonajes] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(1);

  const obtenerPersonajes = async () => {
    try {
        const res = await fetch(`http://api.disneyapi.dev/character?page=${paginacion}&pageSize=50`)
        const {data} = await res.json()
        setPersonajes(data)
    } catch (error) {
        console.log(error);
    }
  }
  
  const siguiente = () => {
    setPaginacion(paginacion + 1)
    obtenerPersonajes()
  }

  const atras = () => {
    if (paginacion === 1) {
        return
    }
    setPaginacion(paginacion - 1)
    obtenerPersonajes()
  }


  return (
    <div >
      <h1 >Personajes de Disney</h1>
      <hr />
      <div>
        <button onClick={atras}>Atras</button>
        <button  onClick={obtenerPersonajes}>Obtener personajes</button>
        <button onClick={siguiente}> Siguiente</button>
      </div>
      
      
      {
        personajes.map(({_id,name,imageUrl}) => (
            <div key={_id}>
                <div >
                  <img src= {imageUrl} alt={name} />
                  <h4>{_id} - {name}</h4>
                </div> 
            </div>
        ))
      }
    </div>
  );
}

export default PeticionApi;
