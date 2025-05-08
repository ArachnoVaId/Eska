import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { menuItems } from "./navbar-data";
import NavItem from "./navitem";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="max-xl:space-x-7 space-x-10">
        {menuItems.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
