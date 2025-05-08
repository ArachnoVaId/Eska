import { cn } from "@/lib/utils";

interface HighlightedLabelProps {
  children?: React.ReactNode;
  className?: string;
}

const HighlightedLabel = ({ children, className="hijau-ideas" }: HighlightedLabelProps) => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.40)",
        textShadow: "0px 4px 10px rgba(0, 0, 0, 0.50)",
      }}
      className={cn(
        "flex items-center max-lg:rounded-4xl rounded-[64px] max-lg:px-3 px-6 py-1 border border-putih",
        className,
      )}
    >
      <p className="text-putih max-lg:text-sm max-xl:text-xl text-2xl text-center font-semibold italic">
        {children}
      </p>
    </div>
  );
};

export default HighlightedLabel;
