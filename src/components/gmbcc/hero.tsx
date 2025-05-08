import Background from "../background";
import light_line from "@/assets/ornament-hero.svg";
import gmbcc_logo from "@/assets/gmbcc/gmbcc-logo.webp";
import texture from "@/assets/noisy-background.webp";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const GMBCCHero = () => {
  return (
    <section
      className="relative flex justify-center items-center w-full min-h-screen bg-backgroundColor
                  2xl:py-[160px]
                  lg:py-[10.4166vw]
                  py-[50vw]"
    >
      <Background />
      <div className="relative flex flex-col justify-center items-center">
        <div className="relative flex flex-col justify-center items-center">
          <div className="relative flex justify-center items-center">
            <div
              data-aos="fade-up"
              className="z-40 relative flex justify-center items-center border-white overflow-hidden gmbcc
                        2xl:w-[768px] 2xl:h-[358.4px] 2xl:border-[4px] 2xl:rounded-[36px] 2xl:shadow-[0px_0px_19.2px_0px_rgba(250,250,250,0.40)]
                        lg:w-[50vw] lg:h-[23.3072vw] lg:border-[0.2604vw] lg:rounded-[2.34375vw] lg:text-shadow-[0px_0px_1.04166vw_rgba(255,255,255,0.60)]
                        w-[86.6666vw] h-[40.2777vw] border-[0.4513vw] rounded-[4.16666vw] shadow-[0px_0px_2vw_rgba(255,255,255,0.60)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 z-20 pointer-events-none"
                style={{
                  backgroundImage: `url(${texture})`,
                }}
              />
              <div
                className="relative
                          2xl:w-[576px]
                          lg:w-[37.5vw]
                          w-[64.72222vw]"
              >
                <img
                  src={gmbcc_logo}
                  alt="The 19th Managements FEB UGM Logo"
                  className="relative w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="absolute bg-[#263B90] self-center
                        2xl:bottom-[-60px] 2xl:w-screen 2xl:h-[80px] 2xl:blur-[45px]
                        lg:bottom-[-3.90625vw] lg:w-screen lg:h-[5.20833vw] lg:blur-[2.92968vw]
                        bottom-[-10vw] w-[200vw] h-[5.20833vw] blur-[2.5vw]"
            />
            <div
              className="z-10 absolute opacity-50
                        2xl:w-[150%] 2xl:bottom-[-245px]
                        lg:w-[150%] lg:bottom-[-15.9505vw]
                        w-[142%] bottom-[-30vw]"
            >
              <img
                src={light_line}
                alt="light"
                draggable="false"
                className="object-fit"
              />
            </div>
          </div>
        </div>
        <Button
          className="z-100 cursor-pointer text-putih
                      2xl:mt-[116px]
                      lg:mt-[7.552vw]
                      mt-[17.7777vw]"
          variant="gmbccHover"
          size="icon"
          data-aos="fade-up"
        >
          <Link
            to="/registration/gmbcc"
            className="space-x-2 flex flex-row items-center
                        2xl:text-[30px]
                        lg:text-[1.9531vw]
                        text-[3.6111vw]"
          >
            <p className="font-medium">
              Register Now
            </p>
            <FaArrowRightLong
              size={"100%"}
              className=""
            />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default GMBCCHero;
