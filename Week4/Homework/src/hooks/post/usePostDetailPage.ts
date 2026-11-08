import { usePostDetail } from "@/hooks/post/usePost";
import { useNavigate, useParams } from "react-router";

export const usePostDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postId = Number(id);

  const { data: post, isPending, isError } = usePostDetail(postId);

  const goList = () => navigate("/posts");
  const goEdit = () => navigate(`/posts/${postId}/edit`);

  return { postId, post, isPending, isError, goList, goEdit };
};
