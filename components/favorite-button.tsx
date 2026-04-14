"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Loader2 } from "lucide-react";

import { addFavoriteAction, removeFavoriteAction } from "@/app/_actions/favorites";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FavoriteButtonProps = {
  gameId: string;
  gameSlug: string;
  initialIsFavorited: boolean;
  isLoggedIn: boolean;
};

export function FavoriteButton({
  gameId,
  gameSlug,
  initialIsFavorited,
  isLoggedIn,
}: FavoriteButtonProps) {
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(initialIsFavorited);
  const [isLoading, setIsLoading] = useState(false);
  const [isRemovingPending, setIsRemovingPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsFavorited(initialIsFavorited);
  }, [initialIsFavorited]);

  useEffect(() => {
    if (!error) return;
    const id = window.setTimeout(() => setError(null), 3000);
    return () => window.clearTimeout(id);
  }, [error]);

  const handleFavoriteToggle = useCallback(async () => {
    if (!isLoggedIn) return;

    setIsLoading(true);
    setError(null);
    const wasFavorited = isFavorited;
    setIsRemovingPending(wasFavorited);
    setIsFavorited(!wasFavorited);

    try {
      if (wasFavorited) {
        await removeFavoriteAction({ productId: gameId, slug: gameSlug });
      } else {
        await addFavoriteAction({ productId: gameId, slug: gameSlug });
      }
      router.refresh();
    } catch {
      setIsFavorited(wasFavorited);
      setError("Failed to update favorites. Try again.");
    } finally {
      setIsRemovingPending(false);
      setIsLoading(false);
    }
  }, [gameId, gameSlug, isFavorited, isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <div className="space-y-1">
        <Link
          href="/auth/sign-in"
          className="text-sm font-medium text-[#9ea3ff] underline-offset-4 transition-colors hover:text-[#b8bbff] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-background]"
        >
          Sign in to save this game
        </Link>
      </div>
    );
  }

  const label = isLoading
    ? isRemovingPending
      ? "Removing..."
      : "Saving..."
    : isFavorited
      ? "Favorited"
      : "Add to Favorites";

  return (
    <div className="space-y-1">
      <Button
        type="button"
        variant={isFavorited && !isLoading ? "secondary" : "outline"}
        size="default"
        disabled={isLoading}
        onClick={handleFavoriteToggle}
        aria-busy={isLoading}
        aria-pressed={isFavorited}
        className={cn(
          "min-w-46 justify-center gap-2 font-medium transition-opacity",
          isFavorited &&
            !isLoading &&
            "border-transparent bg-[#10b981] text-[#111827] hover:bg-[#0d9668] hover:text-[#111827]",
          isLoading && "pointer-events-none opacity-70",
        )}
      >
        {isLoading ? (
          <Loader2 className="size-4 shrink-0 animate-spin" aria-hidden />
        ) : isFavorited ? (
          <Heart className="size-4 shrink-0 fill-current" aria-hidden />
        ) : (
          <Heart className="size-4 shrink-0" aria-hidden />
        )}
        <span className="tabular-nums">{label}</span>
      </Button>
      {error ? (
        <p className="text-sm text-[#fb7185]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
