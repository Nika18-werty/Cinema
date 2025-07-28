import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/150';

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Рейтинг: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? '💔 Видалити з обраного' : '❤️ Додати до обраного'}
      </button>
      <br />
      <Link to={`/movie/${movie.id}`}>
        <button>Детальніше</button>
      </Link>
    </div>
  );
}

export default MovieCard;

