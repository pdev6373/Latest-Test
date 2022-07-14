import styles from "./Search.module.css";

export const Search = ({ search, setSearch, setFilterCharacters }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setFilterCharacters(true);
  };

  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search, 15+ characters"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          type="submit"
          className={styles.searchButton}
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};
