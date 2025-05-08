export type NavSubItem = {
  href: string;
  label: string;
};

export type MenuItem =
  | {
      label: string;
      href: string;
      submenu?: undefined;
    }
  | {
      label: string;
      submenu: NavSubItem[];
      href?: undefined;
    };
