import Background from "../background";
import exposure_media_image from "@/assets/media_partners.webp";
import exposure_media_image_mobile from "@/assets/media_partners_mobile.webp";
import placeholder from "@/assets/placeholder.webp";
import TitleWrapper from "../title-wrapper";
import { cn } from "@/lib/utils";

interface OurMediaPartnerProps {
  variant?:
    | "home"
    | "ideas"
    | "gmbcc"
    | "exposure";
  color?: string;
}

const OurMediaPartners = ({
  variant = "home",
  color = "variant-gradient-pink",
}: OurMediaPartnerProps) => {
  let imageDesktop: string = "";
  let imageMobile: string = "";

  switch (variant) {
    case "home":
      imageDesktop = placeholder;
      imageMobile = placeholder;
      break;
    case "ideas":
      imageDesktop = placeholder;
      imageMobile = placeholder;
      break;
    case "gmbcc":
      imageDesktop = placeholder;
      imageMobile = placeholder;
      break;
    case "exposure":
      imageDesktop = exposure_media_image;
      imageMobile = exposure_media_image_mobile;
      break;
  }

  return (
    <section
      className="relative w-full bg-backgroundColor justify-center flex
                  2xl:py-[200px]
                  lg:py-[13.0208vw]
                  py-[20vw] pb-[50vw]"
    >
      <Background />
      <div
        className={cn(
          `absolute z-40 mask-[url(@/assets/ornaments/ornament6.webp)] mask-contain mask-center mask-no-repeat
            2xl:-left-[30px] 2xl:top-[164px] 2xl:w-[240px] 2xl:h-[240px] 2xl:blur-[3px]
            lg:-left-[1.9531vw] lg:top-[10.677vw] lg:w-[15.625vw] lg:h-[15.625vw] lg:blur-[0.1953vw]
            -left-[1.9531vw] top-[87%] w-[30.5555vw] h-[30.5555vw] blur-[0.55555vw]`,
          color
        )}
      />
      <div
        className={cn(
          `absolute z-70
            2xl:left-[-112px] 2xl:top-[164px] 2xl:h-[270px] 2xl:w-[270px] 2xl:blur-[110px]
            lg:left-[-7.2916vw] lg:top-[10.677vw] lg:h-[17.5781vw] lg:w-[17.5781vw] lg:blur-[7.1614vw]
            left-[-5vw] top-[90%] h-[20vw] w-[20vw] blur-[7vw]`,
          color
        )}
      />
      <div
        className="relative flex flex-col justify-center items-center 
                    2xl:gap-[45px]
                    lg:gap-[2.9296vw]
                    gap-[11.1111vw]"
      >
        <div className="z-100 relative">
          <h1
            data-aos="fade-up"
            className="text-white font-damn
                         2xl:text-[115px]
                         lg:text-[7.4869vw]
                         text-[14.4791vw]"
          >
            OUR{" "}
            <TitleWrapper
              label="MEDIA PARTNERS"
              color={color}
              variant="top-left"
            />
          </h1>
        </div>
        <div className="relative">
          <div
            className={cn(
              `absolute z-80 mask-[url(@/assets/ornaments/ornament7.webp)] mask-contain mask-center mask-no-repeat
                2xl:right-[-15.3%] 2xl:top-[-15%] 2xl:h-[320px] 2xl:w-[320px] 
                lg:right-[-15.3%] lg:top-[-15%] lg:h-[20.8333vw] lg:w-[20.8333vw]
                right-[-19%] top-[-0%] h-[36.6666vw] w-[36.6666vw]`,
              color
            )}
          />
          <div
            data-aos="fade-up"
            className={cn(
              `z-30 relative
                2xl:w-[1011.2px] 2xl:rounded-[38.4px] 2xl:p-[12.8px] 2xl:shadow-[0px_0px_19.2px_0px_rgba(250,250,250,0.40)]
                lg:w-[65.8333vw] lg:rounded-[2.5vw] lg:p-[0.833333vw] lg:shadow-[0px_0px_1.25vw_0px_rgba(250,250,250,0.40)]
                w-[88.333333vw] rounded-[6.6666666vw] p-[2.7777777vw] shadow-[0px_0px_3vw_0px_rgba(250,250,250,0.40)]`,
              color
            )}
          >
            <div
              className="bg-white w-full h-full overflow-hidden
                          2xl:rounded-[32px] 2xl:px-[40px] 2xl:py-[30px]
                          lg:rounded-[2.0833333vw] lg:px-[2.6041vw] lg:py-[1.953125vw]
                          rounded-[4.8888888vw] py-[7vw]"
            >
              <div className="w-full h-full">
                <img
                  className="object-contain w-full h-full lg:flex hidden"
                  src={imageDesktop}
                  alt="Our Past Sponsors"
                  draggable="false"
                />
                <img
                  className="object-contain w-full h-full lg:hidden flex"
                  src={imageMobile}
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

export default OurMediaPartners;
