import OurMediaPartners from "@/components/collab/mediapartners";
import OurSponsors from "@/components/collab/sponsors";
import IdeasAbout from "@/components/ideas/about";
import Faq from "@/components/ideas/faq";
import InsightCorner from "@/components/ideas/insight-corner/insight-corner";
import IdeasHero from "@/components/ideas/hero";
import NationalBusinessPlanCompetition from "@/components/ideas/nbpc";
import InsightSeries from "@/components/ideas/insight-series/insight-series";
import RegisterIdeas from "@/components/ideas/register/register";
import TestimonialsIdeas from "@/components/ideas/testimonials/testimonials-ideas";
import TimelineIdeas from "@/components/ideas/timeline/timeline";

const IDEAS = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <IdeasHero />
      <IdeasAbout />
      <NationalBusinessPlanCompetition />
      <InsightSeries />
      <TimelineIdeas />
      <TestimonialsIdeas />
      <RegisterIdeas />
      <InsightCorner />
      <Faq />
      <OurSponsors color="hijau-ideas" />
      <OurMediaPartners
        variant="ideas"
        color="hijau-ideas"
      />
    </main>
  );
};

export default IDEAS;
