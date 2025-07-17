import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = '74ca29358c2c9e385c1d8f151c3b8b23';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=uk-UA`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) {
    return <div>Завантаження...</div>;
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/150';

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={posterUrl} alt={movie.title} />
      <p>Рік випуску: {movie.release_date?.split('-')[0]}</p>
      <p>Жанри: {movie.genres?.map(g => g.name).join(', ')}</p>
      <p>Рейтинг: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <a href={`https://www.youtube.com/results?search_query=${movie.title} трейлер`} target="_blank" rel="noopener noreferrer">Дивитись трейлер</a>
      <br />
      <Link to="/">Назад до списку</Link>
    </div>
  );
}

export default MovieDetail;
