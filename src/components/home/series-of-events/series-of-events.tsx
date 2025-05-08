import { AnimatePresence, motion } from "framer-motion";
import ornament from "@/assets/ornament-pink.webp";
import Background from "@/components/background";
import { tabData, tabKeys } from "./series-of-events-data";
import { Button } from "@/components/ui/button";
import { useSeriesOfEventsStore } from "@/stores/series-of-events-store";
import { cn } from "@/lib/utils";
import SeriesOfEventsCard from "./series-of-events-card";
import TitleWrapper from "@/components/title-wrapper";

const SeriesOfEvents = () => {
  const { activeTab, setActiveTab } = useSeriesOfEventsStore();
  const currentData = tabData[activeTab];

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center py-20">
        <div className="relative flex flex-col items-center space-y-16">
          <div className="absolute z-40 w-[300px] h-[300px] top-[100px] -right-[350px]">
            <img
              src={ornament}
              alt="Ornament"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="absolute z-30 pink rounded-full opacity-50 blur-[200px] w-[300px] h-[300px] top-[100px] -right-[350px]" />

          <h2
            data-aos="fade-up"
            className="font-damn text-putih max-lg:text-5xl max-xl:text-8xl text-9xl"
          >
            SERIES OF{" "}
            <TitleWrapper
              label="EVENTS"
              color="variant-gradient-pink"
              variant="bottom-left"
            />
          </h2>
          <div
            data-aos="fade-up"
            className="flex flex-row max-lg:space-x-4 space-x-8"
          >
            {tabKeys.map((key) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "max-lg:w-[100px] w-[250px] max-xl:w-[200px]",
                  "cursor-pointer text-putih max-lg:text-sm max-xl:text-2xl text-3xl space-x-2",
                  activeTab === key && key === "gmbcc"
                    ? "bg-linear-[113deg,#256EB0_14.92%,#14A9A0_49.95%,#64D7CB_84.97%]"
                    : activeTab === key && key === "ideas"
                      ? "bg-linear-[98deg,#FAFAFA_0%,#78B07A_27.72%,#3D8289_85.65%]"
                      : activeTab === key && key === "exposure"
                        ? "bg-[radial-gradient(233.71%_141.42%_at_100%_0%,_#7E9BFC_0%,_#7D9BFC_49.1%,_#D6BABC_100%)]"
                        : "",
                )}
                variant={
                  key === "gmbcc"
                    ? "birucyanHover"
                    : key === "ideas"
                      ? "hijauIdeasHover"
                      : "biruMudaHover"
                }
                size="icon"
              >
                <p className="font-semibold italic">{key.toUpperCase()}</p>
              </Button>
            ))}
          </div>
          <div data-aos="fade-up">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex justify-center items-center"
              >
                <SeriesOfEventsCard {...currentData} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesOfEvents;
