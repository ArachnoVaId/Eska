import Background from "@/components/background";
import TitleWrapper from "@/components/title-wrapper";
import { tabData, tabKeys } from "./series-of-events-data";
import { Button } from "@/components/ui/button";
import { cn, parsedMarkdown } from "@/lib/utils";
import { useSeriesOfEventsExposureStore } from "@/stores/series-of-events-exposure-store";
import { AnimatePresence, motion } from "framer-motion";
import Ornament from "@/assets/exposure/ornament-series-of-events.webp";

const SeriesOfEventsExposure = () => {
  const { activeTab, setActiveTab } = useSeriesOfEventsExposureStore();
  const currentData = tabData[activeTab];

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />
      <div className="relative min-h-screen z-50 flex justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col max-lg:space-y-8 space-y-14 items-center">
          <div className="absolute biru-muda max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[20px] max-lg:-left-[30px] top-[0px] -left-[210px] w-[200px] h-[200px] blur-[50px]" />
          <div className="absolute z-30 max-lg:w-[80px] max-lg:h-[100px] max-lg:-top-[20px] max-lg:-left-[30px] w-[200px] h-[200px] top-[0px] -left-[210px]">
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
            SERIES OF{" "}
            <TitleWrapper label="EVENTS" color="biru-muda" variant="top-left" />
          </h2>
          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-center items-center space-y-3 max-lg:space-x-4 space-x-6"
          >
            {tabKeys.map((key) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "cursor-pointer text-putih max-lg:text-sm max-xl:text-2xl text-3xl space-x-2",
                  activeTab === key &&
                    "bg-[radial-gradient(233.71%_141.42%_at_100%_0%,_#7E9BFC_0%,_#7D9BFC_49.1%,_#D6BABC_100%)]",
                )}
                variant="biruMudaHover"
                size="icon"
              >
                <p className="font-semibold italic">{key}</p>
              </Button>
            ))}
          </div>
          <div data-aos="fade-up" className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.50)",
                }}
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="max-lg:w-[85%] max-2xl:w-[1000px] w-[1264px] rounded-4xl biru-tua max-lg:px-8 max-lg:py-6 px-14 py-12 flex max-lg:flex-col flex-row max-lg:space-x-0 max-lg:space-y-8 space-x-8 items-stretch"
              >
                <div
                  style={{
                    boxShadow: "0px 0px 12px 0px rgba(255, 255, 255, 0.40)",
                  }}
                  className="max-lg:w-full w-[352px] min-h-[360px] max-lg:h-[200px] flex-none rounded-2xl overflow-hidden"
                >
                  <img
                    src={currentData.image}
                    alt="Series of Events"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                <p
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  className="font-medium max-sm:text-lg max-lg:text-xl max-xl:text-2xl text-[28px] text-putih text-justify"
                  dangerouslySetInnerHTML={{
                    __html: parsedMarkdown(currentData.content),
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesOfEventsExposure;
