import { useState } from "react";
import styles from "./Search.module.css";

export const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {};

  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search, 100,000+ movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};
