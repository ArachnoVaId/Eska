import { InsightCorner } from "@/types/insight-corner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type InsightCardProps = InsightCorner;

const InsightCard = ({
  title,
  href,
  image,
  color = "hijau-ideas",
}: InsightCardProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl shadow-lg max-sm:w-[300px] max-lg:w-[500px] max-xl:max-w-[450px] max-w-[500px] w-full",
        color,
      )}
    >
      {/* Image */}
      <div className="w-full max-lg:h-[180px] h-[250px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="max-lg:px-3 max-xl:px-4 max-lg:py-5 max-xl:py-6 px-6 py-8">
        <h3
          style={{
            textShadow:
              "0px 0px 30px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.50)",
          }}
          className="text-putih font-bold max-sm:text-lg max-lg:text-xl max-xl:text-2xl text-3xl leading-snug mb-6"
        >
          {title}
        </h3>
        <Button
          asChild
          variant="biruMudaHover"
          className={cn("w-[70%]", "rounded-full text-putih")}
        >
          <a href={href}>
            <div className="flex items-center font-medium max-sm:text-[12px] max-lg:text-sm max-xl:text-xl text-2xl space-x-2">
              <span>Read More</span>
              <ArrowRight size={16} />
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default InsightCard;
