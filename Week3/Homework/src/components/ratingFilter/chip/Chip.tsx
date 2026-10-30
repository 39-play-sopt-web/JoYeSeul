import * as styles from "./chip.css.ts";

interface ChipProps {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

export default function Chip({
  label,
  onClick,
  isSelected = false,
}: ChipProps) {
  return (
    <button
      type="button"
      className={styles.chip({ selected: isSelected })}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
