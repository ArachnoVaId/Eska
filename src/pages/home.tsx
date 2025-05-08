import AboutUs from "@/components/home/aboutus";
import Hero from "@/components/home/hero";
import SeriesOfEvents from "@/components/home/series-of-events/series-of-events";
import OurMediaPartners from "@/components/collab/mediapartners";
import OurSponsors from "@/components/collab/sponsors";

const Home = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />
      <AboutUs />
      <SeriesOfEvents />
      <OurSponsors />
      <OurMediaPartners variant="home" />
    </main>
  );
};

export default Home;
