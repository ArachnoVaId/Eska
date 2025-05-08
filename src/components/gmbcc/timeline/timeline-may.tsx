import HighlightedLabel from "@/components/ideas/timeline/highlighted-label";
import { cn } from "@/lib/utils";

const TimelineMay = () => {
  const textStyle =
    "text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic text-center";
  const spacingStyle = "flex flex-col max-lg:space-y-3 space-y-7 items-center";

  return (
    <>
      <div className={spacingStyle}>
        <HighlightedLabel className="gmbcc">COMPETITION</HighlightedLabel>
        <h3 className={textStyle}>PRELIMINARY ROUND CASE DISTRIBUTION</h3>
        <HighlightedLabel className="biru-cyan">
          May 12th - May 13th, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>PRELIMINARY ROUND SUBMISSION</h3>
        <HighlightedLabel className="biru-cyan">
          May 25th, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>PRELIMINARY ROUND SCORING PERIOD</h3>
        <HighlightedLabel className="biru-cyan">
          May 26th - May 30th, 2025
        </HighlightedLabel>
      </div>
      <div className={cn(spacingStyle, "max-lg:mt-10 mt-14")}>
        <HighlightedLabel className="gmbcc">SIDE EVENTS</HighlightedLabel>
        <h3 className={textStyle}>BOOTCAMP</h3>
        <HighlightedLabel className="biru-cyan">
          May 30th, 2025
        </HighlightedLabel>
      </div>
    </>
  );
};

export default TimelineMay;
