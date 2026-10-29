import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./tokens";

export const vars = createGlobalTheme(":root", {
  color: {
    text: {
      normal: colors.gray600,
      subtle: colors.gray400,
      strong: colors.gray900,
      inverted: colors.white,
    },
    primary: {
      normal: colors.sky500,
      subtle: colors.sky100,
      strong: colors.sky700,
    },
    background: {
      white: colors.white,
      subtle: colors.sky50,
      normal: colors.sky200,
      strong: colors.sky300,
      hover: colors.sky100,
    },
    border: {
      normal: colors.gray200,
      subtle: colors.gray100,
      strong: colors.gray400,
    },
    danger: {
      normal: colors.red500,
      subtle: colors.red100,
    },
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "28px",
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    bold: "700",
  },
  spacing: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    xxl: "32px",
  },
  borderRadius: {
    sm: "8px",
    md: "12px",
    full: "9999px",
  },
});
