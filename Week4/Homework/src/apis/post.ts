import { api } from "@/apis/instance";
import type { ApiResponse } from "@/types/api";
import type {
  CreatePostRequest,
  GetPostListParams,
  GetPostListResponse,
  Post,
  UpdatePostRequest,
} from "@/types/post";

export const getPostList = async ({
  keyword,
  cursor,
  size = 10,
}: GetPostListParams) => {
  const searchParams: Record<string, string | number> = { size };
  if (keyword) searchParams.keyword = keyword;
  if (cursor !== undefined) searchParams.cursor = cursor;

  const res = await api
    .get("posts", { searchParams })
    .json<ApiResponse<GetPostListResponse>>();

  return res.data;
};

export const createPost = async (body: CreatePostRequest) => {
  const res = await api.post("posts", { json: body }).json<ApiResponse<Post>>();

  return res.data;
};

export const getPostDetail = async (id: number) => {
  const res = await api.get(`posts/${id}`).json<ApiResponse<Post>>();
  return res.data;
};

export const updatePost = async ({
  id,
  body,
}: {
  id: number;
  body: UpdatePostRequest;
}) => {
  const res = await api
    .put(`posts/${id}`, { json: body })
    .json<ApiResponse<Post>>();
  return res.data;
};

export const deletePost = async (id: number) => {
  await api.delete(`posts/${id}`);
};
