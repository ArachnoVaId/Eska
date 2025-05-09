import Logo from "@/assets/logoeskahitam.png";
import { Link } from "react-router-dom";

import NavMenu from "./navmenu";
import { useLastScrollDirection } from "@/hooks/use-last-scroll-direction";
import { cn } from "@/lib/utils";
import MobileMenu from "./mobile-navmenu";

const Navbar = () => {
  const [scrollDirection] = useLastScrollDirection();

  return (
    <nav
      className={cn(
        scrollDirection !== "down" ? "" : "max-lg:-translate-y-[500%] -translate-y-[200%]",
        "fixed w-full bg-transparent z-[999999]",
        "transition-transform duration-300 ease-in-out",
      )}
    >
      <div className="relative z-50 flex flex-row justify-between items-center max-sm:px-12 max-lg:px-20 max-xl:px-28 px-40 py-5">
        <Link to="/registration/Presale" className="max-lg:w-[150px] max-xl:w-[200px] w-[260px] h-[80px]">
          <img
            src={Logo}
            alt="The 19th Managements FEB UGM Logo"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </Link>
        <div className="hidden lg:block">
          <NavMenu />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
