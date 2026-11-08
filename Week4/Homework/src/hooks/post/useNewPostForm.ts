import { useCreatePost } from "@/hooks/post/usePost";
import { useReducer, type SubmitEvent } from "react";
import { useNavigate } from "react-router";

export type Step = "title" | "content" | "author";

export const STEPS: Record<
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

interface State {
  step: Step;
  form: Record<Step, string>;
}

type Action =
  | {
      type: "CHANGE";
      value: string;
    }
  | {
      type: "NEXT";
    };

const initialState: State = {
  step: "title",
  form: {
    title: "",
    content: "",
    author: "",
  },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, form: { ...state.form, [state.step]: action.value } };
    case "NEXT": {
      const next = STEPS[state.step].next;
      return next ? { ...state, step: next } : state;
    }
  }
};

export const useNewPostForm = () => {
  const navigate = useNavigate();
  const [{ step, form }, dispatch] = useReducer(reducer, initialState);
  const { mutate, isPending } = useCreatePost();

  const current = STEPS[step];
  const value = form[step];
  const isInvalid = value.trim() === "" || value.length > current.limit;
  const isLastStep = current.next === null;

  const handleChange = (newValue: string) => {
    dispatch({ type: "CHANGE", value: newValue });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalid) return;

    if (!isLastStep) {
      dispatch({ type: "NEXT" });
      return;
    }

    const author = form.author.trim();

    mutate(
      { title: form.title.trim(), content: form.content.trim(), author },
      {
        onSuccess: () => {
          alert(`${author}님의 게시글이 작성되었습니다.`);
          navigate("/posts");
        },
        onError: () => alert("게시글 작성에 실패했습니다. 다시 시도해주세요."),
      },
    );
  };

  const goList = () => navigate("/posts");

  return {
    step,
    current,
    value,
    isInvalid,
    isLastStep,
    isPending,
    handleChange,
    handleSubmit,
    goList,
  };
};
