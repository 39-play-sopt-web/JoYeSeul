import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme.css";
import { media } from "../../styles/token";

export const page = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "xxl",
    marginInline: "auto",
    paddingInline: { mobile: "md", desktop: "xxl" },
    paddingBlock: "xl",
  }),
  {
    width: "100%",
    maxWidth: "1200px",
  },
]);

export const backLink = style([
  sprinkles({
    fontSize: "sm",
    fontWeight: "medium",
    color: "primary",
  }),
  {
    alignSelf: "flex-start",
    transition: "color 0.2s ease",
    ":hover": {
      color: vars.color.primary.strong,
    },
  },
]);

export const hero = style([
  sprinkles({
    borderRadius: "md",
    backgroundColor: "subtle",
  }),
  {
    position: "relative",
    overflow: "hidden",
    border: `1px solid ${vars.color.border.subtle}`,
    "::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: `linear-gradient(180deg, rgba(23, 24, 28, 0.55) 0%, ${vars.color.background.base} 100%)`,
    },
    "@media": {
      [media.tablet]: {
        selectors: {
          "&::before": {
            background: `linear-gradient(90deg, ${vars.color.background.base} 0%, rgba(23, 24, 28, 0.88) 45%, rgba(23, 24, 28, 0.45) 100%)`,
          },
        },
      },
    },
  },
]);

export const heroImage = style([
  {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 20%",
  },
]);

export const heroContent = style([
  sprinkles({
    display: "flex",
    flexDirection: {
      mobile: "column",
      tablet: "row",
    },
    alignItems: {
      mobile: "flex-start",
      tablet: "center",
    },
    gap: {
      mobile: "lg",
      tablet: "xxl",
    },
    padding: {
      mobile: "lg",
      tablet: "xxl",
    },
  }),
  {
    position: "relative",
    zIndex: 2,
  },
]);

export const posterWrapper = style([
  sprinkles({
    borderRadius: "md",
    backgroundColor: "normal",
  }),
  {
    position: "relative",
    flexShrink: 0,
    width: 140,
    aspectRatio: "2 / 3",
    overflow: "hidden",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.55)",
    "@media": {
      [media.tablet]: { width: 180 },
      [media.desktop]: { width: 220 },
    },
  },
]);

export const poster = style([
  {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
]);

export const noPoster = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "sm",
    color: "textSubtle",
  }),
  {
    position: "absolute",
    inset: 0,
  },
]);

export const info = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "lg",
  }),
  {
    minWidth: 0,
  },
]);

export const title = style([
  sprinkles({
    fontSize: {
      mobile: "xl",
      desktop: "xxl",
    },
    fontWeight: "bold",
    color: "textStrong",
  }),
  {
    lineHeight: 1.25,
    wordBreak: "keep-all",
  },
]);

export const meta = style([
  sprinkles({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "sm",
    fontSize: "sm",
    color: "textNormal",
  }),
]);

export const rating = style([
  sprinkles({
    paddingInline: "sm",
    paddingBlock: "xs",
    borderRadius: "sm",
    fontSize: "sm",
    fontWeight: "bold",
    color: "textInverted",
    marginRight: "xs",
  }),
  {
    backgroundColor: vars.color.primary.normal,
  },
]);

export const dot = style([
  sprinkles({
    color: "textSubtle",
  }),
]);

export const status = style([
  sprinkles({
    paddingInline: "sm",
    paddingBlock: "xs",
    borderRadius: "full",
    fontSize: "xs",
    fontWeight: "semibold",
    color: "primary",
    marginLeft: "xs",
  }),
  {
    border: `1px solid ${vars.color.primary.subtle}`,
  },
]);

export const genres = style([
  sprinkles({
    display: "flex",
    flexWrap: "wrap",
    gap: "xs",
  }),
]);

export const genre = style([
  sprinkles({
    paddingInline: "md",
    paddingBlock: "xs",
    borderRadius: "full",
    fontSize: "xs",
    fontWeight: "medium",
    color: "textNormal",
  }),
  {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
  },
]);

export const section = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "lg",
  }),
]);

export const sectionTitle = style([
  sprinkles({
    fontSize: "lg",
    fontWeight: "bold",
    color: "textStrong",
  }),
]);

export const overview = style([
  sprinkles({
    fontSize: "md",
    color: "textNormal",
  }),
  {
    lineHeight: 1.8,
    wordBreak: "keep-all",
  },
]);

export const infoGrid = style([
  sprinkles({
    display: "grid",
    gridTemplateColumns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: "md",
  }),
]);

export const infoItem = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "sm",
    padding: "lg",
    borderRadius: "md",
    backgroundColor: "subtle",
  }),
  {
    border: `1px solid ${vars.color.border.subtle}`,
  },
]);

export const infoLabel = style([
  sprinkles({
    fontSize: "xs",
    fontWeight: "medium",
    color: "textSubtle",
  }),
]);

export const infoValue = style([
  sprinkles({
    fontSize: "md",
    fontWeight: "semibold",
    color: "textStrong",
  }),
  {
    lineHeight: 1.5,
    wordBreak: "keep-all",
  },
]);

export const message = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "md",
    paddingBlock: "xxxl",
    fontSize: "sm",
    color: "textSubtle",
  }),
  { textAlign: "center" },
]);
