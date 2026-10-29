import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme.css";

export const container = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "lg",
    paddingBlock: "lg",
  }),
  {
    alignSelf: "flex-start",
    width: "min(90vw, 640px)",
  },
]);

export const topBar = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  {
    width: "100%",
  },
]);

export const title = style([
  sprinkles({
    fontSize: "lg",
    fontWeight: "bold",
    color: "strong",
  }),
]);

export const resetButton = style([
  sprinkles({
    paddingInline: "md",
    paddingBlock: "sm",
    borderRadius: "sm",
    fontSize: "sm",
    fontWeight: "bold",
  }),
  {
    color: vars.color.danger.normal,
    border: `1px solid ${vars.color.danger.normal}`,
    transition: "background-color 0.2s, color 0.2s",
    ":hover": {
      backgroundColor: vars.color.danger.subtle,
    },
  },
]);

export const table = style([
  sprinkles({
    backgroundColor: "white",
    borderRadius: "md",
  }),
  {
    width: "100%",
    borderCollapse: "collapse",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(124, 198, 238, 0.25)",
  },
]);

export const th = style([
  sprinkles({
    padding: "md",
    fontSize: "md",
    fontWeight: "bold",
    color: "inverted",
    backgroundColor: "strong",
  }),
  {
    textAlign: "center",
  },
]);

export const td = style([
  sprinkles({
    padding: "md",
    fontSize: "sm",
    color: "normal",
  }),
  {
    textAlign: "left",
    fontVariantNumeric: "tabular-nums",
    borderBottom: `1px solid ${vars.color.border.subtle}`,
  },
]);

export const empty = style([
  sprinkles({
    fontSize: "md",
    color: "normal",
    paddingBlock: "xxl",
  }),
  {
    textAlign: "center",
  },
]);
