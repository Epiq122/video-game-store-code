import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { getSession } from "@/lib/require-auth";

import { AppHeaderNav } from "@/components/app-header-nav";
import { Button } from "@/components/ui/button";

async function signOutAction() {
  "use server";

  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/");
}

export async function AppHeader() {
  const session = await getSession();
  const userLabel = session?.user.name ?? session?.user.email ?? "Account";

  const navItems = session
    ? [
        { href: "/", label: "Store" },
        { href: "/favorites", label: "My Favorites" },
        ...(session.user.role === "ADMIN"
          ? [{ href: "/admin", label: "Admin Panel" }]
          : []),
      ]
    : [{ href: "/", label: "Store" }];

  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[--color-surface]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex min-w-0 items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-md font-(family-name:--font-display) text-[18px] font-extrabold tracking-tight text-[--color-text-primary] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]"
          >
            PixelVault
          </Link>
          <AppHeaderNav items={navItems} />
        </div>

        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          {session ? (
            <>
              <p className="hidden max-w-40 truncate text-xs font-medium text-[--color-text-secondary] sm:block">
                {userLabel}
              </p>
              <form action={signOutAction}>
                <Button
                  type="submit"
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs font-medium text-[--color-text-secondary] transition-colors hover:border-white/20 hover:text-[--color-text-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]"
                >
                  Sign Out
                </Button>
              </form>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="h-8 px-2 text-xs font-medium text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]">
                <Link href="/auth/sign-in">
                  Sign In
                </Link>
              </Button>
              <Button asChild size="sm" className="h-8 bg-[#8f92ff] px-3 text-xs font-semibold text-[#111827] transition-colors hover:bg-[#a3a6ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]">
                <Link href="/auth/sign-up">
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
