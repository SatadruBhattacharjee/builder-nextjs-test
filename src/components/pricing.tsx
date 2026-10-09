import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals and small side projects.",
    features: ["Up to 3 members", "2 active projects", "Basic automations", "Community support"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    description: "For growing teams that need to move fast.",
    features: [
      "Unlimited members",
      "Unlimited projects",
      "Advanced automations",
      "Insights dashboards",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced security needs.",
    features: ["Everything in Pro", "SSO & SCIM", "Audit logs", "Dedicated success manager"],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-zinc-50 dark:bg-zinc-900/40">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start free. Upgrade when your team is ready."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.featured
                  ? "bg-zinc-900 text-white shadow-2xl ring-2 ring-brand-500 lg:py-12 dark:bg-zinc-800"
                  : "border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                {tier.featured && (
                  <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${tier.featured ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-400"}`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                {tier.price.startsWith("$") && (
                  <span className={tier.featured ? "text-zinc-400" : "text-zinc-500"}>/user/mo</span>
                )}
              </p>
              <ButtonLink
                href="#"
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </ButtonLink>
              <ul className="mt-8 space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5 flex-none text-brand-500" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
