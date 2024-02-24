export const faqData = [
  {
    id: 1,
    question: "What types of pests do you specialize in treating?",
    answer:
      "We specialize in treating a wide range of pests, including but not limited to ants, cockroaches, rodents, termites, spiders, bed bugs, and mosquitoes.",
    type: "specific",
  },
  {
    id: 2,
    question: "Are your pest control treatments safe for children and pets?",
    answer:
      "Yes, we prioritize the safety of your family and pets. Our treatments are carefully selected and applied with consideration for their safety. We also offer eco-friendly options for those seeking sustainable solutions.",
    type: "specific",
  },
  {
    id: 3,
    question: "How often should I schedule pest control services?",
    answer:
      "The frequency of pest control services depends on several factors, including the type of pest, the severity of the infestation, and your property's location. Our experts will recommend a customized treatment plan tailored to your specific needs.",
    type: "specific",
  },
  {
    id: 4,
    question: "Do you offer termite inspections and treatments?",
    answer:
      "Yes, we provide comprehensive termite inspections to identify and treat termite infestations. Our technicians are trained to detect early signs of termite activity and implement effective treatment strategies to eradicate them.",
    type: "specific",
  },
  {
    id: 5,
    question: "How do you handle bed bug infestations?",
    answer:
      "Our bed bug treatments involve a multi-step process, including thorough inspections, targeted insecticide applications, and follow-up visits to ensure complete eradication. We also provide guidance on preventive measures to avoid future infestations.",
    type: "specific",
  },
  {
    id: 6,
    question: "What factors determine the cost of pest control services?",
    answer:
      "The cost of our services depends on various factors, including the type of pest, the size of your property, the extent of the infestation, and the treatment method used. We offer transparent pricing and will provide a detailed quote before starting any work.",
    type: "pricing",
  },
  {
    id: 7,
    question: "Do you offer warranties or guarantees on your services?",
    answer:
      "Yes, we stand behind the quality of our work. Depending on the type of service provided, we may offer warranties or guarantees to ensure your satisfaction. Our team will explain the terms and conditions of any warranties or guarantees offered.",
    type: "pricing",
  },
  {
    id: 8,
    question: "How can I schedule a service appointment with your company?",
    answer:
      "Scheduling a service appointment is easy. Simply contact us via phone, email, or our website's contact form, and our friendly customer service team will assist you in booking a convenient appointment time.",
    type: "pricing",
  },
];

export type TFaqData = {
  id: number;
  question: string;
  answer: string;
  type: string;
}[];
