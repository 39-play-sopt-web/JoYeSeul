import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const main = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "xl",
    marginInline: "auto",
    paddingInline: {
      mobile: "lg",
      desktop: "xxl",
    },
    paddingBlock: "xxl",
  }),
  {
    width: "100%",
    maxWidth: "1200px",
  },
]);

export const title = style([
  sprinkles({
    fontSize: "lg",
    fontWeight: "bold",
    color: "textStrong",
  }),
]);

export const list = style([
  sprinkles({
    display: "grid",
    gridTemplateColumns: {
      mobile: 2,
      tablet: 3,
      desktop: 4,
      wide: 5,
    },
    gap: "lg",
  }),
]);
