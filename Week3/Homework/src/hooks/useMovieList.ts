import { useEffect, useReducer, useRef } from "react";
import type { Movie } from "../types/movie";
import { getMovies } from "../apis/movie";
import { RATING_FILTER_OPTIONS } from "../constants/ratingFilter";

const MAX_PAGE = 500;

interface MovieListState {
  rateKey: string;
  page: number;
  movies: Movie[];
  hasMore: boolean;
  isLoading: boolean;
  isError: boolean;
}

type MovieListAction =
  | { type: "SELECT_RATE"; key: string }
  | { type: "LOAD_MORE" }
  | { type: "FETCH_SUCCESS"; page: number; movies: Movie[]; hasMore: boolean }
  | { type: "FETCH_ERROR" };

const initialState: MovieListState = {
  rateKey: "all",
  page: 1,
  movies: [],
  hasMore: true,
  isLoading: true,
  isError: false,
};

function movieListReducer(
  state: MovieListState,
  action: MovieListAction,
): MovieListState {
  switch (action.type) {
    case "SELECT_RATE":
      if (action.key === state.rateKey) return state;
      return { ...initialState, rateKey: action.key };

    case "LOAD_MORE":
      if (state.isLoading || !state.hasMore) return state;
      return { ...state, page: state.page + 1, isLoading: true };

    case "FETCH_SUCCESS": {
      if (action.page === 1)
        return {
          ...state,
          movies: action.movies,
          hasMore: action.hasMore,
          isLoading: false,
        };
      const ids = new Set(state.movies.map((movie) => movie.id));
      const newMovies = action.movies.filter((movie) => !ids.has(movie.id));
      return {
        ...state,
        movies: [...state.movies, ...newMovies],
        hasMore: action.hasMore,
        isLoading: false,
      };
    }

    case "FETCH_ERROR":
      return { ...state, isLoading: false, hasMore: false, isError: true };
  }
}

export function useMovieList() {
  const [state, dispatch] = useReducer(movieListReducer, initialState);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { rateKey, page, isLoading, hasMore } = state;

  useEffect(() => {
    const option = RATING_FILTER_OPTIONS.find((o) => o.key === rateKey);
    let ignore = false;

    getMovies({ page, min: option?.min, max: option?.max })
      .then((data) => {
        if (ignore) return;

        dispatch({
          type: "FETCH_SUCCESS",
          page,
          movies: data.results,
          hasMore: data.page < Math.min(data.total_pages, MAX_PAGE),
        });
      })
      .catch((error) => {
        console.error(error);
        if (!ignore) dispatch({ type: "FETCH_ERROR" });
      });

    return () => {
      ignore = true;
    };
  }, [rateKey, page]);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target || isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch({ type: "LOAD_MORE" });
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  const selectRate = (key: string) => dispatch({ type: "SELECT_RATE", key });

  return { ...state, selectRate, sentinelRef };
}
