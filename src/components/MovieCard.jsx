import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/150';

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Рейтинг: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <Link to={`/movie/${movie.id}`}>
        <button>Детальніше</button>
      </Link>
    </div>
  );
}

export default MovieCard;
