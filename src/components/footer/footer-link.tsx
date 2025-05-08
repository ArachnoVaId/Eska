import type { FooterLink } from "@/types";
import { FC } from "react";

type FooterLinkProps = FooterLink;

const FooterLink: FC<FooterLinkProps> = ({ label, href }) => {
  return (
    <li>
      <a
        href={href}
        className="relative max-sm:text-lg max-xl:text-xl text-2xl text-putih after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-putih after:transition-all after:duration-300 hover:after:w-full"
      >
        {label}
      </a>
    </li>
  );
};

export default FooterLink;
