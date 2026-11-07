import { cn } from "@/utils/cn";
import { useId, type ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & {
  label?: string;
  limit?: number;
};

export default function TextField({
  type = "text",
  id,
  label,
  limit,
  value,
  className,
  ...props
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const length = String(value ?? "").length;
  const isOver = limit !== undefined && length > limit;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label htmlFor={inputId} className="text-label text-fg-muted">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        aria-invalid={isOver || undefined}
        className="h-9 w-full rounded-md border border-line bg-surface px-3 text-label transition-colors duration-200 hover:border-line-strong disabled:cursor-not-allowed disabled:text-fg-disabled aria-invalid:border-error aria-invalid:focus-visible:outline-error"
        {...props}
      />
      {limit !== undefined && (
        <div className="flex items-center justify-between text-caption">
          <span className="text-error">
            {isOver && `${limit}자를 초과할 수 없습니다.`}
          </span>
          <span className={isOver ? "text-error" : "text-fg-subtle"}>
            {length} / {limit}
          </span>
        </div>
      )}
    </div>
  );
}
