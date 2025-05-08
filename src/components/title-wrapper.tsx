import texture from "@/assets/noisy-background.webp";
import { cn } from "@/lib/utils";

interface TitleWrapperProps {
  label: string;
  color: string;
  variant: "top-left" | "bottom-left" | "hidden";
  className?: string;
}

const TitleWrapper = ({
  label,
  color,
  variant,
  className,
}: TitleWrapperProps) => {
  return (
    <span
      className={cn(
        " text-black relative max-lg:px-3 px-5 max-lg:pt-2 pt-5 max-lg:border-[3px] border-[5px] border-black max-lg:rounded-3xl rounded-[40px] overflow-hidden",
        color,
        className,
      )}
      style={{
        boxShadow: "0px 0px 16px 0px #FFF",
        textShadow:
          "0px 0px 30px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.50)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[40px] opacity-50 z-20 pointer-events-none"
        style={{ backgroundImage: `url(${texture})` }}
      />
      {label}
      <div
        className={cn(
          "absolute z-30 w-[60px] h-[60px]",
          variant === "top-left"
            ? "-bottom-[20px] -right-[30px]"
            : variant === "bottom-left"
              ? "-top-[10px] -right-[30px]"
              : variant === "hidden"
                ? "hidden"
                : "",
        )}
      >
        {/* <img
          src={star}
          alt="Star Ornament"
          className="w-full h-full object-cover"
          draggable={false}
        /> */}
      </div>
      <div
        className={cn(
          "absolute z-30 w-[60px] h-[60px]",
          variant === "top-left"
            ? "-top-[10px] -left-[30px]"
            : variant === "bottom-left"
              ? "-bottom-[20px] -left-[30px]"
              : variant === "hidden"
                ? "hidden"
                : "",
        )}
      >
        {/* <img
          src={star}
          alt="Star Ornament"
          className="w-full h-full object-cover"
          draggable={false}
        /> */}
      </div>
    </span>
  );
};

export default TitleWrapper;
