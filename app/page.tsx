import type { Product } from "@prisma/client";

import { GameCard } from "@/components/game-card";

const sampleGames: Product[] = [
  {
    id: "sample-starfield",
    slug: "starfield",
    title: "Starfield",
    description: "Explore settled systems, uncover ancient artifacts, and chart your own path through a fractured galaxy.",
    price: 6999,
    genre: "RPG",
    platform: "PC",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2023,
    publisher: "Bethesda",
    isFeatured: true,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
  {
    id: "sample-baldurs-gate-3",
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    description: "Build a party, shape impossible choices, and push through a reactive fantasy campaign full of consequence.",
    price: 5999,
    genre: "RPG",
    platform: "PS5",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2023,
    publisher: "Larian Studios",
    isFeatured: false,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
  {
    id: "sample-diablo-iv",
    slug: "diablo-iv",
    title: "Diablo IV",
    description: "Return to Sanctuary for a bleak action RPG built around relentless combat, builds, and seasonal progression.",
    price: 6999,
    genre: "Action",
    platform: "Xbox Series X",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2023,
    publisher: "Blizzard",
    isFeatured: false,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
  {
    id: "sample-final-fantasy-xvi",
    slug: "final-fantasy-xvi",
    title: "Final Fantasy XVI",
    description: "A dark high-fantasy tale of dominants, kingdoms, and large-scale cinematic combat.",
    price: 6999,
    genre: "Action",
    platform: "PS5",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2023,
    publisher: "Square Enix",
    isFeatured: false,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
  {
    id: "sample-resident-evil-4",
    slug: "resident-evil-4",
    title: "Resident Evil 4",
    description: "A survival horror remake that sharpens the pacing, dread, and combat pressure of the original.",
    price: 5999,
    genre: "Horror",
    platform: "PC",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2023,
    publisher: "Capcom",
    isFeatured: false,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
  {
    id: "sample-street-fighter-6",
    slug: "street-fighter-6",
    title: "Street Fighter 6",
    description: "A bold competitive fighter with expressive visual effects, creative systems, and accessible onboarding.",
    price: 5999,
    genre: "Sports",
    platform: "PC",
    imageUrl:
      "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2023,
    publisher: "Capcom",
    isFeatured: false,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
  {
    id: "sample-legend-of-zelda",
    slug: "the-legend-of-zelda",
    title: "The Legend of Zelda: Echoes of the Sky",
    description: "Glide through layered islands, solve traversal puzzles, and uncover secrets in a bright open world.",
    price: 6899,
    genre: "Adventure",
    platform: "Switch 2",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2026,
    publisher: "Nintendo",
    isFeatured: false,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
  {
    id: "sample-spider-man-2",
    slug: "spider-man-2",
    title: "Spider-Man 2",
    description: "Swing across a larger city and swap between heroes in a fast cinematic superhero campaign.",
    price: 6999,
    genre: "Action",
    platform: "PS5",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    releaseYear: 2023,
    publisher: "Insomniac Games",
    isFeatured: false,
    createdAt: new Date("2026-04-13T00:00:00.000Z"),
    updatedAt: new Date("2026-04-13T00:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_28%),#0a1020] px-4 py-12 md:px-8 md:py-16">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f8aa3]">
            New Discoveries
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-2">
              <h1 className="font-(family-name:--font-display) text-4xl font-extrabold tracking-tight text-[--color-text-primary] md:text-5xl">
                Storefront game cards aligned with the PixelVault design system
              </h1>
              <p className="max-w-[62ch] text-sm leading-6 text-[--color-text-secondary] md:text-[15px]">
                Poster-first cards, compact metadata, restrained hover feedback,
                and indigo pricing give the catalog the same premium, low-noise
                hierarchy shown in the homepage reference.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sampleGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}
