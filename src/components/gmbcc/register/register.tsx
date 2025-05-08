import Background from "@/components/background";
import RegisterCard from "@/components/register-card";
import TitleWrapper from "@/components/title-wrapper";
import { registerData } from "./register-data";
import Ornament1 from "@/assets/ornament-faq-gmbcc-1.webp";
import Ornament2 from "@/assets/ornament-register-gmbcc.webp";

const RegisterGmbcc = () => {
  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col items-center justify-center max-lg:space-y-8 space-y-14">
          <div className="absolute gmbcc max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[70px] -top-[0px] -left-[100px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[30px] w-[200px] h-[200px] -top-[0px] -left-[100px]">
            <img
              src={Ornament1}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <div className="absolute gmbcc max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[70px] -bottom-[0px] -right-[50px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[100px] max-lg:-right-[30px] w-[200px] h-[200px] -bottom-[0px] -right-[50px]">
            <img
              src={Ornament2}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <h2
            data-aos="fade-up"
            className="font-damn max-lg:text-5xl max-xl:text-8xl text-9xl text-center text-putih"
          >
            <TitleWrapper
              label="REGISTER NOW!"
              color="gmbcc"
              variant="bottom-left"
              className="px-20"
            />
          </h2>
          <div className="max-2xl:w-[85%] w-[1536px] max-lg:grid max-lg:grid-cols-1 max-lg:gap-8 max-xl:gap-10 gap-16 flex flex-wrap justify-center items-center">
            {registerData.map((data) => (
              <RegisterCard
                key={data.title}
                title={data.title}
                image={data.image}
                buttonLabel={data.buttonLabel}
                buttonLink={data.buttonLink}
                secondButtonLabel={data?.secondButtonLabel}
                secondButtonLink={data?.secondButtonLink}
                className="gmbcc"
                isSecondButton={true}
                openInNewTab={data.openInNewTab}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterGmbcc;
