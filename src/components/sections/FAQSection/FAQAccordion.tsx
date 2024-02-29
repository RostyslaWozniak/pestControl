import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { TFaqData, faqData } from "../../../data/faqData";
import { motion } from "framer-motion";

const FAQAccordion = ({ type }: { type: string }) => {
  const [filtratedQuestions, setFiltratedQuestions] = useState<TFaqData>([]);
  useEffect(() => {
    if (type === "all") return setFiltratedQuestions(faqData);
    setFiltratedQuestions(faqData.filter((question) => question.type === type));
  }, [type]);
  return (
    <Accordion type="single" collapsible>
      {filtratedQuestions.map(({ id, question, answer }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <AccordionItem value={`item-${id}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
