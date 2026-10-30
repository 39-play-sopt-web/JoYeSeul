import { useState } from "react";
import Header from "../../components/header/Header";
import RatingFilter from "../../components/ratingFilter/RatingFilter.tsx";
import * as styles from "./home.css.ts";

export default function Home() {
  const [selectedRate, setSelectedRate] = useState<string>("all");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>영화 둘러보기</h2>
        <RatingFilter
          selectedKey={selectedRate}
          onSelect={(key) => setSelectedRate(key)}
        />
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
