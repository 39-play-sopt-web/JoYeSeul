import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";
import { media } from "../../styles/tokens";

export const header = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "lg",
    alignItems: "center",
    paddingInline: "xxl",
    paddingBlock: "md",
    backgroundColor: "white",
  }),
  {
    "@media": {
      [media.tablet]: {
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
      },
    },
  },
]);

export const title = style([
  sprinkles({
    fontSize: "lg",
    fontWeight: "bold",
    color: "strong",
  }),
  {
    justifySelf: "start",
  },
]);

export const tabList = style([
  sprinkles({
    display: "flex",
    gap: "sm",
  }),
]);

export const tabButton = recipe({
  base: [
    sprinkles({
      paddingInline: "lg",
      paddingBlock: "sm",
      borderRadius: "sm",
      fontSize: "md",
      fontWeight: "medium",
    }),
    {
      transition: "background-color 0.3s ease",
    },
  ],
  variants: {
    active: {
      true: {
        backgroundColor: vars.color.primary.normal,
        color: vars.color.text.strong,
        fontWeight: vars.fontWeight.bold,
      },
      false: {
        backgroundColor: vars.color.background.subtle,
        color: vars.color.text.subtle,
        ":hover": {
          backgroundColor: vars.color.background.hover,
        },
      },
    },
  },
});

export const levelInfo = style([
  sprinkles({
    display: "flex",
    gap: "md",
    alignItems: "center",
  }),
  {
    justifySelf: "end",
  },
]);

export const levelSelect = style([
  sprinkles({
    paddingInline: "md",
    paddingBlock: "sm",
    borderRadius: "sm",
    fontSize: "sm",
    color: "normal",
    backgroundColor: "white",
  }),
  {
    border: `1px solid ${vars.color.border.normal}`,
    cursor: "pointer",
    ":focus-visible": {
      outline: "none",
      borderColor: vars.color.primary.normal,
      boxShadow: `0 0 0 2px ${vars.color.primary.subtle}`,
    },
  },
]);

export const timer = style([
  sprinkles({
    fontSize: "md",
    fontWeight: "bold",
    color: "strong",
    backgroundColor: "strong",
    paddingInline: "md",
    paddingBlock: "sm",
    borderRadius: "sm",
  }),
  {
    fontVariantNumeric: "tabular-nums",
    minWidth: "5em",
    textAlign: "center",
  },
]);
