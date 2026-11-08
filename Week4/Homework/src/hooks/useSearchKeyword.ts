import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useSearchParams } from "react-router";

const MIN_KEYWORD_LENGTH = 2;

export const useSearchKeyword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>(
    searchParams.get("query") ?? "",
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    if (value.trim() === "") {
      setSearchParams({});
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ query: keyword.trim() });
  };

  return {
    keyword,
    canSearch: keyword.trim().length >= MIN_KEYWORD_LENGTH,
    handleChange,
    handleSubmit,
  };
};
