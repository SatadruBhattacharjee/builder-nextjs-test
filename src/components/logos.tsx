import { Container } from "@/components/ui";

const companies = ["Acme", "Globex", "Umbrella", "Initech", "Hooli", "Stark"];

export function Logos() {
  return (
    <section className="py-12">
      <Container>
        <p className="text-center text-sm font-medium text-zinc-500">
          Trusted by 4,000+ fast-moving teams
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-center text-xl font-semibold tracking-tight text-zinc-400 dark:text-zinc-600"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
