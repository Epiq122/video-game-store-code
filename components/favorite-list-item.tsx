import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { FavoriteButton } from "@/components/favorite-button";
import { GenreBadge } from "@/components/genre-badge";
import { PlatformBadge } from "@/components/platform-badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type FavoriteListItemProps = {
  product: Product;
};

function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export function FavoriteListItem({ product }: FavoriteListItemProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border border-[--color-border] bg-[--color-surface] p-0 gap-0 rounded-lg">
      <Link
        href={`/games/${product.slug}`}
        className="group block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-background]"
      >
        <div className="relative aspect-3/4 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={`${product.title} cover art`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:contrast-110"
          />
        </div>
      </Link>

      <CardContent className="flex flex-1 flex-col gap-3 p-3">
        <div className="flex flex-wrap gap-2">
          <GenreBadge genre={product.genre} />
          <PlatformBadge platform={product.platform} />
        </div>

        <Link
          href={`/games/${product.slug}`}
          className="min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-surface]"
        >
          <CardTitle className="line-clamp-2 font-(family-name:--font-display) text-base font-bold leading-[1.2] text-[--color-text-primary]">
            {product.title}
          </CardTitle>
        </Link>

        <p className="font-(family-name:--font-display) text-base font-bold tracking-tight text-[#8f92ff]">
          {formatPrice(product.price)}
        </p>

        <div className="mt-auto border-t border-[--color-border] pt-3">
          <FavoriteButton
            gameId={product.id}
            gameSlug={product.slug}
            initialIsFavorited
            isLoggedIn
          />
        </div>
      </CardContent>
    </Card>
  );
}
