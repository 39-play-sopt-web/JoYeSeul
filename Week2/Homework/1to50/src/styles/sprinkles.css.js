import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { media } from "./tokens";
import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": media.tablet },
    desktop: { "@media": media.desktop },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block"],
    flexDirection: ["row", "column"],
    justifyContent: ["flex-start", "flex-end", "center", "space-between"],
    alignItems: ["flex-start", "flex-end", "center"],
    gap: vars.spacing,
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    fontSize: vars.fontSize,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingInline: ["paddingLeft", "paddingRight"],
    paddingBlock: ["paddingTop", "paddingBottom"],
  },
});

const staticProperties = defineProperties({
  properties: {
    color: vars.color.text,
    backgroundColor: vars.color.background,
    borderRadius: vars.borderRadius,
    fontWeight: vars.fontWeight,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  staticProperties,
);
