import type { MovieDetail, MovieListResponse } from "../types/movie";
import { API } from "./instance";

interface GetMoviesParams {
  page: number;
  min?: number;
  max?: number;
}

export const getMovies = async ({ page, min, max }: GetMoviesParams) => {
  const { data } = await API.get<MovieListResponse>("/discover/movie", {
    params: {
      page,
      language: "ko-KR",
      "vote_average.gte": min,
      "vote_average.lte": max,
    },
  });

  return data;
};

export const getMovieDetail = async (movieId: number) => {
  const { data } = await API.get<MovieDetail>(`/movie/${movieId}`, {
    params: { language: "ko-KR" },
  });

  return data;
};
