import NavItem from "@/components/navItem/NavItem";
import { PART_KEY } from "@/constants/storage";
import { useLogout } from "@/hooks/useLogout";

export default function Header() {
  const handleLogout = useLogout();
  const part = localStorage.getItem(PART_KEY);

  return (
    <header className="flex w-full items-center justify-between border-b border-line p-4">
      <div className="flex items-center gap-3">
        <span className="text-title-lg">
          PLAY SOPT <span className="text-primary">BOARD</span>
        </span>
        {part && <span className="text-caption text-primary">{part} 파트</span>}
      </div>
      <nav>
        <ul className="flex gap-2 text-label">
          <li>
            <NavItem to="/posts" end>
              게시글 목록
            </NavItem>
          </li>
          <li>
            <NavItem to="/posts/new">글쓰기</NavItem>
          </li>
          <li>
            <button
              type="button"
              onClick={handleLogout}
              className="text-fg-muted transition-colors duration-200 hover:text-fg-default active:text-primary"
            >
              로그아웃
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
