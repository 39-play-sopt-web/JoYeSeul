import {
  RATING_FILTER_OPTIONS,
  type RatingKey,
} from "../../constants/ratingFilter";
import Chip from "./chip/Chip";
import * as styles from "./ratingFilter.css";

interface RatingFilterProps {
  selectedKey: RatingKey;
  onSelect: (key: RatingKey) => void;
}

export default function RatingFilter({
  selectedKey,
  onSelect,
}: RatingFilterProps) {
  return (
    <ul className={styles.list} aria-label="별점 필터">
      {RATING_FILTER_OPTIONS.map((option) => (
        <li key={option.key}>
          <Chip
            label={option.label}
            onClick={() => onSelect(option.key)}
            isSelected={selectedKey === option.key}
          />
        </li>
      ))}
    </ul>
  );
}
