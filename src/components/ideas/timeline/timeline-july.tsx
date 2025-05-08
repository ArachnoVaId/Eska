import { cn } from "@/lib/utils";
import HighlightedLabel from "./highlighted-label";

const TimelineJuly = () => {
  const titleStyle = "text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic text-center"

  return (
    <>
      <div className="flex flex-col max-lg:space-y-3 space-y-7 items-center">
        <HighlightedLabel>COMPETITION</HighlightedLabel>
        <div className="flex flex-row max-lg:space-x-3 space-x-7">
          <div className="flex flex-col max-lg:space-y-3 space-y-7 items-center">
            <h3 className={cn(titleStyle)}>FINAL</h3>
            <HighlightedLabel>July 8th, 2025</HighlightedLabel>
          </div>
          <div className="flex flex-col max-lg:space-y-3 space-y-7 items-center">
            <h3 className={cn(titleStyle)}>
              AWARDING NIGHT
            </h3>
            <HighlightedLabel>July 10th, 2025</HighlightedLabel>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-lg:mt-10 mt-14 max-lg:space-y-3 space-y-7 items-center">
        <HighlightedLabel>INSIGHT-SERIES</HighlightedLabel>
        <div className="flex flex-row max-lg:space-x-3 space-x-7">
          <div className="flex flex-col max-lg:space-x-1 space-y-7 items-center">
            <h3 className={cn(titleStyle)}>
              SUISTANABLE INSIGHT
            </h3>
            <HighlightedLabel>July 9th, 2025</HighlightedLabel>
          </div>
          <div className="flex flex-col max-lg:space-y-3 space-y-7 items-center">
            <h3 className={cn(titleStyle)}>
              CITY TOUR
            </h3>
            <HighlightedLabel>July 9th, 2025</HighlightedLabel>
          </div>
        </div>
        <h3 className={cn(titleStyle)}>
          IDEAS SUMMIT
        </h3>
        <HighlightedLabel>July 10th, 2025</HighlightedLabel>
      </div>
    </>
  );
};

export default TimelineJuly;
