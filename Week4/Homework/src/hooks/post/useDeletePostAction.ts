import { useDeletePost } from "@/hooks/post/usePost";
import { hasAuthCode } from "@/router/requireAuth";
import { useNavigate } from "react-router";

export const useDeletePostAction = (postId: number) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useDeletePost();

  const handleDelete = () => {
    if (!hasAuthCode()) {
      alert("먼저 파트를 선택하고 코드를 발급받아 주세요.");
      navigate("/");
      return;
    }
    if (!confirm("게시글을 삭제할까요?")) return;

    mutate(postId, {
      onSuccess: () => {
        alert("게시글이 삭제되었습니다.");
        navigate("/posts", { replace: true });
      },
      onError: () => alert("게시글 삭제에 실패했습니다. 다시 시도해주세요."),
    });
  };

  return { handleDelete, isDeleting: isPending };
};
