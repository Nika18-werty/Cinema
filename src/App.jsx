import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites';
import FavoritesContext from './context/FavoritesContext';
import NowPlaying from './components/NowPlaying'; 
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      <Router>
        <nav>
          <Link to="/">Головна</Link> | <Link to="/favorites">Обране ({favorites.length})</Link>
          <Link to="/now-playing">Зараз у кіно</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </FavoritesContext.Provider>
  );
}

export default App;




