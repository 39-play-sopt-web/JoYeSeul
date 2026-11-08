import Button from "@/components/button/Button";
import TextArea from "@/components/textArea/TextArea";
import TextField from "@/components/textField/TextField";
import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";

const TITLE_LIMIT = 50;
const CONTENT_LIMIT = 1000;

const MOCK_POST = {
  id: 1,
  title: "1단계 제목입니다",
  content: "본문을 써야겠죠",
};

export default function PostEdit() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(MOCK_POST.title);
  const [content, setContent] = useState(MOCK_POST.content);

  const isInvalid =
    title.trim() === "" ||
    content.trim() === "" ||
    title.length > TITLE_LIMIT ||
    content.length > CONTENT_LIMIT;

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalid) return;
    console.log({ title, content });
  };

  return (
    <section className="mx-auto flex max-w-180 flex-col gap-6 p-4">
      <h1 className="text-title-md">게시글 수정</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="제목"
          limit={TITLE_LIMIT}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          label="본문"
          limit={CONTENT_LIMIT}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="sm" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button type="submit" size="sm" disabled={isInvalid}>
            수정 완료
          </Button>
        </div>
      </form>
    </section>
  );
}
