import { cn } from "@/utils/cn";
import { useId, type ComponentProps } from "react";

type TextAreaProps = ComponentProps<"textarea"> & {
  label?: string;
  limit?: number;
};

export default function TextArea({
  id,
  label,
  limit,
  value,
  className,
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const length = String(value ?? "").length;
  const isOver = limit !== undefined && length > limit;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label htmlFor={textareaId} className="text-label text-fg-muted">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        value={value}
        aria-invalid={isOver || undefined}
        className="min-h-60 w-full resize-none rounded-md border border-line bg-surface p-3 text-body transition-colors duration-200 hover:border-line-strong disabled:cursor-not-allowed disabled:text-fg-disabled aria-invalid:border-error aria-invalid:focus-visible:outline-error"
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
