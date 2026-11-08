import { useUpdatePost } from "@/hooks/post/usePost";
import type { Post } from "@/types/post";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useNavigate } from "react-router";

export const TITLE_LIMIT = 50;
export const CONTENT_LIMIT = 1000;

export const usePostEditForm = (post: Post) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: post.title,
    content: post.content,
  });
  const { mutate, isPending } = useUpdatePost();

  const isInvalid =
    form.title.trim() === "" ||
    form.content.trim() === "" ||
    form.title.length > TITLE_LIMIT ||
    form.content.length > CONTENT_LIMIT;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

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

  const cancel = () => navigate(-1);

  return { form, isInvalid, isPending, handleChange, handleSubmit, cancel };
};
