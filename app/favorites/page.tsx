import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";

import { FavoriteListItem } from "@/components/favorite-list-item";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { requireAuth } from "@/lib/require-auth";

export const metadata: Metadata = {
  title: "My Favorites",
};

export default async function FavoritesPage() {
  const session = await requireAuth();

  const favorites = await db.favorite.findMany({
    where: { userId: session.user.id },
    include: { product: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_28%),#0a1020] px-4 py-10 md:px-8 md:py-14">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <header className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f8aa3]">
            Your library
          </p>
          <h1 className="font-(family-name:--font-display) text-3xl font-extrabold tracking-tight text-[--color-text-primary] md:text-4xl">
            My Favorites
          </h1>
          <p className="max-w-[62ch] text-sm leading-6 text-[--color-text-secondary] md:text-[15px]">
            Games you have saved to your PixelVault account. Remove a favorite
            anytime, or open a title for full details.
          </p>
        </header>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
            {favorites.map((row) => (
              <FavoriteListItem key={row.id} product={row.product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-[14px] border border-dashed border-[--color-border] bg-[--color-surface] px-6 py-12 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[--color-border] bg-[#1a243a] text-[#d8deff]">
              <Heart className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="font-(family-name:--font-display) text-2xl font-extrabold text-[--color-text-primary]">
              No favorites yet
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-[--color-text-secondary]">
              Browse the store and tap{" "}
              <span className="font-medium text-[--color-text-primary]">
                Add to Favorites
              </span>{" "}
              on any game you want to keep.
            </p>
            <Button
              asChild
              className="mt-5 border border-[--color-filter-active-bg] bg-[--color-filter-active-bg] text-[--color-filter-active-text] hover:bg-[--color-filter-active-bg]/90"
            >
              <Link href="/">Browse games</Link>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
