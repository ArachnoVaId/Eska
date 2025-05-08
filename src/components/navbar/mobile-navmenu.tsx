import { useEffect, useState } from "react";
import { menuItems } from "./navbar-data";
import MobileMenuItem from "./mobile-navitem";
// import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // auto-close on route change
  }, [location.pathname]);

  return (
    <div className="lg:hidden">
      {/* Toggle button */}
      {/* <Hamburger
        toggled={open}
        toggle={setOpen}
        size={24}
        duration={0.5}
        easing="ease-in-out"
        color="#FAFAFA"
      /> */}

      {/* Menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white z-50 rounded-b-xl px-6 py-4 space-y-2 shadow-md"
          >
            {menuItems.map((item, index) => (
              <MobileMenuItem key={index} item={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
