import * as styles from "./header.css.js";

const LEVEL_OPTIONS = [
  { value: 1, label: "Level 1 (3x3)" },
  { value: 2, label: "Level 2 (4x4)" },
  { value: 3, label: "Level 3 (5x5)" },
];

const Header = ({ tab, onChangeTab, level, onChangeLevel, time }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🔢 숫자 클릭 게임</h1>

      <nav className={styles.tabList}>
        <button
          type="button"
          aria-pressed={tab === "game"}
          className={styles.tabButton({ active: tab === "game" })}
          onClick={() => onChangeTab("game")}
        >
          게임
        </button>
        <button
          type="button"
          aria-pressed={tab === "ranking"}
          className={styles.tabButton({ active: tab === "ranking" })}
          onClick={() => onChangeTab("ranking")}
        >
          랭킹
        </button>
      </nav>

      {tab === "game" && (
        <div className={styles.levelInfo}>
          <select
            aria-label="게임 레벨 선택"
            className={styles.levelSelect}
            value={level}
            onChange={(e) => onChangeLevel(Number(e.target.value))}
          >
            {LEVEL_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className={styles.timer}>{time.toFixed(2)}초</p>
        </div>
      )}
    </header>
  );
};

export default Header;
