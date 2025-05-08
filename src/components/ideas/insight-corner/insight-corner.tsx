import Background from "@/components/background";
import { CarouselNavigation } from "@/components/carousel-navigation";
import TitleWrapper from "@/components/title-wrapper";
import { CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { insightCornerData } from "./insight-corner-data";
import { CarouselWrapper } from "@/components/carousel-wrapper";
import InsightCard from "./insight-card";
import { cn } from "@/lib/utils";

const InsightCorner = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex flex-col space-y-12 justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col items-center justify-center max-lg:space-y-8 space-y-14">
          <h2
            data-aos="fade-up"
            className="relative font-damn max-lg:text-5xl max-xl:text-8xl text-9xl text-center text-putih"
          >
            <TitleWrapper
              label="INSIGHT CORNER"
              color="hijau-ideas"
              variant="bottom-left"
              className="px-20"
            />

            <div
              className={cn(
                "absolute z-40 max-lg:-top-[100px] max-lg:left-[-80px] left-[-350px] top-[50px] max-lg:w-[100px] max-lg:h-[100px] w-[240px] h-[240px] blur-[3px] mask-[url(@/assets/ornaments/ornament6.webp)] mask-contain mask-center mask-no-repeat object-contain",
                "hijau-ideas",
              )}
            />
            <div
              className={cn(
                "absolute z-70 max-lg:-top-[100px] max-lg:left-[-120px] left-[-380px] top-[50px] max-lg:w-[180px] max-lg:h-[180px] h-[270px] w-[270px] blur-[200px] opacity-50 rounded-full",
                "hijau-ideas",
              )}
            />
          </h2>
          <div data-aos="fade-up">
            <CarouselNavigation
              api={api}
              current={current}
              total={insightCornerData.length}
            />
          </div>
          <div data-aos="fade-up" className="w-full flex justify-center">
            <div className="w-full max-lg:max-w-[85%] max-w-[1000px] px-4 flex justify-center">
              <CarouselWrapper
                items={insightCornerData}
                onApiReady={setApi}
                onCurrentChange={setCurrent}
                renderItem={(item) => <InsightCard {...item} />}
                itemsPerSlide={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightCorner;
