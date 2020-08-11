import React, { useState } from "react";
import { create } from "apisauce";

import "./app.css";
import ItemsList from "./components/ItemsList";
import SearchInput from "./components/Search.js";

const api = create({
  baseUrl: "https://itunes.apple.com",
});

function App() {
  const [searchResults, setSearchResults] = useState([]);

  function onItemSearch(value) {
    api
      .get(
        `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${value}`
      )
      .then((response) => setSearchResults(response.data.results))
      .catch((error) => alert(error));
  }
  return (
    <>
          <SearchInput onItemSearch={onItemSearch} />
          <ItemsList searchResults={searchResults} />
    </>
  );
}

export default App;
