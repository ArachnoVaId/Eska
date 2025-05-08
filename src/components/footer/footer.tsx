import Logo from "@/assets/logo-me.webp";
import LogoArachnoVa from "@/assets/logo-arachnova.webp";
import { Link } from "react-router-dom";
import { footerData } from "./footer-data";
import FooterColumn from "./footer-column";
import FooterContact from "./footer-contact";
import Ornament from "@/assets/ornament-footer.webp";
import Background from "../background";

const Footer = () => {
  return (
    <footer className="relative w-full bg-backgroundColor overflow-hidden">
      <Background />

      <div className="absolute z-40 w-[180px] h-[250px] -left-[50px] top-[100px]">
        <img
          src={Ornament}
          alt="Ornament"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div className="absolute z-30 opacity-50 w-[300px] h-[300px] -left-[130px] top-[150px] biru-ungu-pink rounded-full blur-[200px]" />

      <div className="relative z-50 flex flex-col max-lg:items-center lg:flex-row justify-between max-lg:space-y-7 max-sm:px-12 max-lg:px-20 max-xl:px-28 px-40 py-10">
        <div className="flex flex-col max-lg:items-center max-lg:space-y-0 space-y-16">
          <Link
            to="/"
            className="max-lg:w-[320px] max-lg:h-full max-xl:w-[200px] w-[260px] h-[80px]"
          >
            <img
              src={Logo}
              alt="The 19th Managements FEB UGM Logo"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </Link>
          <div className="hidden lg:flex flex-col space-y-8">
            <h2 className="font-medium max-xl:text-2xl text-3xl text-putih">
              Developed By
            </h2>
            <a
              href="https://arachnova.id"
              className="flex flex-row items-center gap-x-3 group"
            >
              <div className="max-xl:w-[45px] w-[60px] h-[41px]">
                <img
                  src={LogoArachnoVa}
                  alt="ArachnoVa Logo"
                  className="w-full h-full object-contain group-hover:opacity-50 transition-all ease-in-out duration-300"
                  draggable={false}
                />
              </div>
              <p className="max-xl:text-xl text-2xl text-putih group-hover:text-gray-500 transition-all ease-in-out duration-300">
                ArachnoVa.id
              </p>
            </a>
          </div>
        </div>
        {footerData.column.map((column) => (
          <FooterColumn key={column.title} {...column} />
        ))}
        <FooterContact title="Contact Us" contacts={footerData.contact} />
        <div className="lg:hidden flex flex-col items-center space-y-8">
          <h2 className="font-medium max-xl:text-2xl text-3xl items-center text-putih">
            Developed By
          </h2>
          <a
            href="https://arachnova.id"
            className="flex flex-row items-center gap-x-3 group"
          >
            <div className="max-xl:w-[45px] w-[60px] h-[41px]">
              <img
                src={LogoArachnoVa}
                alt="ArachnoVa Logo"
                className="w-full h-full object-contain group-hover:opacity-50 transition-all ease-in-out duration-300"
                draggable={false}
              />
            </div>
            <p className="max-xl:text-xl text-2xl text-putih group-hover:text-gray-500 transition-all ease-in-out duration-300">
              ArachnoVa.id
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
