import Card from "@/components/card/Card";
import Search from "@/components/search/Search";

const MOCK_POSTS = [
  {
    id: 1,
    title: "주말에 읽은 책 추천",
    content:
      "가볍게 읽을 수 있는 에세이를 한 권 읽었습니다. 짧은 글이 여러 편 묶여 있어서 출퇴근길에 조금씩 읽기 좋았어요. 문장이 담백하고 군더더기가 없어서 오래 기억에 남을 것 같습니다.",
    author: "하늘",
    createdAt: "2026-10-24T13:56:00",
  },
  {
    id: 2,
    title: "스터디원 모집합니다",
    content: "매주 토요일 오전에 함께 공부할 분을 찾고 있습니다.",
    author: "바다",
    createdAt: "2026-10-25T09:12:00",
  },
  {
    id: 3,
    title: "학교 앞 카페 추천",
    content: "조용하고 콘센트가 많아서 작업하기 좋은 곳이에요.",
    author: "구름",
    createdAt: "2026-10-26T18:30:00",
  },
  {
    id: 4,
    title: "오늘 날씨가 좋네요",
    content: "산책하기 딱 좋은 날씨입니다.",
    author: "나무",
    createdAt: "2026-10-27T21:47:00",
  },
  {
    id: 5,
    title: "분실물 찾습니다",
    content: "3층 강의실에 검은색 우산을 두고 왔습니다.",
    author: "별",
    createdAt: "2026-10-28T08:00:00",
  },
];

export default function PostList() {
  return (
    <section className="mx-auto flex max-w-180 flex-col gap-4 px-4 py-4">
      <h1 className="sr-only">게시글 목록</h1>
      <Search />
      <ul className="flex flex-col gap-4">
        {MOCK_POSTS.map((post) => (
          <li key={post.id}>
            <Card {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
