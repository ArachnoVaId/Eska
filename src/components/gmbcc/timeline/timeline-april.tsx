import HighlightedLabel from "@/components/ideas/timeline/highlighted-label";
import { cn } from "@/lib/utils";

const TimelineApril = () => {
  const textStyle =
    "text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic text-center";
  const spacingStyle = "flex flex-col max-lg:space-y-3 space-y-7 items-center";

  return (
    <>
      <div className={spacingStyle}>
        <HighlightedLabel className="gmbcc">PRE-EVENTS</HighlightedLabel>
        <h3 className={textStyle}>GLOBAL COACHING SESSION</h3>
        <HighlightedLabel className="biru-cyan">April 12th, 2025</HighlightedLabel>
      </div>
      <div className={cn(spacingStyle, "max-lg:mt-10 mt-14")}>
        <HighlightedLabel className="gmbcc">COMPETITION</HighlightedLabel>
        <h3 className={textStyle}>PRELIMINARY ROUND REGISTRATION</h3>
        <HighlightedLabel className="biru-cyan">April 12th, 2025</HighlightedLabel>
      </div>
    </>
  );
};

export default TimelineApril;
