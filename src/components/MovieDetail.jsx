import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import FavoritesContext from '../context/FavoritesContext';

const movies = [
  {
    id: 1,
    title: 'Дюна: Частина Друга',
    rating: 8.5,
    description: 'Продовження епічної саги.',
    poster: 'https://via.placeholder.com/150',
    year: 2024,
    trailer: 'https://youtube.com',
    genre: 'Фантастика'
  },
  {
    id: 2,
    title: 'Безсмертні',
    rating: 7.2,
    description: 'Новий фантастичний бойовик.',
    poster: 'https://via.placeholder.com/150',
    year: 2023,
    trailer: 'https://youtube.com',
    genre: 'Бойовик'
  }
];

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const { addToFavorites } = useContext(FavoritesContext);

  if (!movie) {
    return <div>Фільм не знайдено</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>Рік випуску: {movie.year}</p>
      <p>Жанр: {movie.genre}</p>
      <p>Рейтинг: {movie.rating}</p>
      <p>{movie.description}</p>
      <a href={movie.trailer} target="_blank" rel="noopener noreferrer">Дивитись трейлер</a>
      <br />
      <button onClick={() => addToFavorites(movie)}>Додати у Обране</button>
      <br />
      <Link to="/">Назад до списку</Link>
    </div>
  );
}

export default MovieDetail;
