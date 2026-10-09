import { Container, Section, SectionHeading } from "@/components/ui";

const testimonials = [
  {
    quote:
      "We cut our weekly status meetings in half. Nimbus surfaces everything we used to spend an hour discussing.",
    name: "Priya Raman",
    role: "VP Engineering, Globex",
  },
  {
    quote:
      "The automations alone saved each of our PMs about five hours a week. It paid for itself in the first month.",
    name: "Marcus Lee",
    role: "Head of Product, Initech",
  },
  {
    quote:
      "Finally a tool that's fast enough that engineers actually want to use it. Adoption was instant.",
    name: "Sofia Alvarez",
    role: "CTO, Hooli",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading eyebrow="Customers" title="Loved by teams who ship" />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex gap-0.5 text-amber-400" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden>
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-zinc-700 dark:text-zinc-300">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700 dark:bg-brand-600/20 dark:text-brand-400">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-zinc-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
