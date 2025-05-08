import Background from "../background";
import texture from "@/assets/noisy-background.webp";
import exposure_logo from "@/assets/logo-exposure.webp";
import star from "@/assets/star-ornament.webp";

const ExposureAbout1 = () => {
  return (
    <section
      className="relative flex justify-center items-center bg-backgroundColor w-full min-h-screen
                    2xl:py-[100px]
                    lg:py-[6.5104vw]
                    py-[15vw]"
    >
      <Background />
      <div
        className="z-30 absolute biru rotate-[0deg] mask-[url(@/assets/ornaments/ornament4.webp)] mask-contain mask-no-repeat mask-center
                    2xl:top-[25%] 2xl:right-[-3%] 2xl:h-[330px] 2xl:w-[330px] 2xl:blur-[4px]
                    lg:top-[25%] lg:right-[-3%] lg:h-[21.5686vw] lg:w-[21.5686vw] lg:blur-[0.2614vw]
                    top-[14%] right-[-9%] h-[40vw] w-[40vw] blur-[0.5vw]"
      />
      <div
        className="z-31 absolute biru
                    2xl:top-[23%] 2xl:right-[-2%] 2xl:h-[260px] 2xl:w-[260px] 2xl:blur-[90px]
                    lg:top-[23%] lg:right-[-2%] lg:h-[16.9270833vw] lg:w-[16.9270833vw] lg:blur-[6.51041vw]
                    top-[12%] right-[-7%] h-[32.2222vw] w-[32.2222vw] blur-[11.728vw]"
      />
      <div
        className="z-40 relative flex flex-col justify-center items-center
                    2xl:gap-[54px]
                    lg:gap-[3.515625vw]
                    gap-[3.515625vw]"
      >
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
          <div>
            <h1>GRAND THEME REVEAL</h1>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col biru
                      2xl:w-[1216px] 2xl:rounded-[38.4px] 2xl:p-[6.4px]
                      lg:w-[79.1666666vw] lg:rounded-[2.5vw] lg:p-[0.416666666vw]
                      p-[1.1111111vw] w-[86.6666vw] rounded-[6.6666666vw]"
        >
          <div
            className="z-50 flex flex-col w-full bg-backgroundColor text-white text-medium
                        2xl:rounded-[32px] 2xl:px-[33.6px] 2xl:py-[60px]
                        lg:rounded-[2.083333333vw] lg:px-[2.1875vw] lg:py-[3.90625vw]
                        rounded-[5.5555555vw] px-[4.16666vw] py-[8.8888vw]"
          >
            <div
              className="flex flex-col leading-tight text-justify
                          2xl:text-[28.8px] 2xl:gap-[30px]
                          lg:text-[1.875vw] lg:gap-[1.9531vw]
                          text-[4.4444vw] gap-[5vw]"
            >
              {" "}
              <p>
                Humans live by fulfilling desires,
                yet dreams often reveal a deeper
                layer of aspirations. EXPOSURE
                2025 aims to explore the blurred
                boundaries between dreams and
                reality.
              </p>
              <p>
                What was your dream last night?
              </p>
              <p>
                This year, we challenge people to
                step boldly into the unknown,
                turning visions into reality and
                daring to live what we have always
                dreamed of.
              </p>
              <p
                className="biru-muda w-fit
                            2xl:px-[12px] 2xl:text-shadow-[0px_3.2px_3.2px_rgba(0,0,0,0.25),0px_3.2px_3.2px_rgba(0,0,0,0.25)]
                            lg:px-[0.78125vw] lg:text-shadow-[0px_0.208333vw_0.208333vw_rgba(0,0,0,0.25),0px_0.208333vw_0.208333vw_rgba(0,0,0,0.25)]
                            px-[3vw] text-shadow-[0px_0.8vw_0.8vw_rgba(0,0,0,0.25),0px_0.8vw_0.8vw_rgba(0,0,0,0.25)]"
              >
                Presenting, EXPOSURE 2025: Mirror
                the dreams, Live the Journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposureAbout1;
