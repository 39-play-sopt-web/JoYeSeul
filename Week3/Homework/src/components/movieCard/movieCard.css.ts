import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme.css";

export const link = style([
  sprinkles({
    display: "block",
    borderRadius: "md",
  }),
  {
    height: "100%",
    ":focus-visible": {
      outline: `2px solid ${vars.color.primary.normal}`,
      outlineOffset: "2px",
    },
  },
]);

export const card = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "subtle",
    borderRadius: "md",
  }),
  {
    height: "100%",
    overflow: "hidden",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px ${vars.color.primary.subtle}`,
    },
  },
]);

export const posterWrapper = style([
  {
    position: "relative",
    aspectRatio: "2 / 3",
    backgroundColor: vars.color.background.normal,
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

export const rating = style([
  sprinkles({
    color: "textInverted",
    paddingBlock: "xs",
    paddingInline: "sm",
    borderRadius: "sm",
    fontSize: "xs",
    fontWeight: "semibold",
  }),
  {
    position: "absolute",
    top: vars.spacing.sm,
    left: vars.spacing.sm,
    backgroundColor: vars.color.primary.normal,
  },
]);

export const info = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    padding: "md",
  }),
]);

export const title = style([
  sprinkles({
    fontSize: "md",
    fontWeight: "semibold",
    color: "textStrong",
  }),
  {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
]);

export const date = style([
  sprinkles({
    fontSize: "xs",
    color: "primary",
  }),
]);

export const overview = style([
  sprinkles({
    fontSize: "xs",
    color: "textSubtle",
  }),
  {
    marginTop: vars.spacing.xs,
    lineHeight: 1.5,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);
