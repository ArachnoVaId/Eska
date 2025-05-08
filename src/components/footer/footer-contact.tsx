import type { FooterContact } from "@/types";
import { FC } from "react";
import ContactItem from "./contact-item";

type FooterContactProps = {
  title: string;
  contacts: FooterContact[];
};

const FooterContact: FC<FooterContactProps> = ({
  title = "Contact Us",
  contacts,
}) => {
  return (
    <div className="space-y-7 max-lg:text-center">
      <h4 className="max-lg:text-3xl max-xl:text-2xl text-3xl font-medium text-putih">{title}</h4>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <ContactItem key={contact.href} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default FooterContact;
