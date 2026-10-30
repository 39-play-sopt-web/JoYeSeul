import { Link, useParams } from "react-router";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { useEffect } from "react";
import Header from "../../components/header/Header";
import { TMDB_IMAGE_BASE_URL } from "../../constants/image";
import { formatDate } from "../../utils/formatDate";
import {
  formatRuntime,
  getMovieInfoItems,
  getStatusLabel,
} from "../../utils/formatMovie";
import * as styles from "./detail.css.ts";

export default function MovieDetail() {
  const { movieId } = useParams();
  const { movie, isLoading, isError } = useMovieDetail(Number(movieId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  if (isLoading) {
    return (
      <>
        <Header />
        <p className={styles.message}>영화 정보를 불러오는 중...</p>
      </>
    );
  }

  if (isError || !movie) {
    return (
      <>
        <Header />
        <div className={styles.message}>
          <p>영화 정보를 불러오지 못했어요.</p>
          <Link to="/" className={styles.backLink}>
            ← 목록으로 돌아가기
          </Link>
        </div>
      </>
    );
  }

  const infoItems = getMovieInfoItems(movie);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <Link to="/" className={styles.backLink}>
          ← 목록으로 돌아가기
        </Link>

        <section className={styles.hero}>
          {movie.backdrop_path && (
            <img
              className={styles.heroImage}
              src={`${TMDB_IMAGE_BASE_URL}/w1280${movie.backdrop_path}`}
              alt=""
            />
          )}

          <div className={styles.heroContent}>
            <div className={styles.posterWrapper}>
              {movie.poster_path ? (
                <img
                  className={styles.poster}
                  src={`${TMDB_IMAGE_BASE_URL}/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className={styles.noPoster}>No Image</div>
              )}
            </div>

            <div className={styles.info}>
              <h2 className={styles.title}>{movie.title}</h2>

              <div className={styles.meta}>
                <span className={styles.rating}>
                  ★ {movie.vote_average.toFixed(1)}
                </span>
                <span>{formatDate(movie.release_date)}</span>
                <span className={styles.dot}>·</span>
                <span>{formatRuntime(movie.runtime)}</span>
                <span className={styles.dot}>·</span>
                <span>투표 {movie.vote_count.toLocaleString()}명</span>
                <span className={styles.status}>
                  {getStatusLabel(movie.status)}
                </span>
              </div>

              {movie.genres.length > 0 && (
                <ul className={styles.genres}>
                  {movie.genres.map((genre) => (
                    <li key={genre.id} className={styles.genre}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>줄거리</h3>
          <p className={styles.overview}>
            {movie.overview || "등록된 줄거리가 없습니다."}
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>기본 정보</h3>
          <dl className={styles.infoGrid}>
            {infoItems.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <dt className={styles.infoLabel}>{item.label}</dt>
                <dd className={styles.infoValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </>
  );
}
