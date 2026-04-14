"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
};

type AppHeaderNavProps = {
  items: NavItem[];
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppHeaderNav({ items }: AppHeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex items-center gap-1 md:gap-2">
      {items.map((item) => {
        const isActive = pathname ? isActivePath(pathname, item.href) : false;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex h-8 items-center rounded-md px-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]",
              isActive
                ? "text-[--color-text-primary] underline decoration-[1.5px] underline-offset-4"
                : "text-[--color-text-secondary] hover:text-[--color-text-primary]",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
