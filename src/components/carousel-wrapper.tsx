import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

interface CarouselWrapperProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  onApiReady?: (api: CarouselApi) => void;
  onCurrentChange?: (index: number) => void;
  loop?: boolean;
  className?: string;
  contentClassName?: string;
  itemsPerSlide?: number;
}

export function CarouselWrapper<T>({
  items,
  renderItem,
  onApiReady,
  onCurrentChange,
  loop = false,
  className,
  contentClassName,
  itemsPerSlide = 1, // 👈 default
}: CarouselWrapperProps<T>) {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      onCurrentChange?.(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    onSelect();
    onApiReady?.(api);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onApiReady, onCurrentChange]);

  const getWidthClass = (totalItems: number, perSlide: number) => {
    if (totalItems < perSlide) {
      return "basis-full"; // make it full width if not enough items
    }

    switch (perSlide) {
      case 1:
        return "basis-full";
      case 2:
        return "max-lg:basis-full basis-1/2";
      case 3:
        return "basis-1/3";
      case 4:
        return "basis-1/4";
      default:
        return "basis-full";
    }
  };

  return (
    <Carousel opts={{ loop }} setApi={setApi} className={className}>
      <CarouselContent className={contentClassName}>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "flex justify-center",
              getWidthClass(items.length, itemsPerSlide),
            )}
          >
            {renderItem(item, index)}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
