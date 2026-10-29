import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body", {
  fontFamily: "system-ui, -apple-system, sans-serif",
  fontSize: vars.fontSize.md,
  color: vars.color.text.normal,
  backgroundColor: vars.color.background.normal,
});
