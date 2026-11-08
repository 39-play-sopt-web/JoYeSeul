import {
  createPost,
  deletePost,
  getPostDetail,
  getPostList,
  updatePost,
} from "@/apis/post";
import { postKeys } from "@/constants/queryKeys";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.all });
    },
  });
};

export const usePostDetail = (id: number) => {
  return useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => getPostDetail(id),
    enabled: Number.isInteger(id) && id > 0,
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.all });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: (_, id) => {
      queryClient.removeQueries({ queryKey: postKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: postKeys.all });
    },
  });
};
