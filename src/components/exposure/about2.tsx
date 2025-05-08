import Background from "../background";
import about_image from "@/assets/exposure/about_image.webp";
import { Button } from "../ui/button";
import {
  FaArrowRightLong,
  FaInstagram,
} from "react-icons/fa6";

const ExposureAbout2 = () => {
  return (
    <section
      className="relative flex justify-center items-center bg-backgroundColor w-full min-h-screen
                    2xl:py-[100px]
                    lg:py-[6.5104vw]
                    py-[15vw]"
    >
      <Background />
      <div
        className="z-30 absolute biru rotate-[0deg] mask-[url(@/assets/ornaments/ornament1.webp)] mask-contain mask-no-repeat mask-center
                    2xl:top-[-5%] 2xl:right-[-3%] 2xl:h-[220px] 2xl:w-[220px] 2xl:blur-[4px]
                    lg:top-[-5%] lg:right-[-3%] lg:h-[14.379vw] lg:w-[14.379vw] lg:blur-[0.2604vw]
                    top-[-5%] right-[-7%] h-[24.1666vw] w-[24.1666vw] blur-[0.3vw]"
      />
      <div
        className="z-60 absolute biru
                    2xl:top-[-10%] 2xl:right-[-2%] 2xl:h-[260px] 2xl:w-[260px] 2xl:blur-[90px]
                    lg:top-[-10%] lg:right-[-2%] lg:h-[16.9270833vw] lg:w-[16.9270833vw] lg:blur-[6.51041vw]
                    top-[-7%] right-[-9%] h-[32.2222vw] w-[32.2222vw] blur-[11.728vw]"
      />
      <div className="z-40 relative flex flex-col justify-center items-center">
        <div
          data-aos="fade-up"
          className="relative flex flex-col biru-muda 
                        2xl:w-[1216px] 2xl:rounded-[38.4px] 2xl:p-[6.4px]
                        lg:w-[79.1666666vw] lg:rounded-[2.5vw] lg:p-[0.41666666vw]
                        p-[1.1111111vw] w-[86.6666vw] rounded-[6.6666666vw]"
        >
          <div
            className="relative flex w-full bg-backgroundColor text-white text-medium
                        2xl:flex-row 2xl:items-start 2xl:justify-start 2xl:rounded-[32px] 2xl:px-[61.6px] 2xl:py-[69.6px] 2xl:gap-[43.2px]
                        lg:flex-row lg:items-start lg:justify-start lg:rounded-[2.083333333vw] lg:px-[4.0104vw] lg:py-[4.53125vw] lg:gap-[2.8125vw]
                        flex-col items-center justify-start rounded-[5.5555555vw] px-[4.16666vw] py-[8.8888vw] gap-[10vw]"
          >
            <div
              className="aspect-[0.861] overflow-hidden
                            2xl:w-[353.6px] 2xl:rounded-[12.8px]
                            lg:w-[23.020833vw] lg:rounded-[0.833333vw]
                            w-[65vw] rounded-[4.44444vw]"
            >
              <img
                src={about_image}
                alt="documentation"
                draggable="false"
                className="relative w-full h-full object-cover"
              />
            </div>
            <div
              className="relative flex flex-col text-white italic text-medium text-justify leading-tight
                            2xl:w-[697.6px] 2xl:text-[22.4px] 2xl:gap-[24px]
                            lg:w-[45.41666vw] lg:text-[1.458333vw] lg:gap-[1.5625vw]
                            w-full text-[4.4444vw] gap-[5vw]"
            >
              <p>
                For years, we've nurtured a
                thriving ecosystem of creativity,
                curating a platform for over a
                thousand brands and welcoming more
                than{" "}
                <strong>
                  340 local creators
                </strong>{" "}
                as our tenants. We've collaborated
                with <strong> 30+ artists</strong>{" "}
                and{" "}
                <strong>
                  countless creative minds
                </strong>{" "}
                throughout the year, weaving a
                tapestry of commerce, culture, and
                diversity that pulsates with life.
              </p>
              <p>
                This year, EXPOSURE returns,
                bigger and bolder than ever, ready
                to be the epicenter of Yogyakarta.
                COMING SOON in July 2025,
                @exposure_yk
              </p>
              <p>
                COMING SOON in July 2025,
                @exposure_yk
              </p>
              <div
                data-aos="fade-up"
                className="z-100 absolute
                            2xl:bottom-[-76px] 2xl:self-auto
                            lg:bottom-[-4.9479vw] lg:self-auto
                            bottom-[-30vw] self-center"
              >
                <Button
                  className="relative flex cursor-pointer text-putih
                            2xl:text-[16px] 2xl:w-[288px] 
                            lg:text-[1.041666vw] lg:w-[18.75vw] lg:self-auto
                            text-[3.05555vw] w-[60vw] "
                  variant="biruHover"
                  size="icon"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/exposure_yk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="relative flex justify-center items-center aspect-square"
                      //  2xl:w-[30px]
                      //  lg:w-[1.953125vw]
                      //  w-[]"
                    >
                      <FaInstagram
                        size="100%"
                        color="white"
                      />
                    </div>
                    <p>Visit Our Instagram</p>
                    <div
                      className="relative flex justify-center items-center aspect-square"
                      // 2xl:w-[30px]
                      // lg:w-[1.953125vw]
                    >
                      <FaArrowRightLong
                        size={"100%"}
                        color="white"
                      />
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="z-40 relative">
          <div
            className="relative w-screen bg-[url(@/assets/exposure/ornament_divider_exposure.webp)] bg-cover bg-no-repeat bg-center
                        2xl:mt-[75px] 2xl:h-[400px]
                        lg:mt-[6.5104vw] lg:h-[26.0416vw]
                        mt-[35vw] h-[29.16666vw]"
          >
            <div
              className="absolute z-70 rounded-full biru-muda left-[6%] bottom-[40%]
                          2xl:h-[160px] 2xl:w-[160px] 2xl:blur-[95px]
                          lg:h-[10.4166vw] lg:w-[10.4166vw] lg:blur-[6.18489vw]
                          h-[10.4166vw] w-[10.4166vw] blur-[6.18489vw]"
            />
            <div
              className="absolute z-70 rounded-full biru-muda left-[46%] bottom-[20%]
                          2xl:h-[160px] 2xl:w-[160px] 2xl:blur-[95px]
                          lg:h-[10.4166vw] lg:w-[10.4166vw] lg:blur-[6.18489vw]
                          h-[10.4166vw] w-[10.4166vw] blur-[6.18489vw]"
            />
            <div
              className="absolute z-70 rounded-full biru-muda left-[85%] bottom-[32%]
                          2xl:h-[160px] 2xl:w-[160px] 2xl:blur-[95px]
                          lg:h-[10.4166vw] lg:w-[10.4166vw] lg:blur-[6.18489vw]
                          h-[10.4166vw] w-[10.4166vw] blur-[6.18489vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposureAbout2;
