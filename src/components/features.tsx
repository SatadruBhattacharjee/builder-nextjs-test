import { Container, Section, SectionHeading } from "@/components/ui";

const features = [
  {
    title: "Unified planning",
    description: "Roadmaps, sprints, and docs live together, so context never gets lost between tools.",
    icon: "M4 6h16M4 12h10M4 18h6",
  },
  {
    title: "Smart automations",
    description: "Trigger workflows from any event — assign reviewers, update status, notify Slack.",
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z",
  },
  {
    title: "Real-time insights",
    description: "Live dashboards show cycle time, throughput, and blockers before they become problems.",
    icon: "M3 3v18h18M7 15l4-4 3 3 5-6",
  },
  {
    title: "Enterprise security",
    description: "SSO, SCIM, audit logs, and granular permissions — SOC 2 Type II certified.",
    icon: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z",
  },
  {
    title: "Built-in integrations",
    description: "Connect GitHub, Figma, Slack, and 100+ other tools in a couple of clicks.",
    icon: "M8 12h8M12 8v8M4 4h16v16H4z",
  },
  {
    title: "Lightning fast",
    description: "Every action responds in under 100ms. Keyboard-first, with a command palette for everything.",
    icon: "M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
];

export function Features() {
  return (
    <Section id="features" className="bg-zinc-50 dark:bg-zinc-900/40">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything your team needs, nothing it doesn't"
          description="Replace a patchwork of tools with one focused workspace designed for speed."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-600/15 dark:text-brand-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden>
                  <path d={feature.icon} />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
