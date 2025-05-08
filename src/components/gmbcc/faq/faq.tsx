import Background from "@/components/background";
import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqTitle from "@/components/faq/FaqTitle";
import { faqData } from "./faq-data";
import Ornament1 from "@/assets/ornament-faq-gmbcc-1.webp";
import Ornament2 from "@/assets/ornament-faq-gmbcc-2.webp";

const Faq = () => {
  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex flex-col max-lg:space-y-8 space-y-12 justify-center items-center max-lg:py-10 py-20">
        <div data-aos="fade-up">
          <FaqTitle title="ABOUT GMBCC" color="gmbcc" />
        </div>
        <div className="relative max-lg:w-[85%] max-xl:w-[800px] w-[1000px]">
          <div data-aos="fade-up">
            <FaqAccordion items={faqData} />
          </div>

          <div className="absolute gmbcc max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[70px] -top-[150px] -left-[200px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[30px] w-[200px] h-[200px] -top-[150px] -left-[200px]">
            <img
              src={Ornament1}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <div className="absolute gmbcc max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[70px] -bottom-[50px] -right-[250px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[30px] w-[200px] h-[200px] -bottom-[50px] -right-[200px]">
            <img
              src={Ornament2}
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
