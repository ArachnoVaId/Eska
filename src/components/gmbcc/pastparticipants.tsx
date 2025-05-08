import Background from "../background";
import participants_logo_desktop from "@/assets/gmbcc/past_participants.webp";
import participants_logo_mobile from "@/assets/gmbcc/past_participants_mobile.webp";
import TitleWrapper from "../title-wrapper";
import { cn } from "@/lib/utils";

interface PastParticipantsProps {
  primaryColor?: string;
  secondaryColor?: string;
}

const PastParticipants = ({
  primaryColor = "gmbcc",
  secondaryColor = "biru-cyan",
}: PastParticipantsProps) => {
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
          `absolute z-20 mask-[url(@/assets/ornaments/ornament9.webp)] mask-contain mask-center mask-no-repeat
            2xl:left-[48px] 2xl:top-[580px] 2xl:w-[164px] 2xl:h-[164px] 2xl:blur-[2px]
            lg:left-[3.125vw] lg:top-[37.7604vw] lg:w-[10.677vw] lg:h-[10.677vw] lg:blur-[0.1953vw]
            left-[4.2%] top-[19.5%] w-[19.4444vw] h-[19.4444vw] blur-[0.5555vw]`,
          secondaryColor
        )}
      />

      <div
        className={cn(
          `absolute z-70 rounded-full
            2xl:left-[-80px] 2xl:top-[510px] 2xl:h-[270px] 2xl:w-[270px] 2xl:blur-[95px]
            lg:left-[-5.20833vw] lg:top-[33.203125vw] lg:h-[17.578125vw] lg:w-[17.578125vw] lg:blur-[6.1848vw]
            left-[-6%] top-[20%] h-[23.611vw] w-[23.611vw] blur-[8.3333vw]`,
          secondaryColor
        )}
      />

      {/* <div
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
      /> */}

      <div
        className="relative z-40 flex flex-col justify-center items-center
                    2xl:gap-[62.4px]
                    lg:gap-[4.0625vw]
                    gap-[6.388vw]"
      >
        <div className="relative">
          <h1
            data-aos="fade-up"
            className="text-white font-damn
                        2xl:text-[115px]
                        lg:text-[7.4869vw]
                        text-[14.4791vw]"
          >
            <TitleWrapper
              label="OUR PAST PARTICIPANTS"
              color={primaryColor}
              className="2xl:px-[70px] lg:px-[4.55729vw]"
              variant="top-left"
            />
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="text-white font-damn text-center leading-[110%]
                        2xl:tracking-[1.28px] 2xl:text-[64px] 2xl:mt-0 2xl:text-shadow-[0px_0px_16px_rgba(255,255,255,0.60)]
                        lg:tracking-[0.08333vw] lg:text-[4.16666vw] lg:mt-0 lg:text-shadow-[0px_0px_1.04166vw_rgba(255,255,255,0.60)]
                        tracking-tight text-[6.458vw] mt-0 text-shadow-[0px_0px_2vw_rgba(255,255,255,0.60)]"
        >
          <h2 className="">
            1800+ PARTICIPANTS ACROSS THE WORLD
          </h2>
          <h2>
            70+ UNIVERSITIES | 10 YEARS RUNNING
          </h2>
        </div>
        <div className="relative">
          {/* <div
            className={cn(
              `absolute z-110 mask-[url(@/assets/ornaments/ornament5.webp)] mask-contain mask-center mask-no-repeat
                2xl:left-[-15.2%] 2xl:bottom-[-10%] 2xl:h-[320px] 2xl:w-[320px]
                lg:left-[-15.2%] lg:bottom-[-10%] lg:h-[20.8333vw] lg:w-[20.8333vw]
                left-[-15.2%] bottom-[5%] h-[30vw] w-[30vw]`,
              color
            )}
          /> */}
          <div
            data-aos="fade-up"
            className={cn(
              `z-100 relative
                2xl:w-[1011.2px] 2xl:h-fit 2xl:rounded-[38.4px] 2xl:p-[12.8px] 2xl:shadow-[0px_0px_19.2px_0px_rgba(250,250,250,0.40)] 2xl:mt-0
                lg:w-[65.833333vw] lg:h-fit lg:rounded-[2.5vw] lg:p-[0.8333333vw] lg:shadow-[0px_0px_1.25vw_0px_rgba(250,250,250,0.40)] lg:mt-0
                w-[88.333333vw] h-fit rounded-[6.6666666vw] p-[2.7777777vw] shadow-[0px_0px_4vw_0px_rgba(250,250,250,0.40)] mt-[15vw]`,
              primaryColor
            )}
          >
            <div
              className="bg-white w-full h-full overflow-hidden
                          2xl:rounded-[32px]
                          lg:rounded-[2.083333333vw]
                          rounded-[4.8888888vw]"
            >
              <img
                className="object-cover w-full h-full lg:flex hidden"
                src={participants_logo_desktop}
                alt="Our Past Sponsors"
                draggable="false"
              />
              <img
                className="object-cover w-full h-full lg:hidden flex"
                src={participants_logo_mobile}
                alt="Our Past Sponsors"
                draggable="false"
              />
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
      </div>
    </section>
  );
};

export default PastParticipants;
