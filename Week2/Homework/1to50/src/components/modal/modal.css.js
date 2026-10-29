import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const overlay = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 100,
  },
]);

export const modal = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "md",
    padding: "lg",
    borderRadius: "md",
    backgroundColor: "white",
  }),
  {
    minWidth: "300px",
    boxShadow: "0 8px 24px rgba(124, 198, 238, 0.35)",
  },
]);

export const title = style([
  sprinkles({
    fontSize: "md",
    fontWeight: "medium",
    color: "normal",
  }),
]);

export const description = style([
  sprinkles({
    fontSize: "xl",
    fontWeight: "bold",
    color: "strong",
  }),
]);

export const actionButton = style([
  sprinkles({
    padding: "md",
    borderRadius: "md",
    fontSize: "md",
    fontWeight: "bold",
    color: "inverted",
    backgroundColor: "strong",
  }),
  {
    width: "100%",
  },
]);
