import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./token";

export const vars = createGlobalTheme(":root", {
  color: {
    text: {
      subtle: colors.gray400,
      normal: colors.gray100,
      strong: colors.gray50,
      inverted: colors.gray950,
    },
    primary: {
      subtle: colors.sky900,
      normal: colors.sky500,
      strong: colors.sky300,
    },
    background: {
      base: colors.gray950,
      subtle: colors.gray900,
      normal: colors.gray800,
      strong: colors.gray600,
      hover: colors.gray700,
    },
    border: {
      subtle: colors.gray800,
      normal: colors.gray700,
      strong: colors.gray500,
    },
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "28px",
    xxl: "40px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    xxl: "32px",
    xxxl: "48px",
  },
  borderRadius: {
    sm: "8px",
    md: "12px",
    full: "9999px",
  },
});
