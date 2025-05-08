import Background from "../background";
import { footerData } from "../footer/footer-data";
import TitleWrapper from "../title-wrapper";
import { Button } from "../ui/button";
import ContactItem from "./contact-item";
import texture from "@/assets/noisy-background.webp";
import Ornament1 from "@/assets/ornament-faq-gmbcc-1.webp";
import Ornament2 from "@/assets/ornament-faq-gmbcc-2.webp";

const ContactUs = () => {
  return (
    <section className="relative w-full bg-backgroundColor py-32">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center">
        <div className="relative flex flex-col max-sm:space-y-7 space-y-32 items-center z-50">
          <div className="absolute gmbcc max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[70px] top-[50px] -right-[50px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[30px] w-[200px] h-[200px] top-[50px] -right-[50px]">
            <img
              src={Ornament1}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <div className="absolute gmbcc max-lg:w-[80px] max-lg:h-[100px] max-lg:-bottom-[130px] max-lg:-left-[0px] -bottom-[50px] -left-[200px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-bottom-[130px] max-lg:-left-[0px] w-[200px] h-[200px] -bottom-[50px] -left-[200px]">
            <img
              src={Ornament2}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <div className="flex flex-col max-lg:space-y-10 space-y-20 items-center">
            <h2
              data-aos="fade-up"
              className="font-damn max-lg:text-5xl max-xl:text-8xl text-9xl text-center text-putih"
            >
              <TitleWrapper
                label="CONTACT US"
                color="biru-tua"
                variant="hidden"
                className="px-20"
              />
            </h2>
            <ul data-aos="fade-up" className="max-lg:space-y-4 space-y-8">
              {footerData.contact.map((contact) => (
                <ContactItem key={contact.label} {...contact} />
              ))}
            </ul>
          </div>
          <div className="flex flex-col max-lg:space-y-10 space-y-20 items-center">
            <div
              data-aos="fade-up"
              style={{ boxShadow: "0px 0px 13.787px 0px #FFF" }}
              className="relative max-xl:w-[85%] w-[1400px] max-lg:px-8 max-lg:py-4 px-16 py-10 rounded-3xl border-[2px] border-putih biru-tua"
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-50 z-20 pointer-events-none"
                style={{ backgroundImage: `url(${texture})` }}
              />
              <p className="text-putih max-lg:text-2xl max-xl:text-3xl text-4xl font-medium text-justify">
                We eagerly invite potential partners to bring their unique ideas
                and initiatives to our table. To discuss how your brand can
                benefit from becoming a partner of The 19th Management's Event,
                please contact the person in charge to negotiate the costs and
                details of alternative offers.
              </p>
            </div>
            <Button
              data-aos="fade-up"
              variant="biruTuaHover"
              size="icon"
              asChild
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://wa.me/6281326023987"
              >
                <p className="text-putih max-sm:text-sm max-lg:text-lg text-3xl font-semibold italic text-center">
                  Sponsorship & Collaboration: <br className="sm:hidden" /> +62
                  813-2602-3987 (Victorio)
                </p>
              </a>
            </Button>
            <Button
              data-aos="fade-up"
              variant="biruTuaHover"
              size="icon"
              asChild
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://wa.me/6282226542015"
              >
                <p className="text-putih max-sm:text-sm max-lg:text-lg text-3xl font-semibold italic text-center">
                  Media Partnership: <br className="sm:hidden" /> +62
                  822-2654-2015 (Dea)
                </p>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
