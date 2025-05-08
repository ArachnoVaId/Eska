import Background from "../background";
import TitleWrapper from "../title-wrapper";
import Ornament from "@/assets/ornament-register-gmbcc.webp";

const AfterMovie = () => {
  return (
    <section className="relative w-full bg-backgroundColor max-lg:py-10 py-20">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center">
        <div className="relative flex flex-col max-lg:space-y-8 space-y-14 justify-center items-center">
          <div className="absolute gmbcc max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[50px] max-lg:-left-[30px] top-[0px] -left-[220px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[50px] max-lg:h-[80px] max-lg:-top-[50px] max-lg:-left-[30px] w-[200px] h-[200px] top-[0px] -left-[220px]">
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
            AFTER MOVIE{" "}
            <TitleWrapper
              label="GMBCC"
              color="gmbcc"
              variant="bottom-left"
            />
          </h2>
          <div
            data-aos="fade-up"
            className="max-lg:p-1 p-3 max-lg:rounded-3xl rounded-4xl biru-cyan"
          >
            <div className="max-sm:w-[300px] max-lg:w-[500px] max-xl:w-[800px] w-[1000px] max-lg:rounded-3xl rounded-4xl bg-backgroundColor flex flex-col justify-center items-center overflow-hidden">
              <div className="w-full aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1n3ZWrT1bBvCJEWmwllfIC7gXlM-dPOkI/preview"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterMovie;
