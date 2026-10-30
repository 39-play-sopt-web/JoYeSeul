import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import RatingFilter from "../../components/ratingFilter/RatingFilter.tsx";
import * as styles from "./home.css.ts";
import { getMovies } from "../../apis/movie.ts";
import type { Movie } from "../../types/movie.ts";
import MovieCard from "../../components/movieCard/MovieCard.tsx";
import { RATING_FILTER_OPTIONS } from "../../constants/ratingFilter.ts";

export default function Home() {
  const [selectedRate, setSelectedRate] = useState<string>("all");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const option = RATING_FILTER_OPTIONS.find((o) => o.key === selectedRate);
    let ignore = false;

    getMovies({ page: 1, min: option?.min, max: option?.max })
      .then((data) => {
        if (!ignore) setMovies(data.results);
      })
      .catch((error) => console.error(error));

    return () => {
      ignore = true;
    };
  }, [selectedRate]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>영화 둘러보기</h2>
        <RatingFilter selectedKey={selectedRate} onSelect={setSelectedRate} />
        <ul className={styles.list}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
