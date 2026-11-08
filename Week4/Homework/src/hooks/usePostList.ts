import { getPostList } from "@/apis/post";
import { postKeys } from "@/constants/queryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

export const usePostList = (keyword: string) => {
  return useInfiniteQuery({
    queryKey: postKeys.list(keyword),
    queryFn: ({ pageParam }) => getPostList({ keyword, cursor: pageParam }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext && lastPage.nextCursor !== null
        ? lastPage.nextCursor
        : undefined,
    select: (data) => data.pages.flatMap((page) => page.posts),
  });
};
