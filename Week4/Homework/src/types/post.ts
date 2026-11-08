export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

/* 게시글 목록 조회 */
export interface GetPostListParams {
  keyword?: string;
  cursor?: number;
  size?: number;
}

export interface GetPostListResponse {
  posts: Post[];
  nextCursor: number | null;
  hasNext: boolean;
}

/* 게시글 작성 */
export interface CreatePostRequest {
  title: string;
  content: string;
  author: string;
}

/* 게시글 수정 */
export interface UpdatePostRequest {
  title: string;
  content: string;
}
