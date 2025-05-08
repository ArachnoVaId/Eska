import Background from "@/components/background";
import HighlightedLabel from "@/components/ideas/timeline/highlighted-label";
import TitleWrapper from "@/components/title-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RegistrantType } from "@/types/gmbcc";
import { ReactNode } from "react";
import { priceData } from "./price-data";

interface RegistrationInformationGmbccProps {
  title: string;
  registrantType: RegistrantType;
}

const RegistrationInformationGmbcc = ({
  title,
  registrantType,
}: RegistrationInformationGmbccProps) => {
  const textClassName =
    "text-putih text-justify max-lg:text-xl max-xl:text-2xl text-3xl font-medium";
  const price = priceData[registrantType];

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center py-40">
        <div className="flex flex-col space-y-12 items-center">
          <h2 className="font-damn max-sm:text-3xl max-lg:text-5xl max-xl:text-8xl text-9xl text-center text-putih">
            <TitleWrapper
              label={title}
              color="gmbcc"
              variant="top-left"
              className="px-20"
            />
          </h2>
          <Card>
            <div className="flex flex-col">
              <div className={cn(textClassName, "space-y-6")}>
                <p>
                  The competition consists of three rounds, the preliminary
                  round, the semifinal round, and the final round.
                </p>
                <p>
                  The Preliminary Round is the first stage where the
                  participants will compile an essay containing the conclusion
                  of the given case. All papers submitted by GMBCC participants
                  will undergo an assessment process of each paper by the judges
                  based on the score matrix and the rules determined by the
                  committee.
                </p>
                <p>
                  The semi-final round will be conducted with participants
                  presenting the deck of resolution of the case. After that, the
                  five teams with the highest accumulated scores will qualify
                  for the final round. Teams that qualify for the final round
                  will be given a new case to be analyzed within one week of
                  processing.
                </p>
                <p>
                  The final round consists of a presentation session and a
                  debate session, with the debate based on a mini case that
                  participants will need to complete within 1 hour on the final
                  day. The entire GMBCC 2025 series of events will be conducted
                  hybrid using the Zoom Meetings app for online and offline
                  subevents in FEB UGM.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-12 mt-10">
                <Information
                  title="EARLY BIRD REGISTRATION"
                  date="April 12th - April 20th, 2025"
                  price={price.earlyBirdPrice || "Free"}
                  priceInter={price.earlyBirdPriceInter || "Free"}
                />
                <Information
                  title="NORMAL REGISTRATION"
                  date="April 21st - May 11th, 2025"
                  price={price.normalPrice || "Free"}
                  priceInter={price.normalPriceInter || "Free"}
                />
                <Information
                  title="EXTENDED REGISTRATION"
                  date="May 12th - May 18th, 2025"
                  price={price.extendedPrice || "Free"}
                  priceInter={price.extendedPriceInter || "Free"}
                />
              </div>
            </div>
          </Card>
          <div className="flex flex-row max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 space-x-4">
            <Button
              variant="birucyanHover"
              size="icon"
              className={cn(textClassName, "font-semibold italic")}
              asChild
            >
              <a
                href={
                  registrantType === "team"
                    ? "/registration/GMBCC%20Team%20National"
                    : registrantType === "individual"
                      ? "/registration/GMBCC%20Individual%20National"
                      : "#"
                }
              >
                Register Now! - National
              </a>
            </Button>
            <Button
              variant="birucyanHover"
              size="icon"
              className={cn(textClassName, "font-semibold italic")}
              asChild
            >
              <a
                href={
                  registrantType === "team"
                    ? "/registration/GMBCC%20Team%20International"
                    : registrantType === "individual"
                      ? "/registration/GMBCC%20Individual%20International"
                      : "#"
                }
              >
                Register Now! - International
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative 2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] w-[85%] p-1 rounded-4xl biru-cyan">
      <div className="w-full flex px-5 py-8 bg-backgroundColor rounded-4xl">
        {children}
      </div>
    </div>
  );
};

const Information = ({
  title,
  date,
  price,
  priceInter,
}: {
  title: string;
  date: string;
  price: string;
  priceInter: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <HighlightedLabel className="gmbcc">{title}</HighlightedLabel>
      <HighlightedLabel className="biru-cyan">{date}</HighlightedLabel>
      <p className="text-putih text-center max-lg:text-xl max-xl:text-2xl text-3xl font-medium">
        With a Registration Fee of
        <ul>Domestic: {price}</ul>
        <ul>International: {priceInter}</ul>
      </p>
    </div>
  );
};

export default RegistrationInformationGmbcc;
