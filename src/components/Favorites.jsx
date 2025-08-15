import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return (
      <div>
        <h1>Обраних фільмів поки немає</h1>
        <Link to="/">Назад до головної</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Обране</h1>
      <div className="movie-grid">
        {favorites.map(movie => (
          <div className="movie-card" key={movie.id}>
            <img
              src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://via.placeholder.com/150'}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>Рейтинг: {movie.vote_average.toFixed(1)}</p>
            <Link to={`/movie/${movie.id}`}>
              <button>Детальніше</button>
            </Link>
          </div>
        ))}
      </div>
      <br />
      <Link to="/">Назад до головної</Link>
    </div>
  );
}

export default Favorites;
