import Button from "@/components/button/Button";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "react-router";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>(
    searchParams.get("query") ?? "",
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ query: keyword.trim() });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    if (value.trim() === "") {
      setSearchParams({});
    }
  };

  return (
    <form role="search" className="flex gap-2" onSubmit={handleSubmit}>
      <input
        aria-label="게시글 제목 검색"
        type="search"
        value={keyword}
        onChange={handleChange}
        placeholder="검색어를 입력하세요"
        className="h-9 flex-1 rounded-md border border-line-strong bg-surface px-3 text-label"
      />
      <Button type="submit" size="sm" disabled={keyword.trim().length === 0}>
        검색
      </Button>
    </form>
  );
}
