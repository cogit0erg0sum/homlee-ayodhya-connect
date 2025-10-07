import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What are the check-in and check-out timings?",
    answer: "Standard check-in is at 12:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available on request, subject to room availability.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we provide complimentary parking for our guests on a first-come, first-served basis.",
  },
  {
    question: "Can I request early check-in?",
    answer: "Yes! Early check-in is possible subject to room availability. Please message us on WhatsApp with your arrival time, and we'll do our best to accommodate you.",
  },
  {
    question: "Do you allow families with children?",
    answer: "Absolutely! We are a family-friendly property. Children are welcome, and we can arrange extra beds in our Family Room.",
  },
  {
    question: "How do I book a room?",
    answer: "Simply message us on WhatsApp at +91 8004174182. We'll confirm your booking instantly and share all the details you need.",
  },
  {
    question: "What ID documents are required at check-in?",
    answer: "A valid government-issued photo ID (Aadhaar, PAN, Driver's License, or Passport) is mandatory for all guests at check-in.",
  },
  {
    question: "Do you provide local sightseeing assistance?",
    answer: "Yes! We offer free guidance on local temples, darshan timings, and can help arrange transport for your convenience.",
  },
  {
    question: "Is food available at the property?",
    answer: "We don't have an in-house restaurant, but we can recommend excellent nearby eateries serving local Ayodhya cuisine. Some restaurants also offer delivery.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about your stay
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card px-6 rounded-lg shadow-soft"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
