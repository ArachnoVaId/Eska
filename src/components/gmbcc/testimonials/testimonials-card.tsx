import { Testimonial } from "@/types/gmbcc";

type TestimonialsCardProps = Testimonial;

const TestimonialsCard = ({ content, from }: TestimonialsCardProps) => {
  return (
    <div
      style={{ boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.40)" }}
      className="p-2 rounded-3xl biru-muda"
    >
      <div className="relative max-xl:w-[350px] w-[440px] h-full flex flex-col justify-between max-lg:px-5 max-lg:py-8 px-8 py-10 bg-putih rounded-2xl">
        <div className="relative flex flex-col pt-10">
          <p className="absolute top-0 -left-[10px] max-lg:text-6xl max-xl:text-8xl text-9xl font-damn bg-linear-[113deg,#256EB0_14.92%,#14A9A0_49.95%,#64D7CB_84.97%] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-clip-text text-transparent">
            "&nbsp;
          </p>
          <p
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="font-medium max-lg:text-xl max-xl:text-2xl text-[28px] text-backgroundColor text-justify"
          >
            {content}
          </p>
        </div>
        <p
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          className="max-lg:text-lg text-xl text-backgroundColor text-center"
        >
          {from}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
