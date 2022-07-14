import { useQuery, gql } from "@apollo/client";

const FETCH_ALL_NEWS = gql`
  query {
    characters {
      results {
        id
        status
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        created
        name
        image
      }
    }
  }
`;

export const useFetchAllNews = () => {
  const hasData = () => {
    const data = JSON.parse(sessionStorage.getItem("ALL_NEWS"));
    if (data) return data;

    return false;
  };

  const fetchData = () => {
    const data = hasData();

    if (!data) {
      const { error, loading, data } = useQuery(FETCH_ALL_NEWS);

      data &&
        sessionStorage.setItem(
          "ALL_NEWS",
          JSON.stringify(data?.characters.results)
        );

      return { error, loading, data: data?.characters.results };
    }

    return { error: "", loading: false, data };
  };

  return fetchData();
};
