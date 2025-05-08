import Background from "../background";
import TitleWrapper from "../title-wrapper";
import { Button } from "../ui/button";

const GMBCCCalls = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen w-full bg-backgroundColor">
      <Background />
      <div
        className="flex flex-col justify-center items-center
                    2xl:gap-[108.8px]
                    lg:gap-[7.08333vw]
                    gap-[15vw]"
      >
        <div
          data-aos="fade-up"
          className="text-white font-damn text-center leading-tight
                        2xl:text-[114.933px]
                        lg:text-[7.48263vw]
                        text-[12vw]"
        >
          <h1>BE PART OF US</h1>
          <h1>BY REGISTERING YOURSELF AS</h1>
          <TitleWrapper
            label="OUR STUDENT AMBASSADOR"
            variant="top-left"
            color="gmbcc"
            className=" 2xl:px-[30px] lg:px-[1.953125vw] px-[1.953125vw]"
          />
        </div>
        <div
          className="flex flex-col justify-center items-center text-white text-center italic *:cursor-pointer
                        2xl:*:text-[33.6px] 2xl:*:rounded-[51.6px] 2xl:gap-[56px]
                        lg:*:text-[2.1875vw] lg:*:rounded-[3.359375vw] lg:gap-[3.645833vw]
                        *:text-[5vw] *:rounded-[8vw] gap-[6.5vw]"
        >
          <Button
            className="2xl:px-[35px] 2xl:py-[30px]
                        lg:px-[2.2786vw] lg:py-[1.6276vw]
                        px-[5vw] py-[1.6276vw]"
            variant="gmbccHover"
            data-aos="fade-up"
          >
            <a
              href="/registration/gmbcc"
              className="2xl:text-shadow-[0px_3.2px_9px_rgba(0,0,0,0.50)
                            lg:text-shadow-[0px_0.20833vw_0.5859vw_rgba(0,0,0,0.50)
                            text-shadow-[0px_0.65vw_2vw_rgba(0,0,0,0.50)"
            >
              REGISTER NOW
            </a>
          </Button>
          <Button
            className="2xl:px-[35px] 2xl:py-[25px]
                        lg:px-[2.2786vw] lg:py-[1.6276vw]
                        px-[5vw] py-[1.6276vw]"
            variant="gmbccHover"
            data-aos="fade-up"
          >
            <a
              href="https://bit.ly/GuidebookGMBCC2025"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-shadow-[0px_3.2px_9px_rgba(0,0,0,0.50)
                            lg:text-shadow-[0px_0.20833vw_0.5859vw_rgba(0,0,0,0.50)
                            text-shadow-[0px_0.65vw_2vw_rgba(0,0,0,0.50)"
            >
              ACCESS GUIDEBOOK
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GMBCCCalls;
