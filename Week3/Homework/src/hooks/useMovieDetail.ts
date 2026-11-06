import { useEffect, useState } from "react";
import type { MovieDetail } from "../types/movie";
import { getMovieDetail } from "../apis/movie";

export function useMovieDetail(movieId: number) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isFetchError, setIsFetchError] = useState(false);

  const isInvalidId = !Number.isInteger(movieId) || movieId <= 0;

  useEffect(() => {
    if (isInvalidId) return;

    let ignore = false;

    getMovieDetail(movieId)
      .then((data) => {
        if (!ignore) setMovie(data);
      })
      .catch((error) => {
        console.error(error);
        if (!ignore) setIsFetchError(true);
      });

    return () => {
      ignore = true;
    };
  }, [movieId, isInvalidId]);

  const isError = isInvalidId || isFetchError;
  const isLoading = !movie && !isError;

  return { movie, isLoading, isError };
}
