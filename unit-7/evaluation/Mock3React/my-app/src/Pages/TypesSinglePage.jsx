import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TypesSinglePage = () => {
  const  typeName  = useParams();
  const [typeData, setTypeData] = useState({});
  console.log(typeName.id)
  console.log(typeData)

const getData=()=>{
    axios.get(`https://pokeapi.co/api/v2/type/${typeName.id}`)
    .then((res)=>setTypeData(res.data))
}

  useEffect(() => {
  getData()
  }, []);


  return (
    <div >
     <h3>{typeName.id}</h3>
        <h4>ID: {typeData.id}</h4>
        <h4>Generation: {typeData.generation.name}</h4>
        <h4>Moves: {typeData.moves.length}</h4>
        <h4>Names: {typeData.name.length}</h4>
     
    </div>
  );
};

export default TypesSinglePage;
