import { useEffect, useState } from "react";
import type { MovieDetail } from "../types/movie";
import { getMovieDetail } from "../apis/movie";

export function useMovieDetail(movieId: number) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    getMovieDetail(movieId)
      .then((data) => {
        if (!ignore) setMovie(data);
      })
      .catch((error) => {
        console.error(error);
        if (!ignore) setIsError(true);
      });
  }, [movieId]);

  const isLoading = !movie && !isError;

  return { movie, isLoading, isError };
}
