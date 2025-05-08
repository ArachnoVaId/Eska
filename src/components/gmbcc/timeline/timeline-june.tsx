import HighlightedLabel from "@/components/ideas/timeline/highlighted-label";

const TimelineJune = () => {
  const textStyle =
    "text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic text-center";
  const spacingStyle = "flex flex-col max-lg:space-y-3 space-y-7 items-center";

  return (
    <>
      <div className={spacingStyle}>
        <HighlightedLabel className="gmbcc">COMPETITION</HighlightedLabel>
        <h3 className={textStyle}>SEMIFINALIST ANNOUNCEMENT</h3>
        <HighlightedLabel className="biru-cyan">
          June 1st, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>SEMIFINALIST ROUND CASE DISTRIBUTION</h3>
        <HighlightedLabel className="biru-cyan">
          June 4th, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>SEMIFINALIST ROUND SUBMISSION</h3>
        <HighlightedLabel className="biru-cyan">
          June 20th, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>SEMIFINALIST ROUND D-DAY</h3>
        <HighlightedLabel className="biru-cyan">
          June 21st - June 22nd, 2025
        </HighlightedLabel>
        <h3 className={textStyle}>FINALIST ANNOUNCEMENT</h3>
        <HighlightedLabel className="biru-cyan">
          June 25th, 2025
        </HighlightedLabel>
      </div>
    </>
  );
};

export default TimelineJune;
