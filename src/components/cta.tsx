import { ButtonLink, Container } from "@/components/ui";

export function Cta() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-fuchsia-600 px-6 py-16 text-center text-white sm:px-16">
          <div aria-hidden className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-white/10 blur-2xl" />
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ready to ship faster?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join thousands of teams already building with Nimbus. Get started in minutes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#pricing" variant="secondary">
              Start free trial
            </ButtonLink>
            <ButtonLink href="#" className="bg-white/10 ring-1 ring-white/30 hover:bg-white/20">
              Talk to sales
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
