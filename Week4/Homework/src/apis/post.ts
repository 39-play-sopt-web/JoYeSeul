import { api } from "@/apis/instance";
import type { ApiResponse } from "@/types/api";
import type {
  CreatePostRequest,
  GetPostListParams,
  GetPostListResponse,
  Post,
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
