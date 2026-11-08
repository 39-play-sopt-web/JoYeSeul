import Button from "@/components/button/Button";
import { formatDate } from "@/utils/formatDate";
import { useNavigate, useParams } from "react-router";

const MOCK_POST = {
  id: 1,
  title: "1단계 제목입니다",
  content: "본문을 써야겠죠\n줄바꿈도 확인해 봅니다.",
  author: "이름",
  createdAt: "2026-10-24T04:58:00",
  updatedAt: "2026-10-24T04:58:00",
};

export default function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = MOCK_POST;

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
          <Button size="sm">삭제</Button>
        </div>
      </article>
    </section>
  );
}
