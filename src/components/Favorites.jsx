import React, { useContext } from 'react';
import FavoritesContext from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <div>Обраних фільмів поки немає</div>;
  }

  return (
    <div>
      <h1>Обране</h1>
      {favorites.map(movie => (
        <div key={movie.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <Link to={`/movie/${movie.id}`}>Детальніше</Link>
        </div>
      ))}
      <br />
      <Link to="/">Назад до головної</Link>
    </div>
  );
}

export default Favorites;
