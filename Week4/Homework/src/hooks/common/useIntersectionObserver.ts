import { useEffect, useRef } from "react";

export const useIntersectionObserver = (
  onIntersect: () => void,
  enabled: boolean,
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!enabled || !target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      { rootMargin: "200px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [onIntersect, enabled]);

  return ref;
};
