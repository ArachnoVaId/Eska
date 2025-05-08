import Background from "@/components/background";
import TitleWrapper from "@/components/title-wrapper";
import { tabData, tabKeys } from "./insight-series-data";
import { Button } from "@/components/ui/button";
import { cn, parsedMarkdown } from "@/lib/utils";
import { useInsightSeriesStore } from "@/stores/insight-series-data";
import { AnimatePresence, motion } from "framer-motion";
import Ornament from "@/assets/ornament-insight-series.webp";

const InsightSeries = () => {
  const { activeTab, setActiveTab } = useInsightSeriesStore();
  const currentData = tabData[activeTab];

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center max-lg:py-10 py-20">
        <div className="relative flex flex-col max-lg:space-y-8 space-y-14 items-center">
          <div className="absolute pointer-events-none z-30 opacity-50 max-lg:w-[200px] max-lg:h-[200px] w-[300px] h-[300px] max-lg:-left-[80px] max-lg:top-[200px] -left-[300px] top-[100px] hijau-ideas rounded-full blur-[200px]" />
          <div className="absolute z-40 max-lg:w-[100px] max-lg:h-[100px] max-lg:-left-[50px] max-lg:top-[250px] w-[180px] h-[180px] -left-[250px] top-[150px]">
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
              label="INSIGHT SERIES"
              color="hijau-ideas"
              variant="top-left"
              className="px-40"
            />
          </h2>
          <div
            data-aos="fade-up"
            className="max-lg:w-[85%] max-xl:w-[800px] w-[1000px] flex flex-wrap justify-center gap-x-10 gap-y-6"
          >
            {tabKeys.map((key) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  key === "Sustainable Insight" || key === "Ideas Summit"
                    ? "max-lg:w-fit max-xl:w-[250px] w-[300px]"
                    : "max-lg:w-fit max-xl:w-[200px] w-[250px]",
                  "cursor-pointer text-putih max-lg:px-3 max-lg:text-sm max-xl:text-2xl text-3xl",
                  activeTab === key &&
                  "bg-linear-[98deg,#FAFAFA_0%,#78B07A_27.72%,#3D8289_85.65%]",
                )}
                variant="hijauHover"
                size="icon"
              >
                <p className="font-semibold italic">{key}</p>
              </Button>
            ))}
          </div>
          <div data-aos="fade-up" className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="max-lg:w-[85%] p-1 rounded-4xl hijau-ideas"
                layout
              >
                <div className="max-lg:w-full max-xl:w-[800px] w-[1000px] flex flex-col justify-center items-center px-6 py-8 rounded-4xl bg-backgroundColor">
                  <p
                    className="text-putih max-lg:text-lg max-xl:text-2xl text-3xl text-justify"
                    dangerouslySetInnerHTML={{
                      __html: parsedMarkdown(currentData.content),
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSeries;
