import { Container, Section, SectionHeading } from "@/components/ui";

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes — every paid plan comes with a 14-day free trial. No credit card required.",
  },
  {
    question: "Can I import data from other tools?",
    answer: "Nimbus has one-click importers for Jira, Linear, Asana, Trello, and GitHub Issues.",
  },
  {
    question: "How does billing work?",
    answer: "You're billed per active member, monthly or annually. Annual plans save 20%.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We're SOC 2 Type II certified, encrypt data at rest and in transit, and offer SSO and audit logs on Enterprise.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. Cancel from your billing settings and you won't be charged again.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="size-5 flex-none text-zinc-400 transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
