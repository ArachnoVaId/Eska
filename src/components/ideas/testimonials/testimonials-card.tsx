import type { Testimonial } from "@/types/testimonials";

type TestimonialsCardProps = Testimonial;

const TestimonialsCard = ({
  headline,
  description,
  name,
  status,
}: TestimonialsCardProps) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col max-lg:space-y-5">
          <div className="flex flex-row items-start">
            <p className="max-lg:text-6xl max-xl:text-8xl text-9xl font-damn bg-linear-[98deg,#FAFAFA_0%,#78B07A_27.72%,#3D8289_85.65%] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-clip-text text-transparent">
              "&nbsp;
            </p>
            <h3 className="font-semibold max-lg:text-lg max-xl:text-2xl text-3xl bg-linear-[98deg,#AEE2B0_10%,#78B07A_24%,#3D8289_72%] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-clip-text text-transparent italic">
              {headline}
            </h3>
          </div>
          <p className="max-lg:text-base max-xl:text-2xl text-[28px] text-justify font-medium text-backgroundColor drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            {description}
          </p>
        </div>
        <p className="max-lg:mt-5 mt-6 max-lg:text-sm max-xl:text-lg text-xl text-backgroundColor drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          {name} <br />
          {status}
        </p>
      </div>
    </>
  );
};

export default TestimonialsCard;
