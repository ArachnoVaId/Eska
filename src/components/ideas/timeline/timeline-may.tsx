import HighlightedLabel from "./highlighted-label";

const TimelineMay = () => {
  return (
    <>
      <div className="flex flex-col max-lg:space-y-3 space-y-7 items-center">
        <HighlightedLabel>COMPETITION</HighlightedLabel>
        <h3 className="text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic">
          PROPOSAL REGISTRATION
        </h3>
        <HighlightedLabel>May 10th - June 17th, 2025</HighlightedLabel>
      </div>
      <div className="flex flex-col max-lg:mt-10 mt-14 space-y-7 items-center">
        <HighlightedLabel>INSIGHT-SERIES</HighlightedLabel>
        <div className="flex flex-row max-lg:space-x-3 space-x-7">
          <div className="flex flex-col space-y-7 items-center">
            <h3 className="text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic">
              BOOTCAMP
            </h3>
            <HighlightedLabel>May 31st - June 1st, 2025</HighlightedLabel>
          </div>
          <div className="flex flex-col max-lg:space-x-3 space-y-7 items-center">
            <h3 className="text-putih max-lg:text-lg max-xl:text-3xl text-4xl font-semibold italic">
              WEBINAR
            </h3>
            <HighlightedLabel>May 10th, 2025</HighlightedLabel>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineMay;
