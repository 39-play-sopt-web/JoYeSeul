import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";

export const container = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "xl",
    paddingBlock: "md",
  }),
]);

export const title = style([
  sprinkles({
    fontSize: "md",
    fontWeight: "normal",
    color: "normal",
  }),
]);

export const nextNumber = style([
  sprinkles({
    fontSize: "xl",
    fontWeight: "bold",
    color: "strong",
  }),
]);

export const board = recipe({
  base: {
    display: "grid",
    gap: vars.spacing.md,
    width: "min(90vw, 400px)",
  },
  variants: {
    size: {
      3: { gridTemplateColumns: "repeat(3, 1fr)" },
      4: { gridTemplateColumns: "repeat(4, 1fr)" },
      5: { gridTemplateColumns: "repeat(5, 1fr)" },
    },
  },
});

export const number = style([
  sprinkles({
    borderRadius: "md",
    fontSize: "lg",
    fontWeight: "bold",
    color: "strong",
    backgroundColor: "white",
  }),
  {
    aspectRatio: "1",
    transition: "background-color 0.15s ease, transform 0.1s ease",
    ":hover": {
      backgroundColor: vars.color.primary.subtle,
    },
    ":disabled": {
      backgroundColor: vars.color.background.strong,
      cursor: "default",
    },
    ":active": {
      transform: "scale(0.9)",
    },
  },
]);
