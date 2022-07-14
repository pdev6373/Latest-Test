import { useState } from "react";

import { Search } from "./components/Search/Search";
import { Filter } from "./components/Filter/Filter";
import { Body } from "./components/Body/Body";

function App() {
  const [search, setSearch] = useState("");
  const [filterCharacters, setFilterCharacters] = useState(false);

  return (
    <div className="App">
      <Search
        search={search}
        setSearch={setSearch}
        setFilterCharacters={setFilterCharacters}
      />
      <Filter />
      <Body
        search={search}
        setFilterCharacters={setFilterCharacters}
        filterCharacters={filterCharacters}
      />
    </div>
  );
}

export default App;
