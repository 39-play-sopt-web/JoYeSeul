import type { MovieDetail } from "../types/movie";

const languageNames = new Intl.DisplayNames(["ko"], { type: "language" });
const regionNames = new Intl.DisplayNames(["ko"], { type: "region" });

export const formatRuntime = (minutes: number) => {
  if (!minutes) return "정보 없음";

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (!hours) return `${rest}분`;

  return rest ? `${hours}시간 ${rest}분` : `${hours}시간`;
};

export const formatCurrency = (amount: number) =>
  amount ? `$${amount.toLocaleString("en-US")}` : "정보 없음";

export const getLanguageName = (code: string) => {
  try {
    return languageNames.of(code) ?? code;
  } catch {
    return code;
  }
};

export const getRegionName = (code: string) => {
  try {
    return regionNames.of(code) ?? code;
  } catch {
    return code;
  }
};

const STATUS_LABEL: Record<string, string> = {
  Released: "개봉",
  "Post Production": "후반 작업 중",
  "In Production": "제작 중",
  Planned: "제작 예정",
  Rumored: "제작 루머",
  Canceled: "제작 취소",
};

export const getStatusLabel = (status: string) =>
  STATUS_LABEL[status] ?? status;

export const getMovieInfoItems = (movie: MovieDetail) => [
  { label: "원제", value: movie.original_title },
  { label: "원어", value: getLanguageName(movie.original_language) },
  {
    label: "제작 국가",
    value:
      movie.production_countries
        .map((country) => getRegionName(country.iso_3166_1))
        .join(", ") || "정보 없음",
  },
  {
    label: "사용 언어",
    value:
      movie.spoken_languages
        .map((language) => getLanguageName(language.iso_639_1))
        .join(", ") || "정보 없음",
  },
  { label: "예산", value: formatCurrency(movie.budget) },
  { label: "수익", value: formatCurrency(movie.revenue) },
];
