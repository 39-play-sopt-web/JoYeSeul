import type { PaginatedResponse } from "./shared";

interface MovieBase {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

// 영화 목록
export interface Movie extends MovieBase {
  genre_ids: number[];
}

export type MovieListResponse = PaginatedResponse<Movie>;

// 영화 상세
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetail extends MovieBase {
  genres: Genre[];
  runtime: number;
  status: string;
  budget: number;
  revenue: number;
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
}
