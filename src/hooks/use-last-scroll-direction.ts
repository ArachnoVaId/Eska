import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down" | null;

export const useLastScrollDirection = (): [ScrollDirection, boolean] => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
      }

      setIsScrolled(currentScrollTop > window.innerHeight * 0.6);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return [scrollDirection, isScrolled];
};
