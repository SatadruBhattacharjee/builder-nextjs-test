import { Container } from "@/components/ui";

const stats = [
  { value: "4,000+", label: "Teams onboarded" },
  { value: "38%", label: "Faster cycle time" },
  { value: "12M", label: "Automations run monthly" },
  { value: "99.99%", label: "Uptime SLA" },
];

export function Stats() {
  return (
    <section className="bg-brand-600 py-16 text-white">
      <Container>
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="text-sm text-brand-100">{stat.label}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
