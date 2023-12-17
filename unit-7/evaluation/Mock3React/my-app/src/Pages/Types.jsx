import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Types = () => {
  const [types, setTypes] = useState([]);
console.log(types)
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type')
      .then((response) => {
        setTypes(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const containerStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const headerStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const linkStyle = {
    display: 'inline-block',
    margin: '5px',
    padding: '8px 15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#333',
    backgroundColor: '#f9f9f9',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#e0e0e0',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Pokémon Types</h2>
      <div style={listStyle}>
        {types.map((type) => (
          <Link
            to={`/types/${type.name}`}
            key={type.name}
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
          >
            {type.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Types;
