import { Container, Section, SectionHeading } from "@/components/ui";

const steps = [
  {
    title: "Connect your tools",
    description: "Import projects from Jira, Linear, or GitHub in minutes. Nothing gets left behind.",
  },
  {
    title: "Set up automations",
    description: "Pick from templates or build your own rules to eliminate repetitive work.",
  },
  {
    title: "Ship with confidence",
    description: "Track progress in real time and keep every stakeholder aligned automatically.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in three steps"
          description="Most teams are fully onboarded in less than an afternoon."
        />
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute top-6 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent md:block dark:via-zinc-700"
          />
          <ol className="grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="relative text-center">
                <span className="relative mx-auto grid size-12 place-items-center rounded-full bg-brand-600 text-lg font-semibold text-white ring-8 ring-white dark:ring-zinc-950">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
