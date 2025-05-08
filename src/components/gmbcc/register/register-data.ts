import { RegisterCard } from "@/types/register-card";
import Image1 from "@/assets/gmbcc/image-1.webp";
import Image3 from "@/assets/gmbcc/image-3.webp";
import Image4 from "@/assets/gmbcc/guidebook-image.jpg";
import Image5 from "@/assets/gmbcc/image-4.webp";

export const registerData: RegisterCard[] = [
  {
    title: "GLOBAL COACHING SESSION",
    image: Image1,
    buttonLabel: "Register Now",
    buttonLink: "#",
  },
  {
    title: "COMPETITION REGISTRATION",
    image: Image3,
    buttonLabel: "Register as a Individual",
    buttonLink: "/registration/gmbcc/individual",
    secondButtonLabel: "Register as a Team",
    secondButtonLink: "/registration/gmbcc/team",
  },
  {
    title: "COMPETITION GUIDEBOOK",
    image: Image4,
    buttonLabel: "Access Guidebook",
    buttonLink: "https://bit.ly/GuidebookGMBCC2025",
    openInNewTab: true,
  },
  {
    title: "BOOTCAMP REGISTRATION",
    image: Image5,
    buttonLabel: "Register Now",
    buttonLink: "#",
  },
];
