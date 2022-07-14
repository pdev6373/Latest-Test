import styles from "./Filter.module.css";

export const Filter = () => {
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterText}>Filter By:</div>

      <div className={styles.filterOptions}>
        <select className={styles.filterSelect}>
          <option>Dead/Alive</option>
          <option>Dead</option>
          <option>Alive</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Male/Femail</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Location</option>
          <option>led</option>
          <option>Pea</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Name</option>
          <option>led</option>
          <option>Pea</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Name</option>
          <option>led</option>
          <option>Pea</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Name</option>
          <option>led</option>
          <option>Pea</option>
        </select>
      </div>
    </div>
  );
};
