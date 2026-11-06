import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../styles/sprinkles.css";
import { vars } from "../../../styles/theme.css";

export const chip = recipe({
  base: [
    sprinkles({
      paddingInline: "md",
      paddingBlock: "sm",
      borderRadius: "full",
      fontSize: "sm",
    }),
    {
      transition: "background-color 0.3s ease",
    },
  ],
  variants: {
    selected: {
      true: [
        sprinkles({
          color: "textInverted",
          fontWeight: "semibold",
        }),
        {
          backgroundColor: vars.color.primary.normal,
        },
      ],
      false: [
        sprinkles({
          color: "textSubtle",
          backgroundColor: "normal",
          fontWeight: "normal",
        }),
        {
          ":hover": {
            backgroundColor: vars.color.background.hover,
            color: vars.color.text.normal,
          },
        },
      ],
    },
  },
  defaultVariants: {
    selected: false,
  },
});
