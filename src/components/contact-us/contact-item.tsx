import type { FooterContact } from "@/types";
import { FC } from "react";
import ContactLink from "./contact-link";

type ContactItemProps = FooterContact;

const ContactItem: FC<ContactItemProps> = ({ icon: Icon, label, href }) => {
  return (
    <div className="flex flex-row items-center max-lg:justify-center max-lg:space-x-2 space-x-10">
      <div className="max-lg:w-8 max-lg:h-8 max-xl:w-12 max-xl:h-12 w-16 h-16 rounded-full border border-white flex items-center justify-center">
        <Icon className="text-putih max-lg:text-xl max-xl:text-3xl text-4xl" />
      </div>
      <ContactLink label={label} href={href} />
    </div>
  );
};

export default ContactItem;
