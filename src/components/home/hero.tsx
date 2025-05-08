import texture from "@/assets/noisy-background.webp";
import star from "@/assets/star-ornament.webp";
import ornament from "@/assets/ornament-hero.svg";
import ornamentLeft from "@/assets/ornament-footer.webp";
import ornamentRight from "@/assets/ornament-rectangle.webp";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Background from "../background";

const Hero = () => {
  const scrollToTarget = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />
      <div className="relative min-h-screen z-50 flex justify-center items-center">
        <div className="relative flex flex-col max-sm:space-y-7 space-y-9 items-center z-50">
          <div className="absolute bg-[#263B90] -bottom-[110px] w-[150%] h-24 blur-[50px]" />
          <div className="absolute z-40 pointer-events-none max-sm:-bottom-[150px] max-lg:-bottom-[250px] -bottom-[400px] opacity-50 max-sm:w-[125%] w-[150%]">
            <img
              src={ornament}
              alt="Ornament"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="absolute z-40 max-sm:w-[80px] max-xl:w-[150px] w-[200px] h-[200px] max-sm:-left-[50px] max-sm:-top-[75px] max-xl:-left-[130px] max-xl:-top-[50px] top-[0px] -left-[150px]">
            <img
              src={ornamentRight}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <div className="absolute z-30 opacity-50 max-sm:w-[250px] max-sm:h-[250px] w-[300px] h-[300px] biru-cyan rounded-full max-xl:-left-[230px] max-xl:-top-[90px] -top-[70px] -left-[200px] blur-[200px]" />

          <div className="absolute z-40 max-sm:w-[90px] max-xl:w-[170px] w-[180px] h-[250px] max-sm:top-[100px] max-sm:-right-[50px] max-xl:top-[180px] max-xl:-right-[100px] top-[250px] -right-[100px]">
            <img
              src={ornamentLeft}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <div className="absolute z-30 opacity-50 max-sm:w-[250px] max-sm:h-[250px] w-[300px] h-[300px] biru-ungu-pink rounded-full max-xl:top-[180px] max-xl:-right-[130px] top-[250px] -right-[150px] blur-[200px]" />

          <div
            className="max-sm:px-5 max-lg:px-8 max-sm:py-2 max-lg:py-3 max-xl:px-12 max-xl:py-4 px-16 py-5 border-2 border-putih rounded-[65px] backdrop-blur-sm linear-putih-transparan"
            style={{ boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.40)" }}
            data-aos="fade-up"
          >
            <h1 className="text-putih font-semibold italic max-sm:text-2xl max-lg:text-4xl max-xl:text-5xl text-6xl">
              WELCOMING
            </h1>
          </div>
          <div className="relative">
            <div
              className="relative max-sm:px-5 max-lg:px-8 max-xl:px-12 px-16 max-sm:pt-3 max-lg:pt-5 pt-10 max-sm:pb-[5px] max-lg:pb-[10px] pb-[20px] max-lg:border-[3px] border-[5px] border-putih rounded-[40px] overflow-hidden variant-gradient-pink"
              style={{
                boxShadow: "0px 0px 16px 0px #FFF",
              }}
              data-aos="fade-up"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 z-20 pointer-events-none"
                style={{ backgroundImage: `url(${texture})` }}
              />

              <h1
                className="text-putih font-damn max-sm:text-4xl max-lg:text-6xl max-xl:text-8xl text-9xl text-center leading-[1]"
                style={{
                  textShadow:
                    "0px 0px 30px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.50)",
                }}
              >
                THE 19TH MANAGEMENT’S EVENTS
              </h1>
            </div>
            <div className="max-lg:hidden block absolute z-30 w-[60px] h-[60px] top-[40px] -right-[20px]">
              <img
                src={star}
                alt="Star Ornament"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <div className="max-lg:hidden block absolute z-30 w-[80px] h-[80px] -bottom-[20px] -left-[30px]">
              <img
                src={star}
                alt="Star Ornament"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
          <Button
            onClick={scrollToTarget}
            className="cursor-pointer text-putih max-sm:px-4 max-sm:py-2 max-sm:text-lg max-lg:text-xl max-xl:text-2xl text-3xl space-x-2"
            variant="biruMudaHover"
            size="icon"
            data-aos="fade-up"
          >
            <p className="font-medium">About Us</p>
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
