import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import RatingFilter from "../../components/ratingFilter/RatingFilter.tsx";
import * as styles from "./home.css.ts";
import { getMovies } from "../../apis/movie.ts";
import type { Movie } from "../../types/movie.ts";
import MovieCard from "../../components/movieCard/MovieCard.tsx";

export default function Home() {
  const [selectedRate, setSelectedRate] = useState<string>("all");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies({ page: 1 })
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

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
