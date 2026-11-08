import type { Part } from "@/constants/part";
import { AUTH_CODE_KEY } from "@/constants/storage";
import { useIssueCode } from "@/hooks/auth/useIssueCode";
import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";

export const useIssueCodeForm = () => {
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

  const goList = () => {
    if (!localStorage.getItem(AUTH_CODE_KEY)) {
      alert("먼저 파트를 선택하고 코드를 발급받아 주세요.");
      return;
    }
    navigate("/posts");
  };

  return {
    part,
    setPart,
    isPending,
    canSubmit: Boolean(part) && !isPending,
    handleSubmit,
    goList,
  };
};
