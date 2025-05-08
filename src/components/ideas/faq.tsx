import Background from "../background";
import Ornament from "@/assets/ornament-faq.webp";
import FaqTitle from "../faq/FaqTitle";
import FaqAccordion from "../faq/FaqAccordion";
import { faqData } from "./faq-data";

const Faq = () => {
  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex flex-col max-lg:space-y-8 space-y-12 justify-center items-center max-lg:py-10 py-20">
        <div data-aos="fade-up">
          <FaqTitle title="ABOUT IDEAS" color="hijau-ideas" />
        </div>
        <div
          data-aos="fade-up"
          className="relative max-lg:w-[85%] max-xl:w-[800px] w-[1000px]"
        >
          <FaqAccordion items={faqData} />

          <div className="absolute hijau-ideas max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[70px] -top-[150px] -right-[250px] w-[200px] h-[200px] blur-[50px]" />

          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[30px] w-[150px] h-[150px] -top-[100px] -right-[200px]">
            <img
              src={Ornament}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
