import Header from "../../components/header/Header";
import * as styles from "./home.css.ts";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>영화 둘러보기</h2>
        <div>카테고리</div>
        <ul className={styles.list}>
          <li>영화1</li>
          <li>영화2</li>
          <li>영화3</li>
          <li>영화4</li>
          <li>영화5</li>
          <li>영화6</li>
          <li>영화7</li>
          <li>영화8</li>
        </ul>
      </main>
    </>
  );
}
