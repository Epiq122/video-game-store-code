import Link from "next/link";
import { Gamepad2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Settings" },
  { href: "/press", label: "Press Kit" },
];

const socialLinks = [
  { href: "/", label: "Open PixelVault store", icon: Gamepad2 },
  { href: "/favorites", label: "Open PixelVault favorites", icon: ShieldCheck },
];

export function AppFooter() {
  return (
    <footer className="bg-[#0a1020]">
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-8 pt-12 md:px-8 md:pb-10">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr] lg:gap-6">
          <section className="rounded-xl border border-[--color-border] bg-[--color-surface] p-5 md:p-6">
            <h2 className="font-(family-name:--font-display) text-2xl font-extrabold tracking-tight text-[--color-text-primary]">
              THE VAULT CLUB
            </h2>
            <p className="mt-2 max-w-[44ch] text-sm text-[--color-text-secondary]">
              Get early access to demos, exclusive skins, and member-only discounts on the biggest releases.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <label htmlFor="vault-newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="vault-newsletter-email"
                type="email"
                name="email"
                placeholder="Your email address"
                className="h-10 flex-1 border-[--color-border] bg-[--color-background] px-3 text-sm text-[--color-text-primary] placeholder:text-[--color-text-secondary] focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]"
              />
              <Button
                type="button"
                className="h-10 shrink-0 bg-white/90 px-4 text-sm font-semibold text-[#111827] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]"
              >
                Join Free
              </Button>
            </form>
          </section>

          <section className="rounded-xl border border-[#a3a6ff]/40 bg-[#8f92ff] p-5 text-[#111827] md:p-6">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </div>
            <h2 className="mt-3 font-(family-name:--font-display) text-2xl font-extrabold leading-tight">
              Verified Reviews
            </h2>
            <p className="mt-2 max-w-[30ch] text-sm text-[#2b1640]">
              Genuine feedback from active players in the community.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[--color-border]/70 pt-5 md:mt-10 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-[--color-text-secondary]">
            <p className="font-semibold text-[--color-text-primary]">PixelVault</p>
            <p className="mt-1">© 2026 PixelVault. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-background]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[--color-border] text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-background]"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
