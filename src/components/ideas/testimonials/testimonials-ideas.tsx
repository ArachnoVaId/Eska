import Ornament from "@/assets/ornament-testimonials.webp";
import Background from "@/components/background";
import TitleWrapper from "@/components/title-wrapper";
import { CarouselApi } from "@/components/ui/carousel";
import TestimonialsCard from "./testimonials-card";
import { testimonialsData } from "./testimonials-data";
import { useState } from "react";
import OrnamentDivider from "@/assets/ornament-divider-ideas.webp";
import { CarouselNavigation } from "@/components/carousel-navigation";
import { CarouselWrapper } from "@/components/carousel-wrapper";

const TestimonialsIdeas = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

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
              color="hijau-ideas"
              variant="bottom-left"
              className="px-20"
            />
          </h2>
          <div data-aos="fade-up">
            <CarouselNavigation
              api={api}
              current={current}
              total={testimonialsData.length}
            />
          </div>
          <div
            data-aos="fade-up"
            className="relative p-2 max-sm:w-fit max-lg:w-[85%] rounded-3xl hijau-ideas"
          >
            <div className="absolute hijau-ideas max-lg:w-[100px] max-lg:h-[100px] max-lg:top-[20px] max-lg:-left-[70px] -top-[70px] -left-[150px] w-[200px] h-[200px] rounded-full blur-[250px]" />
            <div className="absolute max-lg:w-[100px] max-lg:h-[100px] max-lg:top-[20px] max-lg:-left-[50px] w-[200px] h-[200px] -top-[50px] -left-[100px] z-30">
              <img
                src={Ornament}
                alt="Ornament"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
            <div className="px-24 py-14 max-lg:px-10 max-lg:py-5 max-sm:w-[300px] max-lg:w-full max-xl:w-[1000px] max-2xl:w-[1200px] w-[1500px] max-lg:min-h-[300px] min-h-[450px] flex flex-col justify-between rounded-3xl bg-putih">
              <CarouselWrapper
                items={testimonialsData}
                onApiReady={setApi}
                onCurrentChange={setCurrent}
                renderItem={(item) => <TestimonialsCard {...item} />}
              />
            </div>
          </div>
          <div className="w-full z-30">
            <img
              src={OrnamentDivider}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsIdeas;
