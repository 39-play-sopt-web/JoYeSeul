export type RatingKey =
  | "all"
  | "over9"
  | "over8"
  | "over7"
  | "over6"
  | "under6";
export interface RatingFilterOption {
  key: RatingKey;
  label: string;
  min?: number;
  max?: number;
}

export const RATING_FILTER_OPTIONS: RatingFilterOption[] = [
  { key: "all", label: "전체" },
  { key: "over9", label: "9점 이상", min: 9 },
  { key: "over8", label: "8 ~ 9점", min: 8, max: 9 },
  { key: "over7", label: "7 ~ 8점", min: 7, max: 8 },
  { key: "over6", label: "6 ~ 7점", min: 6, max: 7 },
  { key: "under6", label: "6점 미만", max: 6 },
];
