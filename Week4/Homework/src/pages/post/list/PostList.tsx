import Card from "@/components/card/Card";
import Search from "@/components/search/Search";
import { usePostListPage } from "@/hooks/post/usePostListPage";

export default function PostList() {
  const {
    keyword,
    posts,
    isPending,
    isError,
    isEmpty,
    isFetchingNextPage,
    bottomRef,
  } = usePostListPage();

  return (
    <section className="mx-auto flex max-w-180 flex-col gap-4 px-4 py-4">
      <h1 className="sr-only">게시글 목록</h1>
      <Search key={keyword} />
      {isPending && (
        <p className="py-4 text-center text-body text-fg-muted">
          불러오는 중...
        </p>
      )}
      {isError && (
        <p className="py-4 text-center text-body text-error">
          게시글을 불러오지 못했습니다.
        </p>
      )}
      {isEmpty && (
        <p className="py-4 text-center text-body text-fg-muted">
          게시글이 없습니다.
        </p>
      )}
      {posts && posts.length > 0 && (
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Card post={post} />
            </li>
          ))}
        </ul>
      )}

      <div ref={bottomRef} aria-hidden="true" />
      {isFetchingNextPage && (
        <p className="text-center text-caption text-fg-muted">
          더 불러오는 중...
        </p>
      )}
    </section>
  );
}
