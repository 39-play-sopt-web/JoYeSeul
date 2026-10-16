import { style } from "@vanilla-extract/css";
import { sprinkles } from "./styles/sprinkles.css";

export const layout = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
  }),
  {
    minHeight: "100dvh",
  },
]);

export const main = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "xxl",
  }),
  {
    flex: 1,
  },
]);
