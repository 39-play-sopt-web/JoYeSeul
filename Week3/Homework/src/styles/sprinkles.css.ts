import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { media } from "./token";

const margin = { ...vars.spacing, auto: "auto" };

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": media.tablet },
    desktop: { "@media": media.desktop },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "grid"],
    flexDirection: ["row", "column"],
    flexWrap: ["nowrap", "wrap"],
    justifyContent: ["flex-start", "flex-end", "center", "space-between"],
    alignItems: ["flex-start", "flex-end", "center"],
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
    },
    gap: vars.spacing,
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: margin,
    marginBottom: margin,
    marginLeft: margin,
    marginRight: margin,
    fontSize: vars.fontSize,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingInline: ["paddingLeft", "paddingRight"],
    paddingBlock: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginInline: ["marginLeft", "marginRight"],
    marginBlock: ["marginTop", "marginBottom"],
  },
});

const staticProperties = defineProperties({
  properties: {
    color: {
      textSubtle: vars.color.text.subtle,
      textNormal: vars.color.text.normal,
      textStrong: vars.color.text.strong,
      textInverted: vars.color.text.inverted,
      primary: vars.color.primary.normal,
      primaryStrong: vars.color.primary.strong,
    },
    backgroundColor: vars.color.background,
    borderColor: vars.color.border,
    borderRadius: vars.borderRadius,
    fontWeight: vars.fontWeight,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  staticProperties,
);
