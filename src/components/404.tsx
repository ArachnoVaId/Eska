import { Link } from "react-router-dom";
import Background from "./background";
import { Button } from "./ui/button";
import OrnamentRight from "@/assets/ornament-404-1.webp";
import OrnamentLeft from "@/assets/ornament-404-2.webp";
import Ornament from "@/assets/ornament-404-3.webp";

const NotFoundSection = () => {
  return (
    <section className="relative w-full bg-backgroundColor max-lg:py-20">
      <Background />
      <div className="relative min-h-screen z-50 flex justify-center items-center">
        <div className="relative flex flex-col items-center">
          <div className="absolute biru-cyan z-30 opacity-50 w-[300px] h-[300px] -right-[500px] -top-[100px] rounded-full blur-[200px]" />
          <div className="absolute z-30 w-[300px] h-[300px] -right-[450px] -top-[100px]">
            <img
              src={OrnamentRight}
              alt="Ornament"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="absolute z-30 opacity-50 w-[300px] h-[300px] biru-cyan rounded-full -left-[500px] -bottom-[100px] blur-[200px]" />
          <div className="absolute z-30 w-[300px] h-[300px] -left-[500px] -bottom-[100px]">
            <img
              src={OrnamentLeft}
              alt="Ornament"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="absolute z-30 opacity-50 w-[300px] h-[300px] biru-cyan -bottom-[250px] -right-[500px] rounded-full blur-[200px]" />
          <div className="absolute z-30 w-[200px] h-[200px] -bottom-[250px] -right-[500px]">
            <img
              src={Ornament}
              alt="Ornament"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <h1 className="text-putih font-damn max-xl:text-[250px] text-[300px] leading-[1]">404</h1>
          <div className="flex flex-col items-center space-y-9">
            <p className="text-putih font-semibold italic max-lg:text-2xl max-xl:text-3xl text-4xl text-center">
              Oops! It Looks Like The Page Is Not Found.
            </p>
            <Button
              className="max-lg:px-6 max-lg:py-5 px-10 py-7 rounded-[60px]"
              variant="biruTuaHover"
              asChild
            >
              <Link to="/">
                <p className="text-putih font-semibold italic max-lg:text-xl max-xl:text-3xl text-4xl">
                  GO BACK TO HOME PAGE
                </p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
