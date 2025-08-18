import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, year, rating });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="number"
        placeholder="Рік"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ marginLeft: '10px' }}
      />
      <input
        type="number"
        placeholder="Мін. рейтинг"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ marginLeft: '10px' }}
      />
      <button type="submit" style={{ marginLeft: '10px' }}>
        🔍 Пошук
      </button>
    </form>
  );
}

export default SearchBar;
