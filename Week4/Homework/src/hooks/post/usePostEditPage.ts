import { usePostDetail } from "@/hooks/post/usePost";
import { useParams } from "react-router";

export const usePostEditPage = () => {
  const { id } = useParams();
  const { data: post, isPending, isError } = usePostDetail(Number(id));

  return { post, isPending, isError };
};
