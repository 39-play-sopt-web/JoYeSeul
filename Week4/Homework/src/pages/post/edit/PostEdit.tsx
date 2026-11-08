import Button from "@/components/button/Button";
import TextArea from "@/components/textArea/TextArea";
import TextField from "@/components/textField/TextField";
import { usePostDetail, useUpdatePost } from "@/hooks/usePost";
import type { Post } from "@/types/post";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useNavigate, useParams } from "react-router";

const TITLE_LIMIT = 50;
const CONTENT_LIMIT = 1000;

export default function PostEdit() {
  const { id } = useParams();
  const { data: post, isPending, isError } = usePostDetail(Number(id));

  return (
    <section className="mx-auto flex max-w-180 flex-col gap-6 p-4">
      <h1 className="text-title-md">게시글 수정</h1>
      {isPending && (
        <p className="text-center text-body text-fg-muted">불러오는 중...</p>
      )}
      {isError && (
        <p className="text-center text-body text-error">
          게시글을 불러오지 못했습니다.
        </p>
      )}
      {post && <EditForm post={post} />}
    </section>
  );
}

function EditForm({ post }: { post: Post }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: post.title,
    content: post.content,
  });
  const { mutate, isPending } = useUpdatePost();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isInvalid =
    form.title.trim() === "" ||
    form.content.trim() === "" ||
    form.title.length > TITLE_LIMIT ||
    form.content.length > CONTENT_LIMIT;

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalid) return;

    mutate(
      {
        id: post.id,
        body: { title: form.title.trim(), content: form.content.trim() },
      },
      {
        onSuccess: () => {
          alert("게시글이 수정되었습니다.");
          navigate(`/posts/${post.id}`, { replace: true });
        },
        onError: () => alert("게시글 수정에 실패했습니다. 다시 시도해주세요."),
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <TextField
        label="제목"
        limit={TITLE_LIMIT}
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <TextArea
        label="본문"
        limit={CONTENT_LIMIT}
        name="content"
        value={form.content}
        onChange={handleChange}
      />
      <div className="flex justify-end gap-2">
        <Button variant="secondary" size="sm" onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button type="submit" size="sm" disabled={isInvalid}>
          {isPending ? "수정 중..." : "수정 완료"}
        </Button>
      </div>
    </form>
  );
}
