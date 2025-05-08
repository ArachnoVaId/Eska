import { FaqItem } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: FaqItem[];
};

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-putih rounded-xl overflow-hidden"
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger
            className={cn(
              "font-semibold rounded-none max-lg:text-lg max-xl:text-2xl text-[28px] text-putih max-lg:px-2 max-xl:px-3 px-5",
              "border-b border-putih",
              "cursor-pointer",
              index === items.length - 1 && "rounded-none",
            )}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-lg:text-sm max-xl:text-lg text-xl text-putih max-xl:px-3 max-xl:py-4 px-5 py-6 text-justify">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
