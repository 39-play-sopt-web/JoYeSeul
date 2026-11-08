import Button from "@/components/button/Button";
import TextArea from "@/components/textArea/TextArea";
import TextField from "@/components/textField/TextField";
import { useNewPostForm } from "@/hooks/post/useNewPostForm";

export default function PostNew() {
  const {
    step,
    current,
    value,
    isInvalid,
    isLastStep,
    isPending,
    handleChange,
    handleSubmit,
    goList,
  } = useNewPostForm();

  const Field = step === "content" ? TextArea : TextField;

  return (
    <section className="mx-auto flex max-w-180 flex-col gap-4 p-4">
      <h1 className="text-title-md">게시글 작성</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field
          key={step}
          label={current.label}
          placeholder={current.placeholder}
          limit={current.limit}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="sm" onClick={goList}>
            목록으로
          </Button>
          <Button type="submit" size="sm" disabled={isInvalid || isPending}>
            {!isLastStep ? "다음" : isPending ? "작성 중..." : "작성"}
          </Button>
        </div>
      </form>
    </section>
  );
}
