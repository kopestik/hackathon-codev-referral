import { Accordion, AccordionItem, Card, CardBody, CardHeader } from "@nextui-org/react";
import { FAQS } from "./faqs";

export const Faq = () => {
  return (
    <Card shadow="sm">
      <CardHeader className="pt-5 px-5 pb-0">
        <span className="text-2xl font-bold">FAQs</span>
      </CardHeader>
      <CardBody>
        <Accordion itemClasses={{ content: "text-gray-700", title: "text-md"}} selectionMode="multiple">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index + 1}
              aria-label="Accordion 1"
              title={faq.title}
            >
              {faq.content}
            </AccordionItem>
          ))}
        </Accordion>
      </CardBody>
    </Card>
  );
};
