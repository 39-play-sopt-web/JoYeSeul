export const PARTS = ["WEB", "ANDROID", "iOS"] as const;
export type Part = (typeof PARTS)[number];
