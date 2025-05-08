import Background from "../background";
import TitleWrapper from "../title-wrapper";

const NationalBusinessPlanCompetition = () => {
  return (
    <section
      className="relative flex justify-center items-center w-full bg-backgroundColor
                  2xl:py-[100px]
                  lg:py-[6.5104vw]
                  py-[15vw]"
    >
      <Background />
      <div className="relative">
        <div
          className="z-40 relative flex flex-col justify-center items-center
                    2xl:gap-[64px]
                    lg:gap-[4.16666vw]
                    gap-[9.16666vw]"
        >
          <h1
            data-aos="fade-up"
            className="z-40 relative font-damn text-white tracking-wide
                      2xl:text-[96px] 2xl:w-auto
                      lg:text-[6.25vw] lg:w-auto
                      text-[13.3333vw] w-[73.8888vw]"
          >
            <TitleWrapper
              label="NATIONAL BUSINESS PLAN COMPETITION"
              variant="top-left"
              color="hijau-ideas"
              className=" lg:flex hidden
                        2xl:px-[30px] 
                        lg:px-[1.953125vw]
                        px-[1.953125vw]"
            />
          </h1>
          <div
            className="lg:hidden flex flex-col justify-center items-center text-white text-center font-damn leading-none border-white hijau-ideas text-wrap leading-npne
                      text-[13.3333vw] w-[75vw] rounded-[2.7777vw] border-[0.19444vw] p-[2.4vw]"
            style={{
              boxShadow: "0px 0px 16px 0px #FFF",
              textShadow:
                "0px 0px 30px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.50)",
            }}
          >
            <h1>
              NATIONAL BUSINESS PLAN COMPETITION
            </h1>
          </div>
          <div className="relative">
            <div
              className="z-30 absolute hijau-ideas rotate-[0deg] mask-[url(@/assets/ornament-rectangle.webp)] mask-contain mask-no-repeat mask-center
                        2xl:left-[-135px]  2xl:bottom-[140px] 2xl:h-[128px] 2xl:w-[128px] 2xl:blur-[2px]
                        lg:left-[-8.789vw] lg:bottom-[9.1145vw] lg:h-[8.3333vw] lg:w-[8.3333vw] lg:blur-[0.130208vw]
                        left-[-8.789vw] bottom-[-20vw] h-[20vw] w-[20vw] blur-[0.555555vw]"
            />
            <div
              className="z-30 absolute hijau-ideas
                        2xl:bottom-[120px] 2xl:left-[-260px] 2xl:h-[260px] 2xl:w-[260px] 2xl:blur-[100px]
                        lg:bottom-[7.8125vw] lg:left-[-16.927vw] lg:h-[16.927vw] lg:w-[16.927vw] lg:blur-[6.51041vw]
                        bottom-[-40vw] left-[-13vw] h-[40.5555vw] w-[40.5555vw] blur-[14.4444vw]"
            />
            <div
              data-aos="fade-up"
              className="relative overflow-hidden hijau-ideas
                        2xl:p-[6.4px] 2xl:w-[1216px] 2xl:rounded-[38.4px]
                        lg:p-[0.4166vw] lg:w-[79.16666vw] lg:rounded-[2.5vw]
                        p-[1.1111111vw] w-[86.6666vw] rounded-[6.6666666vw]"
            >
              <div
                className="z-40 relative flex flex-col w-full h-full bg-backgroundColor *:font-medium *:text-justify *:text-white leading-tight
                          2xl:rounded-[32px] 2xl:px-[36px] 2xl:py-[70.4px] 2xl:gap-[40px] 2xl:text-[28.8px]
                          lg:rounded-[2.0833333vw] lg:px-[2.34375vw] lg:py-[4.583333vw] lg:gap-[2.604166vw] lg:text-[1.875vw]
                          rounded-[5.5555555vw] px-[4.16666vw] py-[8.8888vw] gap-[4vw] text-[4.4444vw]"
              >
                <p className="relative z-100">
                  <strong>IDEAS Batch 11</strong>{" "}
                  akan membawakan{" "}
                  <strong>sustainability</strong>{" "}
                  sebagai fokus utama National
                  Business Plan Competition dan
                  Insight Series. IDEAS mengangkat
                  tema tersebut untuk merespons
                  keadaan serta tantangan yang ada
                  saat ini yang penuh dengan
                  ketidakpastian.{" "}
                </p>
                <p className="z-100 relative">
                  Tema ini tidak hanya relevan
                  dengan isu global, tetapi juga
                  memberikan manfaat yang luas
                  bagi semua pihak yang terlibat.
                  Dengan membangun bisnis
                  berkelanjutan, peserta tidak
                  hanya menciptakan keuntungan
                  finansial tetapi juga kontribusi
                  nyata untuk masa depan yang
                  lebih baik. Kompetisi ini
                  menjadi langkah penting dalam
                  membentuk generasi wirausaha
                  yang inovatif, tangguh, dan
                  peduli terhadap keberlanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalBusinessPlanCompetition;
