import { RegisterCard } from "@/types/register-card";
import RegistrationImage from "@/assets/ideas/registration-image.webp";
import ProposalImage from "@/assets/ideas/proposal-submission.webp";
import GuidelineImage from "@/assets/ideas/general-guidelines.webp";

export const registerData: RegisterCard[] = [
  {
    title: "LEAN CANVAS REGISTRATION",
    image: RegistrationImage,
    buttonLabel: "Register Now",
    buttonLink: "/registration/ideas/register",
  },
  {
    title: "PROPOSAL SUBMISSION",
    image: ProposalImage,
    buttonLabel: "Submit Now",
    buttonLink: "#",
  },
  {
    title: "GENERAL GUIDELINE IDEAS",
    image: GuidelineImage,
    buttonLabel: "Access Guideline",
    buttonLink: "https://bit.ly/IDEASGeneralGuideline",
    openInNewTab: true,
  },
];
