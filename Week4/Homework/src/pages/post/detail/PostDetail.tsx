import Button from "@/components/button/Button";
import { useDeletePost, usePostDetail } from "@/hooks/usePost";
import { hasAuthCode } from "@/router/requireAuth";
import { formatDate } from "@/utils/formatDate";
import { useNavigate, useParams } from "react-router";

export default function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const postId = Number(id);

  const { data: post, isPending, isError } = usePostDetail(postId);
  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();

  const handleDelete = () => {
    if (!hasAuthCode()) {
      alert("먼저 파트를 선택하고 코드를 발급받아 주세요.");
      navigate("/");
      return;
    }

    if (!confirm("게시글을 삭제할까요?")) return;

    deletePost(postId, {
      onSuccess: () => {
        alert("게시글이 삭제되었습니다.");
        navigate("/posts", { replace: true });
      },
      onError: () => alert("게시글 삭제에 실패했습니다. 다시 시도해주세요."),
    });
  };

  return (
    <section className="mx-auto flex max-w-180 flex-col gap-4 p-4">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => navigate("/posts")}
        className="self-start"
      >
        ← 목록으로
      </Button>

      {isPending && (
        <p className="text-center text-body text-fg-muted">불러오는 중...</p>
      )}
      {isError && (
        <p className="text-center text-body text-error">
          게시글을 불러오지 못했습니다.
        </p>
      )}

      {post && (
        <article className="flex flex-col gap-4 rounded-lg bg-surface p-6">
          <header className="flex flex-col gap-2">
            <h1 className="text-title-md">{post.title}</h1>
            <div className="flex items-center gap-2 text-caption">
              <span className="text-primary">{post.author}</span>
              <time dateTime={post.createdAt} className="text-fg-muted">
                {formatDate(post.createdAt)}
              </time>
            </div>
          </header>
          <p className="border-b border-line pb-4 text-body whitespace-pre-wrap text-fg-muted">
            {post.content}
          </p>
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate(`/posts/${id}/edit`)}
            >
              수정
            </Button>
            <Button size="sm" onClick={handleDelete}>
              {isDeleting ? "삭제 중..." : "삭제"}
            </Button>
          </div>
        </article>
      )}
    </section>
  );
}
