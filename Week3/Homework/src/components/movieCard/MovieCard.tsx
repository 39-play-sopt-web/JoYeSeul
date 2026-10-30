import { Link } from "react-router";
import { TMDB_IMAGE_BASE_URL } from "../../constants/image";
import type { Movie } from "../../types/movie";
import { formatDate } from "../../utils/formatDate";
import * as styles from "./movieCard.css";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.link}>
      <article className={styles.card}>
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
          <span className={styles.rating}>
            ★ {movie.vote_average.toFixed(1)}
          </span>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{movie.title}</h3>
          <p className={styles.date}>{formatDate(movie.release_date)}</p>
          <p className={styles.overview}>
            {movie.overview || "등록된 줄거리가 없습니다."}
          </p>
        </div>
      </article>
    </Link>
  );
}
