import Button from "@/components/button/Button";
import TextArea from "@/components/textArea/TextArea";
import TextField from "@/components/textField/TextField";
import { useCreatePost } from "@/hooks/useCreatePost";
import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";

type Step = "title" | "content" | "author";

const STEPS: Record<
  Step,
  { label: string; placeholder: string; limit: number; next: Step | null }
> = {
  title: {
    label: "제목",
    placeholder: "제목을 입력하세요",
    limit: 50,
    next: "content",
  },
  content: {
    label: "본문",
    placeholder: "본문을 입력하세요",
    limit: 1000,
    next: "author",
  },
  author: {
    label: "작성자",
    placeholder: "작성자를 입력하세요",
    limit: 20,
    next: null,
  },
};

export default function PostNew() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("title");
  const [form, setForm] = useState<Record<Step, string>>({
    title: "",
    content: "",
    author: "",
  });

  const current = STEPS[step];
  const value = form[step];
  const isInvalid = value.trim() === "" || value.length > current.limit;

  const { mutate, isPending } = useCreatePost();

  const handleChange = (newValue: string) => {
    setForm((prev) => ({ ...prev, [step]: newValue }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalid) return;

    if (current.next) {
      setStep(current.next);
      return;
    }

    mutate(
      {
        title: form.title.trim(),
        content: form.content.trim(),
        author: form.author.trim(),
      },
      {
        onSuccess: () => {
          alert(`${form.author.trim()}님의 게시글이 작성되었습니다.`);
          navigate("/posts");
        },
        onError: () => {
          alert("게시글 작성에 실패했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  return (
    <section className="mx-auto flex max-w-180 flex-col gap-4 p-4">
      <h1 className="text-title-md">글쓰기</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {step === "content" ? (
          <TextArea
            label={current.label}
            placeholder={current.placeholder}
            limit={current.limit}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        ) : (
          <TextField
            label={current.label}
            placeholder={current.placeholder}
            limit={current.limit}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate("/posts")}
          >
            목록으로
          </Button>
          <Button type="submit" size="sm" disabled={isInvalid || isPending}>
            {current.next ? "다음" : isPending ? "작성 중..." : "작성"}
          </Button>
        </div>
      </form>
    </section>
  );
}
