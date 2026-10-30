import * as styles from "./header.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        PLAY SOPT <span className={styles.highlight}>MOVIE</span>
      </h1>
    </header>
  );
}
