import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FavoriteButton } from "@/components/favorite-button";
import { GenreBadge } from "@/components/genre-badge";
import { PlatformBadge } from "@/components/platform-badge";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { getSession } from "@/lib/require-auth";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await db.product.findUnique({
    where: { slug },
    select: { title: true },
  });
  if (!product) {
    return { title: "Game" };
  }
  return { title: product.title };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;

  const product = await db.product.findUnique({
    where: { slug },
  });

  if (!product) {
    notFound();
  }

  const session = await getSession();

  let initialIsFavorited = false;
  if (session) {
    const favorite = await db.favorite.findUnique({
      where: {
        userId_productId: {
          userId: session.user.id,
          productId: product.id,
        },
      },
    });
    initialIsFavorited = Boolean(favorite);
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_28%),#0a1020] px-4 py-10 md:px-8 md:py-14">
      <article className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
        <Link
          href="/"
          className="text-sm font-medium text-[--color-text-secondary] transition-colors hover:text-[--color-text-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1020] lg:col-span-2"
        >
          ← Back to store
        </Link>

        <div className="overflow-hidden rounded-lg border border-[--color-border] bg-[--color-surface]">
          <div className="relative aspect-3/4">
            <Image
              src={product.imageUrl}
              alt={`${product.title} cover art`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <GenreBadge genre={product.genre} />
            <PlatformBadge platform={product.platform} />
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f8aa3]">
              {product.publisher} · {product.releaseYear}
            </p>
            <h1 className="font-(family-name:--font-display) text-3xl font-extrabold tracking-tight text-[--color-text-primary] md:text-4xl">
              {product.title}
            </h1>
            <p className="font-(family-name:--font-display) text-2xl font-bold text-[#8f92ff]">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              type="button"
              disabled
              className="h-9 shrink-0 bg-[#8f92ff] px-4 text-sm font-semibold text-[#111827] opacity-60"
            >
              Buy — coming soon
            </Button>
            <FavoriteButton
              gameId={product.id}
              gameSlug={product.slug}
              initialIsFavorited={initialIsFavorited}
              isLoggedIn={Boolean(session)}
            />
          </div>

          <p className="max-w-prose text-sm leading-6 text-[--color-text-secondary] md:text-[15px]">
            {product.description}
          </p>
        </div>
      </article>
    </main>
  );
}
