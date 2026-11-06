import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme.css";

export const header = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    paddingInline: "lg",
    paddingBlock: "md",
  }),
  {
    borderBottom: `1px solid ${vars.color.border.subtle}`,
  },
]);

export const title = style([
  sprinkles({
    fontSize: "xl",
    fontWeight: "bold",
    color: "textStrong",
  }),
]);

export const highlight = style([
  sprinkles({
    color: "primary",
  }),
]);
