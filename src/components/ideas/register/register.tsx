import Background from "@/components/background";
import RegisterCard from "@/components/register-card";
import TitleWrapper from "@/components/title-wrapper";
import Ornament from "@/assets/ornament-register.webp";
import { registerData } from "./register-data";

const RegisterIdeas = () => {
  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col items-center justify-center max-lg:space-y-8 space-y-14">
          <div className="absolute z-20 hijau-ideas max-lg:w-[80px] max-lg:h-[100px] max-lg:top-0 max-lg:-right-[80px] top-0 -right-[250px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute max-lg:w-[80px] max-lg:h-[100px] max-lg:top-0 max-lg:-right-[50px] w-[200px] h-[200px] top-0 -right-[200px] z-30">
            <img
              src={Ornament}
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
              color="hijau-ideas"
              variant="bottom-left"
              className="px-20"
            />
          </h2>
          <div
            data-aos="fade-up"
            className="max-lg:grid max-lg:grid-cols-1 max-lg:gap-8 max-xl:gap-10 gap-16 flex flex-row justify-between"
          >
            {registerData.map((data) => (
              <RegisterCard
                key={data.title}
                title={data.title}
                image={data.image}
                buttonLabel={data.buttonLabel}
                buttonLink={data.buttonLink}
                className="hijau-ideas"
                openInNewTab={data.openInNewTab}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterIdeas;
