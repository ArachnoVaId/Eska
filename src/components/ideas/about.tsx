import { useState } from "react";
import Background from "../background";
import TitleWrapper from "../title-wrapper";
import ideasDocs1 from "@/assets/ideas/ideasDocs1.webp";
import ideasDocs2 from "@/assets/ideas/ideasDocs2.webp";
import ideasDocs3 from "@/assets/ideas/ideasDocs3.webp";
import ideasDocs4 from "@/assets/ideas/ideasDocs4.webp";
import ideasDocs5 from "@/assets/ideas/ideasDocs5.webp";
import ideasDocs6 from "@/assets/ideas/ideasDocs6.webp";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Button } from "../ui/button";
import star from "@/assets/star-ornament.webp";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const IdeasAbout = () => {
  const ideasDocs = [
    ideasDocs1,
    ideasDocs2,
    ideasDocs3,
    ideasDocs4,
    ideasDocs5,
    ideasDocs6,
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  // const swiperRef = useRef<Swiper>(null!);

  return (
    <section
      className="relative flex justify-center items-center bg-backgroundColor w-full
                  2xl:py-[100px]
                  lg:py-[6.5104vw]
                  py-[15vw]"
    >
      <Background />
      <div
        className="z-30 absolute hijau-ideas rotate-[30deg] mask-[url(@/assets/ornaments/ornament2.webp)] mask-contain mask-no-repeat mask-center
                    2xl:top-[75px] 2xl:right-[50px] 2xl:h-[224px] 2xl:w-[224px] 2xl:blur-[2px]
                    lg:top-[4.8828125vw] lg:right-[3.255208vw] lg:h-[14.58333vw] lg:w-[14.58333vw] lg:blur-[0.130208vw]
                    top-[4.8828125vw] right-[3.255208vw] h-[14.58333vw] w-[14.58333vw] blur-[0.130208vw]"
      />
      <div
        className="z-31 absolute hijau-ideas
                    2xl:top-0 2xl:right-[-85px] 2xl:h-[260px] 2xl:w-[260px] 2xl:blur-[100px]
                    lg:top-0 lg:right-[5.53385vw] lg:h-[16.9270833vw] lg:w-[16.9270833vw] lg:blur-[6.51041vw]
                    top-0 right-[5.53385vw] h-[16.9270833vw] w-[16.9270833vw] blur-[6.51041vw]"
      />
      <div
        className="z-40 relative flex flex-col justify-center items-center
                      2xl:gap-[60.8px]
                      lg:gap-[3.95833vw]
                      gap-[17.22222vw]"
      >
        <div className="relative">
          <h1
            data-aos="fade-up"
            className="text-white font-damn
                        2xl:text-[115px] 2xl:tracking-[2.5px]
                        lg:text-[7.48697vw] lg:tracking-[0.16276vw]
                        text-[16.80555vw] tracking-[0.33638vw]"
          >
            WHAT IS{" "}
            <TitleWrapper
              label="IDEAS"
              color="hijau-ideas"
              className="
                      2xl:px-[30px] 
                      lg:px-[1.953125vw]
                      px-[4vw]"
              variant="top-left"
            />{" "}
            ?
          </h1>
        </div>
        <div
          className="relative flex justify-center
                      2xl:flex-row 2xl:items-start 2xl:gap-[68.8px]
                      lg:flex-row lg:items-start lg:gap-[4.474916vw]
                      flex-col items-center gap-[13.57777vw]"
        >
          <div className="relative">
            <div
              className="z-41 absolute aspect-square rotate-45
                          2xl:top-0 2xl:left-[-8%] 2xl:w-[46.4px]
                          lg:top-0 lg:left-[-8%] lg:w-[3.02083vw]
                          top-0 left-[-7.5%] w-[8.75vw]"
            >
              <img
                src={star}
                alt="star"
                draggable="false"
                className="object-contain"
              />
            </div>
            <div
              className="z-41 absolute aspect-square rotate-0 
                          2xl:right-[-8%] 2xl:bottom-0 2xl:w-[46.4px]
                          lg:right-[-8%] lg:bottom-0 lg:w-[3.02083vw]
                          right-[-7.5%] bottom-0 w-[8.75vw]"
            >
              <img
                src={star}
                alt="star"
                draggable="false"
                className="object-contain"
              />
            </div>
            <div
              data-aos="fade-right"
              className="relative z-40 flex flex-col justify-start items-center aspect-[3/4] hijau-ideas
                          2xl:w-[315px] 2xl:pb-0
                          lg:w-[20.20781vw] lg:pb-[0.5vw]
                          w-[63.33333vw] pb-0"
            >
              <div
                className="relative flex justify-center items-center aspect-[3/4]
                            2xl:w-[270px] 2xl:mt-[21.6px]
                            lg:w-[17.578125vw] lg:mt-[1.40625vw]
                            w-[54.13611vw] mt-[4vw]"
              >
                <Carousel
                  className="w-full h-full"
                  orientation="horizontal"
                  opts={{ loop: false }}
                  setApi={(api) => {
                    setApi(api);
                    if (api) {
                      api.on("select", () =>
                        setCurrent(api.selectedScrollSnap()),
                      );
                    }
                  }}
                >
                  <CarouselContent>
                    {ideasDocs?.map((ideasDocs, index) => {
                      return (
                        <CarouselItem>
                          <div className="relative aspect-[3/4] bg-white w-full">
                            <img
                              src={ideasDocs}
                              alt={`Image ${index}`}
                              draggable="false"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                </Carousel>
              </div>
              <div
                className="flex justify-center items-center w-full
                            2xl:mt-[7px] 2xl:gap-[16px]
                            lg:mt-[0.455729vw] lg:gap-[1.04166vw]
                            mt-[2.52222vw] gap-[2.94444vw]"
              >
                <div
                  className="flex justify-center items-center aspect-square rounded-full hijau-ideas cursor-pointer opacity-50 hover:opacity-100 transition-all
                              2xl:w-[25.6px]
                              lg:w-[1.66666vw]
                              w-[4.72222vw]"
                >
                  <div
                    className="aspect-square
                                2xl:w-[17.5px]
                                lg:w-[1.13932vw]
                                w-[3.5vw]"
                    onClick={() => api?.scrollPrev()}
                  // disabled={!api?.canScrollPrev()}
                  >
                    <FaArrowLeftLong className="" size={"100%"} color="white" />
                  </div>
                </div>
                {ideasDocs?.map((_, index) => {
                  return (
                    <div
                      className={`rounded-full aspect-square bg-white cursor-pointer hover:opacity-50 
                                  2xl:w-[11.2px]
                                  lg:w-[0.729166vw]
                                  w-[2.075vw]  
                          ${current === index ? "!opacity-100" : "opacity-20"}
                            `}
                      onClick={() => {
                        api?.scrollTo(index);
                      }}
                    ></div>
                  );
                })}
                <div
                  className="flex justify-center items-center aspect-square rounded-full hijau-ideas cursor-pointer opacity-50 hover:opacity-100 transition-all
                              2xl:w-[25.6px]
                              lg:w-[1.66666vw]
                              w-[4.72222vw]"
                >
                  <div
                    className="aspect-square
                                2xl:w-[17.5px]
                                lg:w-[1.13932vw]
                                w-[3.5vw]"
                    onClick={() => api?.scrollNext()}
                  >
                    <FaArrowRightLong
                      className=""
                      size={"100%"}
                      color="white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-start h-full
                        2xl:items-start 2xl:gap-[18px]
                        lg:items-start lg:gap-[1.1718vw]
                        items-center gap-[13.61111vw]"
          >
            <p
              data-aos="fade-left"
              className="text-white font-medium text-justify leading-tight
                          2xl:w-[664.8px] 2xl:text-[25.6px]
                          lg:w-[43.28125vw] lg:text-[1.66666vw]
                          w-[86.66666vw] text-[4.44444vw]"
            >
              <strong>Indonesia Studentpreneur (IDEAS)</strong> merupakan
              business plan competition berskala nasional yang didampingi oleh
              rangkaian insight series dengan fokus yaitu mendorong inovasi dan
              kreativitas mahasiswa/i terhadap permasalahan sosial dan
              lingkungan di Indonesia. IDEAS berkomitmen untuk memberikan
              mahasiswa/i kesempatan untuk mengembangkan ide ide yang dapat
              berkontribusi pada pembangunan nasional dan pengalaman
              komprehensif dalam praktik entrepreneurship dengan fokus pada
              pengetahuan, keterampilan bisnis, dan diskusi diskusi inovatif.
            </p>
            <div className="relative">
              <Button
                data-aos="fade-up"
                className="z-100 relative flex cursor-pointer text-putih
                          2xl:text-[16px]
                          lg:text-[1.041666vw]
                          text-[3.05555vw]"
                variant="hijauIdeasHover"
                size="icon"
                asChild
              >
                <a
                  href="https://www.instagram.com/ideas_ugm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="relative flex justify-center items-center aspect-square"
                  //  2xl:w-[30px]
                  //  lg:w-[1.953125vw]
                  //  w-[]"
                  >
                    <FaInstagram size="100%" color="white" />
                  </div>
                  <p>Visit Our Instagram</p>
                  <div
                    className="relative flex justify-center items-center aspect-square"
                  // 2xl:w-[30px]
                  // lg:w-[1.953125vw]
                  >
                    <FaArrowRightLong size={"100%"} color="white" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeasAbout;
