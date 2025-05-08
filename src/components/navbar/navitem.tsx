import { useLocation } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/types";

const navItemStyle = `
  relative inline-flex
  text-putih max-xl:text-xl text-2xl font-medium
  h-full
  bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent
  hover:text-putih focus:text-putih active:text-putih
  transition-all ease-in-out duration-300
  after:content-[''] after:absolute after:bottom-0 after:left-0
  after:h-[2px] after:w-0 after:bg-white
  hover:after:w-full data-[state=open]:after:w-full
  after:transition-all after:duration-300
`;

const activeStyle = `
  font-semibold text-putih
  border-white
  after:w-full
`;

function hasSubmenu(
  item: MenuItem,
): item is { label: string; submenu: { href: string; label: string }[] } {
  return "submenu" in item && Array.isArray(item.submenu);
}

export default function NavItem({ item }: { item: MenuItem }) {
  const { pathname } = useLocation();
  const isSubmenu = hasSubmenu(item);
  const isSubmenuActive =
    isSubmenu && item.submenu.some((s) => pathname.startsWith(s.href));

  return (
    <NavigationMenuItem className="relative">
      {isSubmenu ? (
        <>
          <NavigationMenuTrigger
            className={cn(
              navItemStyle,
              isSubmenuActive && activeStyle,
              "data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent",
              "hover:text-putih focus:text-putih data-[state=open]:text-putih aria-expanded:text-putih active:text-putih",
            )}
          >
            {item.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="bg-putih"
            style={{ boxShadow: "0px 0px 12px 0px rgba(255, 255, 255, 0.40)" }}
          >
            <ul className="p-4 w-72 bg-putih">
              {item.submenu.map((sub) => (
                <li
                  key={sub.href}
                  className="space-y-1 flex flex-col items-center"
                >
                  <NavigationMenuLink asChild>
                    <a href={sub.href} className="group">
                      <p
                        className={cn(
                          "relative max-xl:text-xl text-2xl text-backgroundColor group-hover:font-semibold after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-backgroundColor after:transition-all after:duration-300 group-hover:after:w-full",
                          pathname === sub.href && "font-semibold after:w-full",
                          "w-fit",
                        )}
                      >
                        {sub.label}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <NavigationMenuLink
          className={cn(navItemStyle, pathname === item.href && activeStyle)}
          asChild
        >
          <a href={item.href}>{item.label}</a>
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  );
}
