import Background from "@/components/background";
import texture from "@/assets/noisy-background.webp";
import exposure_logo from "@/assets/logo-exposure.webp";
import star from "@/assets/star-ornament.webp";
import Image1 from "@/assets/exposure/info/image-1.webp";
import Image2 from "@/assets/exposure/info/image-2.webp";
import Image3 from "@/assets/exposure/info/image-3.webp";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Ornament from "@/assets/exposure/ornament-series-of-events.webp";

const ExposureInfo = () => {
  const imgList: string[] = [Image1, Image2, Image3];

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col max-lg:space-y-8 space-y-14 items-center">
          <div className="absolute biru-muda max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[20px] max-lg:-left-[30px] top-[0px] -left-[210px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[20px] max-lg:-left-[30px] w-[200px] h-[200px] top-[0px] -left-[210px]">
            <img
              src={Ornament}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
          <div
            className="relative flex flex-col justify-center items-center font-damn text-white
                      2xl:text-[120px] 2xl:gap-[22px] 
                      lg:text-[7.8125vw] lg:gap-[1.4322vw]
                      text-[16.80555vw] gap-[1.4322vw]"
            data-aos="fade-up"
          >
            <div className="relative flex">
              <div
                className="z-41 absolute aspect-square rotate-0
                            2xl:left-[-4%] 2xl:top-[6%] 2xl:w-[46.4px]
                            lg:left-[-4%] lg:top-[6%] lg:w-[3.0208vw]
                            left-[-5%] top-[6%] w-[8.0555vw]"
              >
                <img
                  src={star}
                  alt="star"
                  draggable="false"
                  className="object-contain"
                />
              </div>
              <div
                className="z-41 absolute aspect-square rotate-45
                            2xl:right-[-4%] 2xl:bottom-[6%] 2xl:w-[46.4px]
                            lg:right-[-4%] lg:bottom-[6%] lg:w-[3.0208vw]
                            right-[-5%] bottom-[6%] w-[8.0555vw]"
              >
                <img
                  src={star}
                  alt="star"
                  draggable="false"
                  className="object-contain"
                />
              </div>
              <div
                className="relative flex border-white biru-muda overflow-hidden
                        2xl:rounded-[20.8px] 2xl:border-[2.4px] 2xl:px-[32px] 2xl:shadow-[0px_0px_11.2px_0px_#FFF]
                        lg:rounded-[1.3541vw] lg:border-[0.15625vw] lg:px-[2.08333vw] lg:shadow-[0px_0px_0.7291vw_0px_#FFF]
                        rounded-[5vw] border-[0.15625vw] px-[5vw] shadow-[0px_0px_2vw_0px_#FFF]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 z-20 pointer-events-none"
                  style={{
                    backgroundImage: `url(${texture})`,
                  }}
                />
                <div
                  className="relative flex justify-center items-center
                          2xl:gap-[27.2px] 
                          lg:gap-[1.7708vw]
                          gap-[3vw]"
                >
                  <div
                    className="relative
                            2xl:w-[137.6px]
                            lg:w-[8.95833vw]
                            w-[19vw]"
                  >
                    <img
                      src={exposure_logo}
                      alt="Exposure Logo"
                      className="relative w-full h-full object-contain"
                      draggable="false"
                    />
                  </div>
                  <div
                    className="text-white leading-[80%]
                            2xl:mt-[21px] 
                            lg:mt-[1.3671vw]
                            mt-[3vw]"
                  >
                    <h1>EXPOSURE</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-lg:flex-col justify-center items-center flex-row max-lg:space-y-4 max-lg:space-x-0 space-x-8">
            {imgList.map((img, index) => (
              <Card key={index} img={img} />
            ))}
          </div>

          <Button
            data-aos="fade-up"
            className="relative flex cursor-pointer text-putih max-xl:text-lg text-xl"
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
    </section>
  );
};

const Card = ({ img }: { img: string }) => {
  return (
    <div
      data-aos="fade-up"
      style={{
        boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.50)",
      }}
      className="max-xl:w-[308px] max-xl:h-[385px] w-[396px] h-[495px] rounded-2xl p-0.5 biru-muda"
    >
      <div className="w-full h-full rounded-2xl overflow-hidden">
        <img
          src={img}
          alt="Exposure"
          className="w-full h-full object-cover rounded-2xl"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ExposureInfo;
