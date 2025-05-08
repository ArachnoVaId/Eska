import { FooterData } from "@/types";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const footerData: FooterData = {
  column: [
    {
      title: "Our Events",
      links: [
        { label: "GMBCC", href: "/gmbcc" },
        { label: "IDEAS", href: "/ideas" },
        { label: "EXPOSURE", href: "/exposure" },
      ],
    },
    {
      title: "Registration",
      links: [
        { label: "GMBCC", href: "/registration/gmbcc" },
        { label: "IDEAS", href: "/registration/ideas" },
      ],
    },
  ],
  contact: [
    {
      icon: HiOutlineMail,
      label: "the19thmanagementsevents@gmail.com",
      href: "mailto:the19thmanagementsevents@gmail.com",
    },
    {
      icon: FaInstagram,
      label: "@me_ugm",
      href: "https://www.instagram.com/me_ugm/",
    },
    {
      icon: FaLinkedin,
      label: "The Management’s Events FEB UGM",
      href: "https://www.linkedin.com/company/the-management-s-events/",
    },
  ],
};
