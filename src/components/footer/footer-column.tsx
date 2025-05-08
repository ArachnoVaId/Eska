import { FC } from "react";
import type { FooterColumn } from "@/types";
import FooterLink from "./footer-link";

type FooterColumnProps = FooterColumn;

const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="space-y-7 max-lg:text-center">
      <h4 className="max-lg:text-3xl max-xl:text-2xl text-3xl font-medium text-putih">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
