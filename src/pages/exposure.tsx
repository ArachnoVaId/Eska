import OurMediaPartners from "@/components/collab/mediapartners";
import OurSponsors from "@/components/collab/sponsors";
import ExposureAbout1 from "@/components/exposure/about1";
import ExposureAbout2 from "@/components/exposure/about2";
import ExposureArticle from "@/components/exposure/article";
import ExposureHero from "@/components/exposure/hero";
import ExposureInfo from "@/components/exposure/info/exposure-info";
import SeriesOfEventsExposure from "@/components/exposure/series-of-events/series-of-events";
import WantToBePartner from "@/components/exposure/want-to-be-partner";

const EXPOSURE = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <ExposureHero />
      <ExposureAbout1 />
      <SeriesOfEventsExposure />
      <ExposureAbout2 />
      <ExposureInfo />
      <ExposureArticle />
      <WantToBePartner />
      <OurSponsors color="biru-muda" />
      <OurMediaPartners
        variant="exposure"
        color="biru-muda"
      />
    </main>
  );
};

export default EXPOSURE;
