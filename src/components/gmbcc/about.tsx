import { useState } from "react";
import Background from "../background";
import TitleWrapper from "../title-wrapper";
import gmbccDocs1 from "@/assets/gmbcc/gmbccDocs1.webp";
import gmbccDocs2 from "@/assets/gmbcc/gmbccDocs2.webp";
import gmbccDocs3 from "@/assets/gmbcc/gmbccDocs3.webp";
import gmbccDocs4 from "@/assets/gmbcc/gmbccDocs4.webp";
import gmbccDocs5 from "@/assets/gmbcc/gmbccDocs5.webp";
import gmbccDocs6 from "@/assets/gmbcc/gmbccDocs6.webp";
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
  const gmbccDocs = [
    gmbccDocs1,
    gmbccDocs2,
    gmbccDocs3,
    gmbccDocs4,
    gmbccDocs5,
    gmbccDocs6,
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
        className="z-30 absolute biru-cyan rotate-[30deg] mask-[url(@/assets/ornaments/ornament3.webp)] mask-contain mask-no-repeat mask-center
                    2xl:top-[75px] 2xl:right-[50px] 2xl:h-[224px] 2xl:w-[224px] 2xl:blur-[2px]
                    lg:top-[4.8828125vw] lg:right-[3.255208vw] lg:h-[14.58333vw] lg:w-[14.58333vw] lg:blur-[0.130208vw]
                    top-[35%] right-[-5%] h-[24.1666vw] w-[24.1666vw] blur-[0.3vw]"
      />
      <div
        className="z-31 absolute biru-cyan
                    2xl:top-0 2xl:right-[-85px] 2xl:h-[260px] 2xl:w-[260px] 2xl:blur-[100px]
                    lg:top-0 lg:right-[5.53385vw] lg:h-[16.9270833vw] lg:w-[16.9270833vw] lg:blur-[6.51041vw]
                    top-[35%] right-[-7%] h-[32.2222vw] w-[32.2222vw] blur-[11.728vw]"
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
              label="GMBCC"
              color="gmbcc"
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
          <div data-aos="fade-right" className="relative">
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
              className="relative z-40 flex flex-col justify-between items-center biru-cyan
                          2xl:w-[315px] 2xl:h-[503px] 2xl:pt-[21.6px] 2xl:px-[24px]
                          lg:w-[20.20781vw] lg:h-[32.7473vw] lg:pt-[1.40625vw] lg:px-[0.9114vw]
                          w-[63.33333vw] h-[85vw] pt-[3.8888vw] px-[4.4444vw]"
            >
              {" "}
              <div
                className="relative flex justify-center items-center aspect-[3/4]
                            2xl:w-[270px]
                            lg:w-[17.578125vw]
                            w-[54.13611vw]"
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
                    {gmbccDocs?.map((gmbccDocs, index) => {
                      return (
                        <CarouselItem>
                          <div className="relative aspect-[3/4] bg-white w-full">
                            <img
                              src={gmbccDocs}
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
                            2xl:gap-[16px]
                            lg:gap-[1.04166vw]
                            gap-[2.94444vw]"
              >
                <div
                  className="flex justify-center items-center aspect-square rounded-full gmbcc cursor-pointer opacity-50 hover:opacity-100 transition-all
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
                {gmbccDocs?.map((_, index) => {
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
                  className="flex justify-center items-center aspect-square rounded-full gmbcc cursor-pointer opacity-50 hover:opacity-100 transition-all
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
              <div></div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col justify-start h-full text-white font-medium text-justify leading-tight text-shadow-2xs
                        2xl:items-start 2xl:gap-[18px] 2xl:text-[22.4px] 2xl:w-[805.6px]
                        lg:items-start lg:gap-[1.1718vw] lg:text-[1.45833vw] lg:w-[52.4479vw]
                        items-center gap-[13.61111vw] text-[4.4444vw] w-[86vw]"
          >
            <p className="">
              <strong>
                Gadjah Mada Business Case Competition 2025 (GMBCC 2025)
              </strong>{" "}
              is a prestigious international business case competition organized
              by the Ikatan Keluarga Mahasiswa Manajemen (IKAMMA) of Gadjah Mada
              University. This competition gathers teams from various
              universities, both domestic and international, to compete by
              delivering the best solutions to real business challenges faced by
              partner companies.
            </p>
            <p>
              The primary goal of GMBCC is to enhance students' ability to
              analyze and solve problems in the fields of business and
              encourages participants to be more socially aware of global issues
              and their implications for the business world. GMBCC also plays a
              significant role in developing students' critical thinking,
              analytical reasoning, teamwork, and presentation
              skills—capabilities that are highly valuable and transferable to
              future career paths across various industries. By participating in
              GMBCC, students not only sharpen their problem-solving skills but
              also build a strong foundation that supports their professional
              growth and opens doors to global career opportunities.
            </p>
            <div className="relative">
              <Button
                className="z-100 relative flex cursor-pointer text-putih
                          2xl:text-[16px]
                          lg:text-[1.041666vw]
                          text-[3.05555vw]"
                variant="gmbccHover"
                size="icon"
                asChild
              >
                <a
                  href="https://www.instagram.com/gmbcc_ugm/"
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
