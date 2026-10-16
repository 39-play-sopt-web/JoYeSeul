import * as styles from "./header.css.js";

const Header = ({ tab, onChangeTab, level, onChangeLevel }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🔢 숫자 클릭 게임</h1>

      <nav className={styles.tabList}>
        <button
          type="button"
          className={styles.tabButton({ active: tab === "game" })}
          onClick={() => onChangeTab("game")}
        >
          게임
        </button>
        <button
          type="button"
          className={styles.tabButton({ active: tab === "ranking" })}
          onClick={() => onChangeTab("ranking")}
        >
          랭킹
        </button>
      </nav>

      {tab === "game" && (
        <div className={styles.levelInfo}>
          <select
            className={styles.levelSelect}
            value={level}
            onChange={(e) => onChangeLevel(Number(e.target.value))}
          >
            <option value={1}>Level 1 (3x3)</option>
            <option value={2}>Level 2 (4x4)</option>
            <option value={3}>Level 3 (5x5)</option>
          </select>
          <p className={styles.timer}>0.00초</p>
        </div>
      )}
    </header>
  );
};

export default Header;
