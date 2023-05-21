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
  


  return (
    <div >
      <h1 >Personajes de Disney</h1>
      <hr />
      <div>
        <button  onClick={obtenerPersonajes}>Obtener personajes</button>
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
