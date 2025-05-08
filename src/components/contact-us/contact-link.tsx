import type { FooterLink } from "@/types";
import { FC } from "react";

type ContactLinkProps = FooterLink;

const ContactLink: FC<ContactLinkProps> = ({ label, href }) => {
  return (
    <li>
      <a
        href={href}
        className="relative font-bold max-sm:text-base max-lg:text-2xl max-xl:text-3xl text-4xl text-putih after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-putih after:transition-all after:duration-300 hover:after:w-full"
      >
        {label}
      </a>
    </li>
  );
};

export default ContactLink;
