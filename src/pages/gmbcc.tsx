import OurMediaPartners from "@/components/collab/mediapartners";
import OurSponsors from "@/components/collab/sponsors";
import GMBCCAbout from "@/components/gmbcc/about";
import AfterMovie from "@/components/gmbcc/after-movie";
import GMBCCBenefits from "@/components/gmbcc/benefits";
import GMBCCCalls from "@/components/gmbcc/calling";
import Faq from "@/components/gmbcc/faq/faq";
import GMBCCHero from "@/components/gmbcc/hero";
import PastParticipants from "@/components/gmbcc/pastparticipants";
import RegisterGmbcc from "@/components/gmbcc/register/register";
import SeriesOfEventsGMBCC from "@/components/gmbcc/series-of-events/series-of-events";
import TestimonialsGmbcc from "@/components/gmbcc/testimonials/testimonials-gmbcc";
import TimelineGmbcc from "@/components/gmbcc/timeline/timeline";

const GMBCC = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <GMBCCHero />
      <AfterMovie />
      <GMBCCAbout />
      <GMBCCBenefits />
      <PastParticipants />
      <SeriesOfEventsGMBCC />
      <TimelineGmbcc />
      <TestimonialsGmbcc />
      <RegisterGmbcc />
      <Faq />
      <GMBCCCalls />
      <OurSponsors color="gmbcc" />
      <OurMediaPartners
        variant="gmbcc"
        color="gmbcc"
      />
    </main>
  );
};

export default GMBCC;
