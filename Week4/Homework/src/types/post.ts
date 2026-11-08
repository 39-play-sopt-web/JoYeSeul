export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

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
