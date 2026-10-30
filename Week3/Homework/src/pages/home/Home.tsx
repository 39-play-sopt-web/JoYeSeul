import Header from "../../components/header/Header";
import RatingFilter from "../../components/ratingFilter/RatingFilter";
import * as styles from "./home.css";
import MovieCard from "../../components/movieCard/MovieCard";
import { useMovieList } from "../../hooks/useMovieList";

export default function Home() {
  const { rateKey, movies, isLoading, isError, selectRate, sentinelRef } =
    useMovieList();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>영화 둘러보기</h2>
        <RatingFilter selectedKey={rateKey} onSelect={selectRate} />
        <ul className={styles.list}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>

        {isLoading && <p className={styles.message}>영화를 불러오는 중...</p>}
        {isError && <p className={styles.message}>영화를 불러오지 못했어요.</p>}
        {!isLoading && !isError && movies.length === 0 && (
          <p className={styles.message}>조건에 맞는 영화가 없어요.</p>
        )}

        <div ref={sentinelRef} className={styles.sentinel} />
      </main>
    </>
  );
}
