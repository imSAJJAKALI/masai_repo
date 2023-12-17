import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (pokemonId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== pokemonId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Favorite Pokémon List</h2>
      {favorites.length === 0 ? (
        <p>No favorite Pokémon added yet.</p>
      ) : (
        <ul>
          {favorites.map((pokemon) => (
            <li key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
              <button onClick={() => removeFromFavorites(pokemon.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourite;
