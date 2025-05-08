import HighlightedLabel from "@/components/ideas/timeline/highlighted-label";
import { cn } from "@/lib/utils";

const TimelineJuly = () => {
  const textStyle =
    "text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic text-center";
  const spacingStyle = "flex flex-col max-lg:space-y-3 space-y-7 items-center";

  return (
    <>
      <div className={spacingStyle}>
        <HighlightedLabel className="gmbcc">COMPETITION</HighlightedLabel>
        <h3 className={textStyle}>FINAL ROUND CASE DISTRIBUTION</h3>
        <HighlightedLabel className="biru-cyan">
          July 4th - July 5th, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>FINAL ROUND D-DAY</h3>
        <HighlightedLabel className="biru-cyan">
          July 15th, 2025
        </HighlightedLabel>
      </div>
      <div className={cn(spacingStyle, "max-lg:mt-10 mt-14")}>
        <HighlightedLabel className="gmbcc">SIDE EVENTS</HighlightedLabel>
        <h3 className={textStyle}>MENTORING</h3>
        <HighlightedLabel className="biru-cyan">
          July 14th, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>FIELD TRIP</h3>
        <HighlightedLabel className="biru-cyan">
          July 16th, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>AWARDING NIGHT</h3>
        <HighlightedLabel className="biru-cyan">
          July 16th, 2025
        </HighlightedLabel>
      </div>
    </>
  );
};

export default TimelineJuly;
