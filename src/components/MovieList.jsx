import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = '74ca29358c2c9e385c1d8f151c3b8b23';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=uk-UA&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
  <div className="movie-grid">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
}

export default MovieList;
