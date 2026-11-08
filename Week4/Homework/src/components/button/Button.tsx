import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md border border-transparent text-label transition-colors duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-fg-on-primary enabled:hover:bg-primary-hover enabled:active:bg-primary-pressed disabled:bg-disabled disabled:text-fg-disabled",
        secondary:
          "border-line-strong bg-transparent text-fg-default enabled:hover:bg-white/5 enabled:active:bg-white/10 disabled:border-line disabled:text-fg-disabled",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-12 px-5",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  variant,
  size,
  fullWidth,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
}
