import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body", {
  fontFamily:
    '"Pretendard Variable", Pretendard, system-ui, -apple-system, sans-serif',
  fontSize: vars.fontSize.md,
  color: vars.color.text.normal,
  backgroundColor: vars.color.background.base,
});
