import texture from "@/assets/noisy-background.webp";
import Background from "../background";
import logo from "@/assets/logo-me.webp";
import { Button } from "../ui/button";
import {
  FaArrowRightLong,
  FaInstagram,
} from "react-icons/fa6";

const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-backgroundColor justify-center flex
                  2xl:h-[1360px] 2xl:py-[80px]
                  lg:h-[88.541vw] lg:py-[5.2083vw]
                  h-[227.777w] py-[15vw]"
    >
      <Background />
      <div
        className="absolute z-40 biru-cyan mask-[url(@/assets/ornaments/ornament1.webp)] mask-contain mask-center mask-no-repeat
                    2xl:right-0 2xl:top-[48px] 2xl:w-[270px] 2xl:h-[270px] 2xl:blur-[3px]
                    lg:right-0 lg:top-[3.125vw] lg:w-[17.578vw] lg:h-[17.578vw] lg:blur-[0.1953vw]
                    right-[-6.9444vw] top-[3.125vw] w-[26.666vw] h-[26.666vw] blur-[0.555vw]"
      />
      <div
        className="absolute z-70 rounded-full biru-cyan
                    2xl:right-[-70px] 2xl:top-0 2xl:h-[265px] 2xl:w-[265px] 2xl:blur-[110px]
                    lg:right-[-4.5572vw] lg:top-0 lg:h-[17.2526vw] lg:w-[17.2526vw] lg:blur-[7.1614vw]
                    right-[-6.944vw] top-0 h-[27.777vw] w-[27.777vw] blur-[10vw]"
      />
      <div className="z-40 relative flex flex-col justify-center items-center">
        <div className="relative flex flex-col items-center">
          <div
            className="z-50 absolute biru-muda rounded-full 
                    2xl:w-[215px] 2xl:h-[215px] 2xl:top-[50px] 2xl:left-[calc(50%-0.5*215px)] 2xl:blur-[80px] 
                    lg:w-[14vw] lg:h-[14vw] lg:top-[3.2552vw] lg:left-[calc(50%-0.5*14vw)]  lg:blur-[5.208vw]
                    w-[33.611vw] h-[33.611vw] top-[3vw] left-[calc(50%-0.5*33.611vw)]  blur-[12.2222vw]"
          />
          <div
            data-aos="fade-up"
            className="z-100 relative font-semibold text-white italic
                        2xl:text-[38.4px]
                        lg:text-[2.5vw]
                        text-[6.236vw]"
          >
            GET TO KNOW
          </div>
          <div
            data-aos="fade-up"
            className="z-100 relative border-white overflow-hidden
                        2xl:mt-[30px] 2xl:rounded-[21.333px] 2xl:border-[2.1333px]
                        lg:mt-[1.953vw] lg:rounded-[1.3888vw] lg:border-[0.13888vw]
                        mt-[5.0416vw] rounded-[3.6111vw] border-[0.3333vw]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 z-20 pointer-events-none"
              style={{
                backgroundImage: `url(${texture})`,
              }}
            />
            <div
              className="relative biru-muda
                          2xl:w-[364.8px] 2xl:h-[144px] 2xl:p-[19.2px]
                          lg:w-[23.75vw] lg:h-[9.375vw] lg:p-[1.25vw]
                          w-[52.7777vw] h-[20vw] p-[3vw]"
            >
              <img
                src={logo}
                alt="The 19th Managements FEB UGM Logo"
                className="relative w-full h-full object-contain"
                draggable="false"
              />
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute z-40 biru-pink mask-[url(@/assets/ornaments/ornament2.webp)] mask-contain mask-center mask-no-repeat
                          2xl:left-[-13.5%] 2xl:top-[-20%] 2xl:w-[345px] 2xl:h-[345px]
                          lg:left-[-13.5%] lg:top-[-20%] lg:w-[22.461vw] lg:h-[22.461vw]
                          left-[-22.5%] top-[-4%] w-[41.6666vw] h-[41.6666vw]"
            />
            <div
              className="absolute z-70 rounded-full biru-pink 
                          2xl:left-[-19.5%] 2xl:top-[-20%] 2xl:h-[265px] 2xl:w-[265px] 2xl:blur-[110px]
                          lg:left-[-19.5%] lg:top-[-20%] lg:h-[17.252vw] lg:w-[17.252vw] lg:blur-[7.1614vw]
                          left-[-34%] top-[25%] h-[33.8888vw] w-[33.8888vw] blur-[11.3888vw]"
            />
            <div
              data-aos="fade-up"
              className="relative w-full flex flex-col justify-center items-center biru-muda
                          2xl:mt-[54px] 2xl:rounded-[38.4px] 2xl:p-[6.4px]
                          lg:mt-[3.5156vw] lg:rounded-[2.5vw] lg:p-[0.41666vw]
                          mt-[12.962vw] rounded-[6.66666666vw] p-[1.11111111vw]"
            >
              <div
                className="relative flex flex-col bg-backgroundColor w-full
                            2xl:rounded-[32px] 2xl:py-[80px] 2xl:px-[54px]
                            lg:rounded-[2.0833vw] lg:py-[5.2083vw] lg:px-[3.5156vw]
                            rounded-[5.55555555vw] py-[9.44444vw] px-[7.777777vw]"
              >
                <div
                  className="relative flex flex-col text-white text-center font-medium leading-tight
                              2xl:gap-[24px] 2xl:w-[1116px] 2xl:text-[28.8px]
                              lg:gap-[1.5625vw] lg:w-[72.6562vw] lg:text-[1.875vw]
                              gap-[5vw] w-[70vw] text-[4.4444vw]"
                >
                  <h3 className="">
                    <strong>
                      Management's Event
                    </strong>{" "}
                    serves as an annual project
                    held by{" "}
                    <strong>
                      Management Students of FEB
                      UGM
                    </strong>
                    . In 2025, ME will be
                    conducted for the 19th time
                    consisting of three
                    sub-projects:{" "}
                    <strong>
                      IDEAS, GMBCC, and EXPOSURE
                    </strong>
                    .
                  </h3>
                  <h3>
                    These three sub-projects will
                    focus on integrating a
                    collaborative effort by
                    combining the three
                    sub-projects to produce
                    results that will benefit the
                    general public, students,
                    related industries,
                    communities, and other
                    interested parties.
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="relative w-full h-0 flex justify-center"
            >
              <Button
                className="z-100 relative text-white
                            2xl:rounded-[25px] 2xl:py-[25px] 2xl:px-[25px] 2xl:text-[25.6px] 2xl:-mt-[28px]
                            lg:rounded-[1.6276vw] lg:py-[1.6276vw] lg:px-[1.6276vw] lg:text-[1.6666vw] lg:-mt-[1.8229vw]
                            rounded-[4vw] py-[2.58333vw] px-[4.4444vw] text-[3.8888vw] -mt-[4.75vw]"
                variant={"biruMuda"}
                asChild
              >
                <a
                  href="https://www.instagram.com/me_ugm/"
                  target="_blank"
                >
                  <div className="">
                    <FaInstagram size={"100%"} />
                  </div>
                  <p className="">
                    More About Us
                  </p>
                  <div>
                    <FaArrowRightLong
                      size={"100%"}
                    />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="z-40 relative">
          <div
            className="relative w-screen bg-[url(@/assets/ornament-divider-homepage.webp)] bg-cover bg-no-repeat bg-center
                        2xl:mt-0 2xl:h-[400px]
                        lg:mt-0 lg:h-[26.0416vw]
                        mt-[10vw] h-[29.16666vw]"
          >
            <div
              className="absolute z-70 rounded-full biru-cyan left-[6%] bottom-[40%]
                          2xl:h-[160px] 2xl:w-[160px] 2xl:blur-[95px]
                          lg:h-[10.4166vw] lg:w-[10.4166vw] lg:blur-[6.18489vw]
                          h-[10.4166vw] w-[10.4166vw] blur-[6.18489vw]"
            />
            <div
              className="absolute z-70 rounded-full biru-cyan left-[46%] bottom-[20%]
                          2xl:h-[160px] 2xl:w-[160px] 2xl:blur-[95px]
                          lg:h-[10.4166vw] lg:w-[10.4166vw] lg:blur-[6.18489vw]
                          h-[10.4166vw] w-[10.4166vw] blur-[6.18489vw]"
            />
            <div
              className="absolute z-70 rounded-full biru-cyan left-[85%] bottom-[32%]
                          2xl:h-[160px] 2xl:w-[160px] 2xl:blur-[95px]
                          lg:h-[10.4166vw] lg:w-[10.4166vw] lg:blur-[6.18489vw]
                          h-[10.4166vw] w-[10.4166vw] blur-[6.18489vw]"
            />
          </div>
        </div>
        {/* <div
          className="relative
                      w-[1536px] 2xl:"
        >
          <div className="absolute z-40 w-full rotate-[1.72deg]">
            <img
              className="object-contain"
              src={curve}
              alt=""
              draggable="false"
            />
          </div>
          <div className="absolute z-50 left-[0] bottom-[0] w-[230px] rotate-[-42deg]">
            <img
              className="object-contain"
              src={paper_plane}
              alt=""
              draggable="false"
            />
          </div>
          <div className="absolute z-60 left-[0] bottom-[0] w-[60px] rotate-0">
            <img
              className="object-contain"
              src={star}
              alt=""
              draggable="false"
            />
          </div>
          <div className="absolute z-70 rounded-full biru-cyan left-[0] bottom-[0] h-[160px] w-[160px] blur-[95px]" />
          <div className="absolute z-50 left-[0] bottom-[0] w-[230px] rotate-0">
            <img
              className="object-contain"
              src={paper_plane}
              alt=""
              draggable="false"
            />
          </div>
          <div className="absolute z-60 left-[0] bottom-[0] w-[60px] rotate-[-40deg]">
            <img
              className="object-contain"
              src={star}
              alt=""
              draggable="false"
            />
          </div>
          <div className="absolute z-70 rounded-full biru-cyan left-[0] bottom-[0] h-[160px] w-[160px] blur-[95px]" />
          <div className="absolute z-50 right-[70px] bottom-[0] w-[0] rotate-[-65deg]">
            <img
              className="object-contain"
              src={paper_plane}
              alt=""
              draggable="false"
            />
          </div>
          <div className="absolute z-60 right-[0] bottom-[0] w-[60px] rotate-[-45deg]">
            <img
              className="object-contain"
              src={star}
              alt=""
              draggable="false"
            />
          </div>
          <div className="absolute z-70 rounded-full biru-cyan right-[0] bottom-[0] h-[160px] w-[160px] blur-[95px]" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
