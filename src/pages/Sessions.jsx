import React, { useEffect, useState } from "react";
import "./Sessions.css";

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    date: "",
    time: "",
    genre: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("sessions")) || [];
    setSessions(saved);
    setFiltered(saved);
  }, []);

  const applyFilters = () => {
    let result = sessions;

    if (filters.date) {
      result = result.filter((s) => s.date === filters.date);
    }

    if (filters.time) {
      result = result.filter((s) => {
        const hour = parseInt(s.time.split(":")[0]);
        if (filters.time === "morning") return hour < 12;
        if (filters.time === "day") return hour >= 12 && hour < 18;
        if (filters.time === "evening") return hour >= 18;
        return true;
      });
    }

    if (filters.genre) {
      result = result.filter((s) => s.genre === filters.genre);
    }

    setFiltered(result);
  };

  return (
    <div className="sessions-page">
      <h1>🎬 Розклад сеансів</h1>

      {/* Фільтри */}
      <div className="filters">
        <input
          type="date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />

        <select
          value={filters.time}
          onChange={(e) => setFilters({ ...filters, time: e.target.value })}
        >
          <option value="">Весь день</option>
          <option value="morning">Ранок</option>
          <option value="day">День</option>
          <option value="evening">Вечір</option>
        </select>

        <select
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        >
          <option value="">Всі жанри</option>
          <option value="Action">Бойовик</option>
          <option value="Comedy">Комедія</option>
          <option value="Drama">Драма</option>
          <option value="Horror">Жахи</option>
        </select>

        <button onClick={applyFilters}>Застосувати</button>
      </div>

      {/* Список сеансів */}
      {filtered.length === 0 ? (
        <p>Сеансів не знайдено</p>
      ) : (
        <div className="sessions-grid">
          {filtered.map((s, index) => (
            <div className="session-card" key={index}>
              <div className="favorite">❤️</div>
              <img
                src={s.poster || "https://via.placeholder.com/200x300"}
                alt={s.movieTitle}
              />
              <h3>{s.movieTitle}</h3>
              <p>{s.genre}</p>
              <p>
                📅 {s.date} 🕒 {s.time}
              </p>
              <div className="buttons">
                <button className="details-btn">Детальніше</button>
                <button className="buy-btn">Купити квиток</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sessions;
