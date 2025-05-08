import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function MobileMenuItem({ item }: { item: MenuItem }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname.startsWith(href);

  const isSubmenu = hasSubmenu(item);
  return (
    <div className="w-full text-center">
      {isSubmenu ? (
        <div>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "flex items-center justify-center w-full py-3 text-lg space-x-2",
              isActive(item.submenu[0].href) &&
              "font-bold border-backgroundColor",
            )}
          >
            {item.label}
            <HiChevronDown
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4 space-y-2 overflow-hidden"
              >
                {item.submenu.map((sub) => (
                  <a
                    href={sub.href}
                    key={sub.href}
                    className={cn(
                      "block text-base text-backgroundColor transition-all",
                      pathname === sub.href &&
                      "font-bold border-backgroundColor after:w-full",
                    )}
                  >
                    {sub.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <a
          href={item.href}
          className={cn(
            "block w-full py-3 text-lg text-backgroundColor",
            pathname === item.href &&
            "font-bold border-backgroundColor after:w-full",
          )}
        >
          {item.label}
        </a>
      )}
    </div>
  );
}

function hasSubmenu(
  item: MenuItem,
): item is { label: string; submenu: { href: string; label: string }[] } {
  return "submenu" in item && Array.isArray(item.submenu);
}
