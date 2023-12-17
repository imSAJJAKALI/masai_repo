import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonPage = () => {
  const [data, setData] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const { id } = useParams();

  const getData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => {
      const newFavoriteState = !prevFavorite;

      // Update localStorage with the new favorite state
      if (newFavoriteState) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('favorites', JSON.stringify([...favorites, data]));
      } else {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedFavorites = favorites.filter((fav) => fav.id !== data.id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }

      return newFavoriteState;
    });
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isCurrentlyFavorite = favorites.some((fav) => fav.id === data.id);
    setIsFavorite(isCurrentlyFavorite);
  }, [data]);

  return (
    <div>
      <div>
        <h3>{id}</h3>
        <button onClick={toggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <h4>ID: {data.id}</h4>
        <h4>Base Experience: {data.base_experience}</h4>
        {/* Render other Pokemon details */}
        <h4>Weight: {data.weight}</h4>
        <h4>Height: {data.height}</h4>
      </div>
    </div>
  );
};

export default PokemonPage;
