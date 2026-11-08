import Button from "@/components/button/Button";
import TextField from "@/components/textField/TextField";
import { useSearchKeyword } from "@/hooks/useSearchKeyword";

export default function Search() {
  const { keyword, canSearch, handleChange, handleSubmit } = useSearchKeyword();

  return (
    <form role="search" className="flex gap-2" onSubmit={handleSubmit}>
      <TextField
        aria-label="게시글 제목 검색"
        type="search"
        value={keyword}
        onChange={handleChange}
        placeholder="검색어를 입력하세요"
        className="flex-1"
      />
      <Button type="submit" size="sm" disabled={!canSearch}>
        검색
      </Button>
    </form>
  );
}
