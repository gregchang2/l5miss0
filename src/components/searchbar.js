import React, { useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <div className="searchbar-container">
      <br />
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a player name"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
