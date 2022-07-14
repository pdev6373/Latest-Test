import { useFetchAllNews } from "../../hooks/graphQl/useFetchAllNews";
import styles from "./Body.module.css";

export const Body = () => {
  const { error, loading, data } = useFetchAllNews();

  return (
    <main className={styles.body}>
      {loading && <div>Loading...</div>}
      {error && <div>Oops something went wrong!...</div>}

      {data &&
        data.map((item) => {
          return (
            <div key={item.id} className={styles.character}>
              <img src={item.image} className={styles.character} />

              <div className={styles.characterDescription}>
                <div>
                  <span>Name</span>
                  <p className={styles.characterTitle}>{item.name}</p>
                </div>
                <div>
                  <span>Status</span>
                  <p className={styles.characterTitle}>{item.status}</p>
                </div>
                <div>
                  <span>Type</span>
                  <p className={styles.characterTitle}>{item.type}</p>
                </div>
                <div>
                  <span>Gender</span>
                  <p className={styles.characterTitle}>{item.gender}</p>
                </div>
                <div>
                  <span>Origin Name</span>
                  <p className={styles.characterTitle}>{item.origin.name}</p>
                </div>
                <div>
                  <span>Location Name</span>
                  <p className={styles.characterTitle}>{item.location.name}</p>
                </div>
                <div>
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
