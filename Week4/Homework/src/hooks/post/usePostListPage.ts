import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import { usePostList } from "@/hooks/post/usePost";
import { useCallback } from "react";
import { useSearchParams } from "react-router";

export const usePostListPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("query") ?? "";

  const {
    data: posts,
    isPending,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePostList(keyword);

  const handleIntersect = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const bottomRef = useIntersectionObserver(handleIntersect, hasNextPage);

  return {
    keyword,
    posts,
    isPending,
    isError,
    isEmpty: posts?.length === 0,
    isFetchingNextPage,
    bottomRef,
  };
};
