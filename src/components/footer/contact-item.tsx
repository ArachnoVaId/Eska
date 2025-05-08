import type { FooterContact } from "@/types";
import { FC } from "react";
import FooterLink from "./footer-link";

type ContactItemProps = FooterContact;

const ContactItem: FC<ContactItemProps> = ({ icon: Icon, label, href }) => {
  return (
    <div className="flex flex-row items-center max-lg:justify-center max-lg:space-x-2 space-x-3">
      <div className="max-lg:w-8 max-lg:h-8 max-xl:w-10 max-xl:h-10 w-12 h-12 rounded-full border border-white flex items-center justify-center">
        <Icon className="text-putih max-xl:text-xl text-2xl" />
      </div>
      <FooterLink label={label} href={href} />
    </div>
  );
};

export default ContactItem;
