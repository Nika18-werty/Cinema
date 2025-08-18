import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [session, setSession] = useState("");

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("adminMovies")) || [];
    setMovies(savedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem("adminMovies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = () => {
    if (!title) return;
    const newMovie = {
      id: Date.now(),
      title,
      year,
      session,
    };
    setMovies([...movies, newMovie]);
    setTitle("");
    setYear("");
    setSession("");
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  const updateMovie = (id, field, value) => {
    setMovies(
      movies.map((m) =>
        m.id === id ? { ...m, [field]: value } : m
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Панель адміністратора</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Назва фільму"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Рік"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <input
          type="text"
          placeholder="Сеанс (наприклад: 18:00)"
          value={session}
          onChange={(e) => setSession(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <button onClick={addMovie} style={{ marginLeft: "10px" }}>
          ➕ Додати
        </button>
      </div>

      <h2>📋 Список фільмів</h2>
      {movies.length === 0 ? (
        <p>Немає фільмів</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={movie.title}
                onChange={(e) => updateMovie(movie.id, "title", e.target.value)}
              />
              <input
                type="number"
                value={movie.year}
                onChange={(e) => updateMovie(movie.id, "year", e.target.value)}
                style={{ marginLeft: "10px" }}
              />
              <input
                type="text"
                value={movie.session}
                onChange={(e) =>
                  updateMovie(movie.id, "session", e.target.value)
                }
                style={{ marginLeft: "10px" }}
              />
              <button
                onClick={() => deleteMovie(movie.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                🗑 Видалити
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminPanel;
