import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const list = style([
  sprinkles({
    display: "flex",
    flexWrap: "wrap",
    gap: "sm",
  }),
]);
