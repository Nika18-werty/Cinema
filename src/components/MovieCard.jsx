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
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Рейтинг: {movie.vote_average?.toFixed(1)}</p>
      <p>{movie.overview}</p>

      <div className="button-group">
        <button
          className={`favorite-btn ${isFavorite ? 'remove' : 'add'}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? '💔 Видалити з обраного' : '❤️ Додати до обраного'}
        </button>

        <Link to={`/movie/${movie.id}`}>
          <button className="details-btn">Детальніше</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;

