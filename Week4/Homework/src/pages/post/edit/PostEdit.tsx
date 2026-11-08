import Button from "@/components/button/Button";
import TextArea from "@/components/textArea/TextArea";
import TextField from "@/components/textField/TextField";
import {
  CONTENT_LIMIT,
  TITLE_LIMIT,
  usePostEditForm,
} from "@/hooks/post/usePostEditForm";
import { usePostEditPage } from "@/hooks/post/usePostEditPage";
import type { Post } from "@/types/post";

export default function PostEdit() {
  const { post, isPending, isError } = usePostEditPage();

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
  const { form, isInvalid, isPending, handleChange, handleSubmit, cancel } =
    usePostEditForm(post);

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
        <Button variant="secondary" size="sm" onClick={cancel}>
          취소
        </Button>
        <Button type="submit" size="sm" disabled={isInvalid || isPending}>
          {isPending ? "수정 중..." : "수정 완료"}
        </Button>
      </div>
    </form>
  );
}
