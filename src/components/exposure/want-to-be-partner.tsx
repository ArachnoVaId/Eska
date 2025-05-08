import Background from "../background";
import TitleWrapper from "../title-wrapper";
import { Button } from "../ui/button";
import Ornament from "@/assets/exposure/ornament-sponsor.webp";

const WantToBePartner = () => {
  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />
      <div className="relative min-h-screen z-50 flex justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col max-lg:space-y-8 space-y-14 items-center">
          <div className="absolute biru-tua max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[70px] top-[80px] -right-[230px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[30px] w-[250px] h-[250px] top-[100px] -right-[210px]">
            <img
              src={Ornament}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <h2
            data-aos="fade-up"
            className="font-damn text-putih max-lg:text-5xl max-xl:text-8xl text-9xl text-center space-y-4"
          >
            WANT TO BE PART OF
            <br />
            <TitleWrapper
              label="EXPOSURE PARTNER?"
              color="biru-muda"
              variant="top-left"
            />
          </h2>
          <p
            data-aos="fade-up"
            className="font-semibold text-putih max-sm:text-xl max-lg:text-2xl text-center text-4xl italic"
          >
            Contact us through the link below and become a part of Exposure
            Partner!
          </p>
          <Button
            data-aos="fade-up"
            variant="biruMudaHover"
            size="icon"
            className="cursor-pointer text-putih max-sm:text-xl max-lg:text-2xl text-3xl"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1N522HOLyCJuc8vkAi-2yH-qmcgBZh9wc/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold italic">
                ACCESS OUR SPONSORSHIP
                <br />
                PROPOSAL EXPOSURE 2025
              </p>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WantToBePartner;
