import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const API_KEY = '74ca29358c2c9e385c1d8f151c3b8b23';

function MovieList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=uk-UA&page=1`);
  }, []);

  const handleSearch = ({ query, year, rating }) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=uk-UA&query=${query}`;

    if (year) url += `&primary_release_year=${year}`;
    if (rating) url += `&vote_average.gte=${rating}`; 

    fetchMovies(url);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>Фільмів не знайдено</p>
        ) : (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
}

export default MovieList;
