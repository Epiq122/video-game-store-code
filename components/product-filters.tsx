"use client";

import { useState } from "react";
import type { Product } from "@prisma/client";
import { Gamepad2, Search, X } from "lucide-react";

import { GameCard } from "@/components/game-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ProductFiltersProps = {
  games: Product[];
};

export function ProductFilters({ games }: ProductFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const availableGenres = [
    "All",
    ...Array.from(new Set(games.map((game) => game.genre))).sort(),
  ];
  const availablePlatforms = [
    "All",
    ...Array.from(new Set(games.map((game) => game.platform))).sort(),
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(normalizedQuery);
    const matchesGenre =
      selectedGenre === "All" || game.genre === selectedGenre;
    const matchesPlatform =
      selectedPlatform === "All" || game.platform === selectedPlatform;

    return matchesSearch && matchesGenre && matchesPlatform;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGenre("All");
    setSelectedPlatform("All");
  };

  return (
    <section className="space-y-6">
      <div className="rounded-[14px] border border-[--color-border] bg-[--color-surface] p-4 shadow-[0_20px_40px_rgba(2,6,23,0.18)] md:p-5">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[--color-text-secondary]"
            />
            <Input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search games..."
              aria-label="Search games"
              className="h-10 border-[--color-border] bg-[--color-search-surface] pr-11 pl-9 text-[--color-text-primary] placeholder:text-[--color-text-secondary] focus-visible:border-[--color-filter-active-bg] focus-visible:ring-[--color-filter-active-bg]/30 dark:bg-[--color-search-surface]"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute top-1/2 right-3 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[--color-text-secondary] transition-colors hover:bg-white/6 hover:text-[--color-text-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-filter-active-bg]"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {availableGenres.map((genre) => (
                <Button
                  key={genre}
                  type="button"
                  variant="filter"
                  size="filter"
                  data-state={selectedGenre === genre ? "active" : "inactive"}
                  aria-pressed={selectedGenre === genre}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {availablePlatforms.map((platform) => (
                <Button
                  key={platform}
                  type="button"
                  variant="filter"
                  size="filter"
                  data-state={selectedPlatform === platform ? "active" : "inactive"}
                  aria-pressed={selectedPlatform === platform}
                  onClick={() => setSelectedPlatform(platform)}
                >
                  {platform}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredGames.length > 0 ? (
        <p className="text-sm text-[--color-text-secondary]">
          {filteredGames.length}{" "}
          {filteredGames.length === 1 ? "game found" : "games found"}
        </p>
      ) : null}

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center rounded-[14px] border border-dashed border-[--color-border] bg-[--color-surface] px-6 py-12 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[--color-border] bg-[#1a243a] text-[#d8deff]">
            <Gamepad2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="font-(family-name:--font-display) text-2xl font-extrabold text-[--color-text-primary]">
            No games found
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-[--color-text-secondary]">
            Try a different search or clear your filters.
          </p>
          <Button
            type="button"
            onClick={clearFilters}
            className="mt-5 border border-[--color-filter-active-bg] bg-[--color-filter-active-bg] text-[--color-filter-active-text] hover:bg-[--color-filter-active-bg]/90"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </section>
  );
}
