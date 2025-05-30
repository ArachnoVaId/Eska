import Background from "@/components/background";
import TitleWrapper from "@/components/title-wrapper";
import { timelineData, timelineKeys } from "./timeline-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTimelineGmbccStore } from "@/stores/timeline-gmbcc-store";
import { AnimatePresence, motion } from "framer-motion";
import Ornament from "@/assets/ornament-timeline-gmbcc.webp";

const TimelineGmbcc = () => {
  const { activeTab, setActiveTab } = useTimelineGmbccStore();
  const currentData = timelineData[activeTab];

  return (
    <section className="relative w-full bg-backgroundColor max-lg:py-10 py-20">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center">
        <div className="relative flex flex-col max-lg:space-y-8 space-y-14 justify-center items-center">
          <div className="absolute z-30 opacity-50 max-lg:w-[100px] max-lg:h-[100px] max-lg:-top-[50px] max-lg:left-[0px] w-[300px] h-[300px] -left-[350px] top-[100px] gmbcc rounded-full blur-[200px]" />

          <div className="absolute z-30 max-lg:w-[100px] max-lg:h-[100px] max-lg:-top-[50px] max-lg:left-[0px] w-[250px] h-[250px] top-[150px] -left-[300px]">
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
              label="TIMELINE"
              color="gmbcc"
              variant="top-left"
              className="px-20"
            />
          </h2>
          <div
            data-aos="fade-up"
            className="flex flex-row max-lg:space-x-2 space-x-10"
          >
            {timelineKeys.map((key) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "max-lg:w-fit w-[150px]",
                  "cursor-pointer text-putih max-lg:text-sm max-xl:text-2xl text-3xl space-x-2",
                  activeTab === key &&
                  "bg-linear-[113deg,#256EB0_14.92%,#14A9A0_49.95%,#64D7CB_84.97%]",
                )}
                variant="birucyanHover"
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
                className="max-lg:w-[85%] p-3 max-lg:rounded-3xl rounded-4xl biru-cyan"
              >
                <div className="max-lg:w-full max-xl:w-[800px] w-[1000px] max-lg:rounded-3xl rounded-4xl bg-backgroundColor flex flex-col justify-center items-center py-12">
                  {currentData.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineGmbcc;
