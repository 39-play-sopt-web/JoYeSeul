import Button from "@/components/button/Button";
import { useDeletePostAction } from "@/hooks/useDeletePostAction";
import { usePostDetailPage } from "@/hooks/usePostDetailPage";
import { formatDate } from "@/utils/formatDate";

export default function PostDetail() {
  const { postId, post, isPending, isError, goList, goEdit } =
    usePostDetailPage();
  const { handleDelete, isDeleting } = useDeletePostAction(postId);

  return (
    <section className="mx-auto flex max-w-180 flex-col gap-4 p-4">
      <Button
        variant="secondary"
        size="sm"
        onClick={goList}
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
            <Button variant="secondary" size="sm" onClick={goEdit}>
              수정
            </Button>
            <Button size="sm" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "삭제 중..." : "삭제"}
            </Button>
          </div>
        </article>
      )}
    </section>
  );
}
