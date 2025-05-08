import Background from "../background";
import TitleWrapper from "../title-wrapper";
import star from "@/assets/star-ornament.webp";

const GMBCCBenefits = () => {
  const benefits: string[] = [
    "Exclusive Company Visit from Case Partner",
    "Bootcamp Session",
    "GMBCC Proof of Participants Certification",
    "Exclusive Mentoring Session for Finalist",
    "Jogja Exclusive Tour",
    "Free Accomodation during Final Round",
  ];
  return (
    <section className="relative min-h-screen w-full bg-backgroundColor">
      <Background />
      <div
        className="z-50 absolute biru-cyan rounded-full 
                    2xl:w-[260px] 2xl:h-[260px] 2xl:top-[280px] 2xl:left-[-30px] 2xl:blur-[95px] 
                    lg:w-[16.927vw] lg:h-[16.927vw] lg:top-[18.2291vw] lg:left-[1.953125vw]  lg:blur-[6.18489vw]
                    w-[23vw] h-[23vw] top-[12%] left-[-4.5%]  blur-[8.3333vw]"
      />
      <div
        className="absolute z-40 biru-cyan mask-[url(@/assets/ornaments/ornament4.webp)] mask-contain mask-center mask-no-repeat
                    2xl:left-[10px] 2xl:top-[280px] 2xl:w-[344px] 2xl:h-[344px] 2xl:blur-[3px]
                    lg:left-[0.651vw] lg:top-[18.2291vw] lg:w-[21.74477vw] lg:h-[21.74477vw] lg:blur-[0.1953vw]
                    left-[-4.5%] top-[12%] w-[30.5555vw] h-[30.55555vw] blur-[0.3vw]"
      />
      <div
        className="z-50 absolute biru-cyan rounded-full 
                    2xl:w-[260px] 2xl:h-[260px] 2xl:top-[500px] 2xl:right-[-60px] 2xl:blur-[95px] 
                    lg:w-[16.927vw] lg:h-[16.927vw] lg:top-[32.552vw] lg:right-[3.90625vw]  lg:blur-[6.1848vw]
                    top-[30%] right-[-7%] h-[32.2222vw] w-[32.2222vw] blur-[11.728vw]"
      />
      <div
        className="absolute z-40 biru-cyan mask-[url(@/assets/ornaments/ornament3.webp)] mask-contain mask-center mask-no-repeat
                    2xl:right-0 2xl:top-[540px] 2xl:w-[188.8px] 2xl:h-[188.8px] 2xl:blur-[3px]
                    lg:right-0 lg:top-[35.15625vw] lg:w-[12.29166vw] lg:h-[12.29166vw] lg:blur-[0.1953vw]
                    top-[35%] right-[-5%] h-[24.1666vw] w-[24.1666vw] blur-[0.3vw]"
      />
      <div
        className="z-41 relative flex flex-col justify-center items-center
                    2xl:gap-[80px]
                    lg:gap-[5.20833vw]
                    gap-[12.6388vw]"
      >
        <div
          data-aos="fade-up"
          className="z-40 relative *:relative flex flex-col justify-center items-center text-center font-damn leading-none text-white
                        2xl:*:text-[120px]
                        lg:*:text-[7.8125vw]
                        *:text-[18.6111vw]"
        >
          <h1>JOIN US AND</h1>
          <TitleWrapper
            color="biru-cyan"
            variant="top-left"
            label="GET ALL BENEFITS"
            className="overflow-visible"
          />
        </div>
        <div
          className="relative flex flex-col justify-center items-center
                        2xl:gap-[64px]
                        lg:gap-[4.16666vw]
                        gap-[16.6666vw]"
        >
          <div
            data-aos="fade-up"
            className="relative flex flex-col justify-center items-center border-white gmbcc *:text-white *:text-wrap *:text-center
                        2xl:rounded-[33.6px] 2xl:border-[3.2px] 2xl:aspect-[3/2] 2xl:w-[442.8px] 2xl:gap-[38.4px] 2xl:shadow-[0px_0px_2.3px_0px_#FFF]
                        lg:rounded-[2.1875vw] lg:border-[0.20833vw] lg:aspect-[3/2] lg:w-[28.828125vw] lg:gap-[2.5vw] lg:shadow-[0px_0px_2.3px_0px_#FFF]
                        rounded-[5.2116vw] border-[0.3333vw] aspect-[3/2] w-[66.6666vw] gap-[4vw] shadow-[0px_0px_1.6666vw_0px_#FFF]"
          >
            <div
              className="z-41 absolute aspect-square right-[-6%] top-[6%] rotate-0
                            2xl:w-[46.4px]
                            lg:w-[3.0208vw]
                            w-[8.0555vw]"
            >
              <img
                src={star}
                alt="star"
                draggable="false"
                className="object-contain"
              />
            </div>
            <div
              className="z-41 absolute aspect-square left-[-6%] bottom-[6%] rotate-45
                            2xl:w-[46.4px]
                            lg:w-[3.0208vw]
                            w-[8.0555vw]"
            >
              <img
                src={star}
                alt="star"
                draggable="false"
                className="object-contain"
              />
            </div>
            <h3
              className=" relative italic leading-tight text-shadow-2xs
                            2xl:text-[38.4px] 2xl:w-[284px]
                            lg:text-[2.5vw] lg:w-[18.4895vw]
                            text-[5.8333vw] w-[45.8vw]"
            >
              Grand prize for winner up to
            </h3>
            <h2
              className="relative font-damn leading-[80%] text-shadow-lg
                            2xl:text-[120px]
                            lg:text-[7.8125vw]
                            text-[18.6111vw]"
            >
              $2000
            </h2>
          </div>
          <div
            className="relative flex flex-col justfify-center items-center
                        2xl:gap-[38.4px]
                        lg:gap-[2.5vw]
                        gap-[2.5vw]"
          >
            <p
              data-aos="fade-up"
              className="text-center text-white italic text-shadow-2xs
                            2xl:text-[25.6px]
                            lg:text-[1.6666vw]
                            text-[4.8486vw]"
            >
              Include:
            </p>
            <div
              className="relative flex flex-wrap justify-center items-center
                            2xl:flex-row 2xl:gap-x-[105.6px] 2xl:gap-y-[130px] 2xl:w-[1400px]
                            lg:flex-row lg:gap-x-[6.875vw] lg:gap-y-[8.4635vw] lg:w-[91.1458vw]
                            flex-col gap-x-[0] gap-y-[4.4444vw] w-auto"
            >
              {benefits?.map((benefits, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    className={`relative flex flex-col justify-center items-center border-white *:text-white *:text-wrap *:text-center *:text-shadow-2xs
                                    2xl:rounded-[33.6px] 2xl:border-[3.2px] 2xl:aspect-[2.45] 2xl:w-[358.4px] 2xl:p-[20px] 2xl:shadow-[0px_0px_19.2px_0px_rgba(255,255,255,0.60)]
                                    lg:rounded-[2.1875vw] lg:border-[0.20833vw] lg:aspect-[2.45] lg:w-[23.33333vw] lg:p-[1.302vw] lg:shadow-[0px_0px_1.25vw_0px_rgba(255,255,255,0.60)]
                                    rounded-[6.3636vw] border-[0.3333vw] aspect-[2.45] w-[66.6666vw] p-[4.86111vw] shadow-[0px_0px_3.6363vw_0px_rgba(255,255,255,0.60)]
                                    
                                    
                                    ${index % 2 === 1 ? "biru-cyan" : "gmbcc"}`}
                  >
                    <p
                      className="italic
                                    2xl:text-[25.6px]
                                    lg:text-[1.6666vw]
                                    text-[4.8486vw]"
                    >
                      {benefits}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GMBCCBenefits;
