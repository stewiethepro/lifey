import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "Is there a free plan?",
      answer:
        "Yes, we offer a 14 day free trial.",
    },
    {
      question: "Can I ask you to do anything?",
      answer:
        "We won't help you import narcotics or move a body, but we'll give anything else a shot.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime in your account settings. You'll keep access until your current billing period ends.",
    },
    {
      question: "What happens if I switch to a lower-priced plan?",
      answer:
        "You'll lose access to premium features right away. Your data stays safe, but you might need to reduce usage to fit the new plan limits.",
    },
    {
      question: "Can I change my plan?",
      answer:
        "Yes, you can change plans anytime in your account settings. Changes start at your next billing date.",
    },
  ];
  
  export default function Component() {
    return (
      <section id="faq">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 py-6 mx-auto">
            <h2 className="text-xl font-bold tracking-tight text-black dark:text-white">
              FAQ
            </h2>
            <h4 className="text-[42px] font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter">
              Frequently Asked Questions
            </h4>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }
  