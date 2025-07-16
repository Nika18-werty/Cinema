import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Рейтинг: {movie.rating}</p>
      <p>{movie.description}</p>
      <Link to={`/movie/${movie.id}`}>
        <button>Детальніше</button>
      </Link>
    </div>
  );
}

export default MovieCard;
