import Background from "@/components/background";
import TitleWrapper from "@/components/title-wrapper";
import { testimonialsData } from "./testimonials-data";
import TestimonialsCard from "./testimonials-card";

const TestimonialsGmbcc = () => {
  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative flex min-h-screen z-50 flex-col justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col items-center justify-center max-lg:space-y-8 space-y-14">
          <h2
            data-aos="fade-up"
            className="font-damn max-lg:text-5xl max-xl:text-8xl text-9xl text-center text-putih"
          >
            <TitleWrapper
              label="TESTIMONIALS"
              color="gmbcc"
              variant="top-left"
              className="px-20"
            />
          </h2>
          <div
            data-aos="fade-up"
            className="flex flex-row flex-wrap justify-center max-lg:gap-10 max-xl:gap-15 gap-20"
          >
            {testimonialsData.map((item, idx) => (
              <TestimonialsCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGmbcc;
