import Background from "../background";
import past_sponsors from "@/assets/past_sponsors.webp";
import past_sponsors_mobile from "@/assets/past_sponsors_mobile.webp";
import TitleWrapper from "../title-wrapper";
import { cn } from "@/lib/utils";

interface OurPastSponsorsProps {
  color?: string;
}

const OurSponsors = ({
  color = "biru-muda",
}: OurPastSponsorsProps) => {
  return (
    <section
      className="relative w-full bg-backgroundColor justify-center flex
                  2xl:py-[200px]
                  lg:py-[13.0208vw]
                  py-[20vw]"
    >
      <Background />
      <div
        className={cn(
          `absolute z-20 mask-[url(@/assets/ornaments/ornament3.webp)] mask-contain mask-center mask-no-repeat
            2xl:left-[16px] 2xl:top-[-144px] 2xl:w-[270px] 2xl:h-[270px] 2xl:blur-[3px]
            lg:left-[1.04166vw] lg:top-[-9.375vw] lg:w-[17.5781vw] lg:h-[17.5781vw] lg:blur-[0.1953vw]
            left-[1.04166vw] top-[10vw] w-[14.8611vw] h-[14.8611vw] blur-[0.5555vw]`,
          color
        )}
      />

      <div
        className={cn(
          `absolute z-70 rounded-full
            2xl:left-[-40px] 2xl:top-[-170px] 2xl:h-[270px] 2xl:w-[270px] 2xl:blur-[110px]
            lg:left-[-2.0641vw] lg:top-[-11.0677vw] lg:h-[17.5781vw] lg:w-[17.5781vw] lg:blur-[7.1614vw]
            left-[-2.0641vw] top-[12vw] h-[14.4444vw] w-[14.4444vw] blur-[5.5555vw]`,
          color
        )}
      />
      <div
        className={cn(
          `absolute z-40 mask-[url(@/assets/ornaments/ornament4.webp)] mask-contain mask-center mask-no-repeat
            2xl:right-[-64px] 2xl:bottom-[70px] 2xl:h-[270px] 2xl:w-[270px] 2xl:blur-[3px]
            lg:right-[-4.1666vw] lg:bottom-[4.5572vw] lg:h-[17.5781vw] lg:w-[17.5781vw] lg:blur-[0.1953vw]
            right-[-4.1666vw] bottom-[-7vw] h-[30.55555vw] w-[30.55555vw] blur-[0.55555vw]`,
          color
        )}
      />
      <div
        className={cn(
          `absolute z-70 rounded-full
            2xl:right-[-72px] 2xl:bottom-[120px] 2xl:h-[270px] 2xl:w-[270px] 2xl:blur-[110px]
            lg:right-[-4.6875vw] lg:bottom-[7.8125vw] lg:h-[17.5781vw] lg:w-[17.5781vw] lg:blur-[7.1614vw]
            right-[-11vw] bottom-[-7vw] h-[30.55555vw] w-[30.55555vw] blur-[10vw]`,
          color
        )}
      />

      <div
        className="relative z-40 flex flex-col justify-center items-center
                    2xl:gap-[45px]
                    lg:gap-[2.9296vw]
                    gap-[11.1111vw]"
      >
        <div className="relative">
          <h1
            data-aos="fade-up"
            className="text-white font-damn
                        2xl:text-[115px]
                        lg:text-[7.4869vw]
                        text-[14.4791vw]"
          >
            OUR{" "}
            <TitleWrapper
              label="SPONSORS"
              color={color}
              variant="top-left"
            />
          </h1>
        </div>
        <div className="relative">
          <div
            className={cn(
              `absolute z-110 mask-[url(@/assets/ornaments/ornament5.webp)] mask-contain mask-center mask-no-repeat
                2xl:left-[-15.2%] 2xl:bottom-[-10%] 2xl:h-[320px] 2xl:w-[320px]
                lg:left-[-15.2%] lg:bottom-[-10%] lg:h-[20.8333vw] lg:w-[20.8333vw]
                left-[-15.2%] bottom-[5%] h-[30vw] w-[30vw]`,
              color
            )}
          />
          <div
            data-aos="fade-up"
            className={cn(
              `z-100 relative
                2xl:w-[1011.2px] 2xl:rounded-[38.4px] 2xl:p-[12.8px] 2xl:shadow-[0px_0px_19.2px_0px_rgba(250,250,250,0.40)]
                lg:w-[65.833333vw] lg:rounded-[2.5vw] lg:p-[0.8333333vw] lg:shadow-[0px_0px_1.25vw_0px_rgba(250,250,250,0.40)]
                w-[88.333333vw] rounded-[6.6666666vw] p-[2.7777777vw] shadow-[0px_0px_3vw_0px_rgba(250,250,250,0.40)]`,
              color
            )}
          >
            <div
              className="bg-white w-full h-full overflow-hidden
                          2xl:rounded-[32px] 2xl:px-[50px] 2xl:py-[20px]
                          lg:rounded-[2.083333333vw] lg:px-[3.2552vw] lg:py-[1.302vw]
                          rounded-[4.8888888vw]"
            >
              <div className="w-full h-full">
                <img
                  className="object-contain w-full h-full lg:flex hidden"
                  src={past_sponsors}
                  alt="Our Past Sponsors"
                  draggable="false"
                />
                <img
                  className="object-contain w-full h-full lg:hidden flex"
                  src={past_sponsors_mobile}
                  alt="Our Past Sponsors"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
