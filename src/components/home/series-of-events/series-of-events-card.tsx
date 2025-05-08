import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSeriesOfEventsStore } from "@/stores/series-of-events-store";
import { TabData } from "@/types/series-of-events";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

type SeriesOfEventsCardProps = TabData[keyof TabData];

const SeriesOfEventsCard: FC<SeriesOfEventsCardProps> = ({
  title,
  logo,
  image,
  href,
}) => {
  const { activeTab: key } = useSeriesOfEventsStore();

  return (
    <div
      className={cn(
        "relative overflow-hidden flex flex-col justify-between max-lg:w-[90%] max-xl:w-[800px] w-[1000px] rounded-[64px] space-y-5 p-6 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.50)]",
        key === "gmbcc"
          ? "gmbcc"
          : key === "ideas"
            ? "hijau-ideas"
            : "biru-muda",
      )}
    >
      <div className="z-40 flex justify-center items-center w-full h-[350px] rounded-t-[30px] overflow-hidden">
        <img
          src={image}
          alt="Series of Events"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div
          className={cn(
            "absolute z-30 max-lg:w-[200px] max-xl:w-[300px] w-[370px] px-8 max-lg:rounded-4xl rounded-[100px] max-lg:border-[2px] border-[4px] border-putih",
            key === "gmbcc"
              ? "gmbcc"
              : key === "ideas"
                ? "hijau-ideas"
                : "biru-muda",
          )}
        >
          <img
            alt="Event Logo"
            src={logo}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </div>
      <div
        className={cn(
          "flex flex-col space-y-6 justify-center items-center w-full",
        )}
      >
        <h3 className="font-damn text-putih max-xl:text-5xl text-6xl text-center">
          {title}
        </h3>
        <Button
          className={cn(
            "cursor-pointer text-putih max-xl:text-lg text-xl space-x-2",
          )}
          variant="biruMuda"
          size="icon"
          asChild
        >
          <Link to={href}>
            <p className="font-medium">Read More</p>
            <FaArrowRightLong />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SeriesOfEventsCard;
