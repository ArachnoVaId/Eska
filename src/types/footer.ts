import { IconType } from "react-icons";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContact = {
  icon: IconType;
  label: string;
  href: string;
};

export type FooterData = {
  column: FooterColumn[];
  contact: FooterContact[];
};
