import React from "react";

const PeticionApi = () => {
  const [personajes, setPersonajes] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(1);

  const obtenerPersonajes = async () => {
    try {
        const res = await fetch(`http://api.disneyapi.dev/character?page=1&pageSize=50`)
        const {data} = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <button onClick={obtenerPersonajes}>Obtener personajes</button>
  );
}

export default PeticionApi;
