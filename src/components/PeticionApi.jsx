import React from "react";

const PeticionApi = () => {
  const [personajes, setPersonajes] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(1);

  const obtenerPersonajes = async () => {
    try {
        const res = await fetch(`https://api.disneyapi.dev/character?page=${paginacion}&pageSize=50`)
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
    <div className="container text-center" >
      <h1 className="text-center" >Personajes de Disney</h1>
      <hr />
      <div className="container-sm mb-3">
        <button className="btn btn-secondary mx-2" onClick={atras}>Atras</button>
        <button className="btn btn-success mx-2" onClick={obtenerPersonajes}>Obtener personajes</button>
        <button className="btn btn-primary mx-2" onClick={siguiente}> Siguiente</button>
      </div>
      
      
      {
        personajes.map(({_id,name,imageUrl}) => (
            <div className="mb-3" key={_id}>
                <div className="d-flex aligns-items-center justify-content-center card text-center mx-auto mb3" style={{width:"18rem"}}>
                  <img className="card-img-top" src= {imageUrl} alt={name} />
                  <h4 class="card-text">{_id} - {name}</h4>
                </div> 
            </div>
        ))
      }
    </div>
  );
}

export default PeticionApi;
