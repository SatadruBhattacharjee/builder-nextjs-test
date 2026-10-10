import { ButtonLink, Container } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-16 sm:pt-28">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 -z-10 mx-auto h-[36rem] max-w-5xl rounded-full bg-gradient-to-tr from-brand-400/30 via-fuchsia-400/20 to-sky-400/30 blur-3xl"
      />
      <Container className="text-center">
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400"
        >
          <span className="rounded-full bg-brand-600 px-2 py-0.5 text-xs font-semibold text-white">New</span>
          Automations 2.0 is live →
        </a>
        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-brand-400 sm:text-6xl">
          Ship faster with{" "}
          <span className="bg-gradient-to-r from-brand-600 to-fuchsia-500 bg-clip-text text-transparent">
            less overhead
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-zinc-600 dark:text-zinc-400">
          Nimbus gives product teams one place to plan, build, and launch — with automation that
          removes the busywork so you can focus on what matters.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#pricing">Start free trial</ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary">
            See how it works
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-zinc-500">No credit card required · 14-day free trial</p>

        <HeroMockup />
      </Container>
    </section>
  );
}

function HeroMockup() {
  const columns = [
    { title: "Backlog", items: ["Onboarding revamp", "Billing alerts", "API rate limits"] },
    { title: "In progress", items: ["Dark mode", "Team invites"] },
    { title: "Shipped", items: ["SSO login", "Audit log", "CSV export"] },
  ];

  return (
    <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-zinc-200 bg-white/80 p-2 shadow-2xl shadow-brand-600/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="size-3 rounded-full bg-red-400" />
        <span className="size-3 rounded-full bg-amber-400" />
        <span className="size-3 rounded-full bg-emerald-400" />
      </div>
      <div className="grid gap-3 rounded-xl bg-zinc-50 p-4 text-left sm:grid-cols-3 dark:bg-zinc-950">
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-3 text-xs font-semibold tracking-wide text-zinc-500 uppercase">{col.title}</p>
            <div className="space-y-2">
              {col.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-white p-3 text-sm shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
                >
                  {item}
                  <div className="mt-2 h-1.5 w-2/3 rounded-full bg-zinc-100 dark:bg-zinc-800" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
