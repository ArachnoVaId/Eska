import Background from "@/components/background";
import { CarouselNavigation } from "@/components/carousel-navigation";
import { CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { CarouselWrapper } from "@/components/carousel-wrapper";
import InsightCard from "../ideas/insight-corner/insight-card";
import { InsightCorner } from "@/types/insight-corner";
import Cover1 from "@/assets/exposure/article/image-1.webp";
import Cover2 from "@/assets/exposure/article/image-2.webp";

const ExposureArticle = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  const data: InsightCorner[] = [
    {
      title:
        "EXPOSURE 2024 Hadirkan 80 Jenama Lokal Terbaik Yogyakarta di Plaza Ambarrukmo",
      href: "https://ambarrukmo.com/exposure-2024-hadir-di-plaza-ambarrukmo/",
      content: "",
      image: Cover1,
      color: "biru-tua",
    },
    {
      title: "Tingkatkan Industri Kreatif Lokal, FEB UGM Gelar EXPOSURE 2024",
      href: "https://feb.ugm.ac.id/id/berita/4673-tingkatkan-industri-kreatif-lokal-feb-ugm-gelar-exposure-2024/",
      content: "",
      image: Cover2,
      color: "biru-tua",
    },
  ];

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex flex-col space-y-12 justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col items-center justify-center max-lg:space-y-8 space-y-14">
          <div
            data-aos="fade-up"
            className="w-full flex items-center justify-center"
          >
            <div className="w-full max-lg:max-w-[85%] max-w-[1000px] px-4 flex items-center justify-center">
              <CarouselWrapper
                items={data}
                onApiReady={setApi}
                onCurrentChange={setCurrent}
                renderItem={(item) => <InsightCard {...item} />}
                itemsPerSlide={2}
              />
            </div>
          </div>
          <div data-aos="fade-up">
            <CarouselNavigation
              api={api}
              current={current}
              total={data.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposureArticle;
