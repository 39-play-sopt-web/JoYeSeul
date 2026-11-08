import Button from "@/components/button/Button";
import { PARTS, type Part } from "@/constants/part";
import { AUTH_CODE_KEY } from "@/constants/storage";
import { useIssueCode } from "@/hooks/useIssueCode";
import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [part, setPart] = useState<Part | "">("");
  const { mutate, isPending } = useIssueCode();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!part) return;

    mutate(
      { part },
      {
        onSuccess: () => navigate("/posts"),
        onError: () => alert("코드 발급에 실패했습니다. 다시 시도해주세요."),
      },
    );
  };

  const handleGoList = () => {
    if (!localStorage.getItem(AUTH_CODE_KEY)) {
      alert("먼저 파트를 선택하고 코드를 발급받아 주세요.");
      return;
    }
    navigate("/posts");
  };

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center gap-4 p-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-title-lg">PLAY SOPT 게시판</h1>
        <p className="text-caption text-fg-muted">
          파트를 선택하면 코드가 발급됩니다.
        </p>
      </header>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <select
          className="h-9 flex-1 rounded-md border border-line bg-surface px-2 text-label"
          aria-label="파트 선택"
          value={part}
          onChange={(e) => setPart(e.target.value as Part)}
        >
          <option value="" hidden>
            파트를 선택해주세요.
          </option>
          {PARTS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <Button type="submit" size="sm" disabled={!part || isPending}>
          {isPending ? "발급 중..." : "코드 발급하기"}
        </Button>
      </form>
      <Button variant="secondary" fullWidth onClick={handleGoList}>
        게시판 목록 보기
      </Button>
    </main>
  );
}
