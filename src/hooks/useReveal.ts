import { useEffect, useRef } from "react";

export const useReveal = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            (e.target.querySelectorAll(".reveal") as NodeListOf<HTMLElement>).forEach((c) =>
              c.classList.add("in-view")
            );
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};
