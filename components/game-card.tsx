import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { GenreBadge } from "@/components/genre-badge";
import { PlatformBadge } from "@/components/platform-badge";

type GameCardProps = {
  game: Product;
};

function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group block cursor-pointer overflow-hidden rounded-lg border border-[--color-border] bg-[--color-surface] transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:shadow-[0_18px_40px_rgba(2,6,23,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-background]"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={game.imageUrl}
          alt={`${game.title} cover art`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08101f]/64 via-[#08101f]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-white/12 bg-[#10192c]/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#d8deff] backdrop-blur-sm">
            View Game
          </span>
        </div>
      </div>

      <div className="space-y-3 p-3">
        <div className="flex flex-wrap gap-2">
          <GenreBadge genre={game.genre} />
          <PlatformBadge platform={game.platform} />
        </div>

        <div className="space-y-2">
          <h2 className="line-clamp-2 min-h-[2.9rem] font-(family-name:--font-display) text-base font-bold leading-[1.2] text-[--color-text-primary]">
            {game.title}
          </h2>
          <p className="font-(family-name:--font-display) text-base font-bold tracking-tight text-[#8f92ff]">
            {formatPrice(game.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
