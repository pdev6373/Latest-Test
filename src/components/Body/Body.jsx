import { useState, useEffect } from "react";
import { useFetchAllNews } from "../../hooks/graphQl/useFetchAllNews";
import styles from "./Body.module.css";

export const Body = ({ search, setFilterCharacters, filterCharacters }) => {
  const { error, loading, data } = useFetchAllNews();
  const [realData, setRealData] = useState(data);

  useEffect(() => {
    const newData = data?.filter((data) => {
      Array.from(data.name.split(" ")).some((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
    });

    setRealData(newData);
    setFilterCharacters(false);
  }, [filterCharacters]);

  return (
    <main className={styles.body}>
      {loading && <div>Loading...</div>}
      {error && <div>Oops something went wrong!...</div>}

      {realData &&
        realData.map((item) => {
          return (
            <div key={item.id} className={styles.character}>
              <img src={item.image} className={styles.characterImage} />

              <div className={styles.characterDescription}>
                <div className={styles.characterDetails}>
                  <span>Name</span>
                  <p className={styles.characterTitle}>{item.name}</p>
                </div>
                <div className={styles.characterDetails}>
                  <span>Status</span>
                  <p className={styles.characterTitle}>{item.status}</p>
                </div>
                <div className={styles.characterDetails}>
                  <span>Type</span>
                  <p className={styles.characterTitle}>{item.type}</p>
                </div>
                <div className={styles.characterDetails}>
                  <span>Gender</span>
                  <p className={styles.characterTitle}>{item.gender}</p>
                </div>
                <div className={styles.characterDetails}>
                  <span>Origin Name</span>
                  <p className={styles.characterTitle}>{item.origin.name}</p>
                </div>
                <div className={styles.characterDetails}>
                  <span>Location Name</span>
                  <p className={styles.characterTitle}>{item.location.name}</p>
                </div>
                <div className={styles.characterDetails}>
                  <span>created</span>
                  <p className={styles.characterTitle}>{item.created}</p>
                </div>
              </div>
            </div>
          );
        })}
    </main>
  );
};
