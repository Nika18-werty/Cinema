import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard'; 

const API_KEY = '74ca29358c2c9e385c1d8f151c3b8b23'; 

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=uk-UA`)
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
      .catch(err => console.error('Помилка при завантаженні:', err));
  }, []);

  return (
    <div>
      <h1>🎬 Зараз у кіно</h1>
      {movies.length === 0 ? (
        <p>Завантаження фільмів...</p>
      ) : (
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
}

export default NowPlaying;
