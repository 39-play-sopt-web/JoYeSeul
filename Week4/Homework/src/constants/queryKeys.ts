export const postKeys = {
  all: ["posts"] as const,
  list: (keyword: string) => [...postKeys.all, "list", { keyword }] as const,
  detail: (id: number) => [...postKeys.all, "detail", { id }] as const,
};
