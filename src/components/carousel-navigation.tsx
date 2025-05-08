import { Button } from "@/components/ui/button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";

interface CarouselNavigationProps {
  current: number;
  total: number;
  api: CarouselApi | null;
  className?: string;
  buttonStyle?: string;
  dotSize?: string;
}

export const CarouselNavigation = ({
  current,
  total,
  api,
  className,
  buttonStyle = "rounded-full text-putih text-3xl",
  dotSize = "w-5 h-5 max-lg:w-5 max-lg:h-5 max-xl:w-3 max-xl:h-3",
}: CarouselNavigationProps) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center space-x-9",
        className,
      )}
    >
      <Button
        onClick={() => api?.scrollPrev()}
        disabled={!api?.canScrollPrev()}
        className={cn(buttonStyle)}
        variant="hijauHover"
        size="icon"
      >
        <FaArrowLeftLong />
      </Button>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={cn(
              dotSize,
              "rounded-full",
              index === current ? "bg-putih" : "bg-putih opacity-50",
            )}
          />
        ))}
      </div>
      <Button
        onClick={() => api?.scrollNext()}
        disabled={!api?.canScrollNext()}
        className={cn(buttonStyle)}
        variant="hijauHover"
        size="icon"
      >
        <FaArrowRightLong />
      </Button>
    </div>
  );
};
