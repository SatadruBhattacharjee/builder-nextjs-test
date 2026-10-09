import { Logo } from "@/components/navbar";
import { Container } from "@/components/ui";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
  { title: "Resources", links: ["Docs", "Guides", "Community", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              The workspace for teams who plan, build, and launch together.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800">
          © 2026 Nimbus, Inc. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
