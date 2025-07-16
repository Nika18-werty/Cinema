import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  {
    id: 1,
    title: 'Дюна: Частина Друга',
    rating: 8.5,
    description: 'Продовження епічної саги.',
    poster: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Безсмертні',
    rating: 7.2,
    description: 'Новий фантастичний бойовик.',
    poster: 'https://via.placeholder.com/150'
  }
];

function MovieList() {
  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
