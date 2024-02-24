import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TFaqData, faqData } from "../data/faqData";

const FAQAccordion = ({ type }: { type: string }) => {
  const [filtratedQuestions, setFiltratedQuestions] = useState<TFaqData>([]);
  useEffect(() => {
    if (type === "all") return setFiltratedQuestions(faqData);
    setFiltratedQuestions(faqData.filter((question) => question.type === type));
  }, [type]);
  return (
    <Accordion type="single" collapsible>
      {filtratedQuestions.map(({ id, question, answer }) => (
        <AccordionItem value={`item-${id}`} key={id}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
