import { Badge } from "@/components/ui/badge";

const genreColours: Record<string, string> = {
  Action: "var(--color-genre-action)",
  RPG: "var(--color-genre-rpg)",
  Sports: "var(--color-genre-sports)",
  Strategy: "var(--color-genre-strategy)",
  Horror: "var(--color-genre-horror)",
  Adventure: "var(--color-genre-adventure)",
};

type GenreBadgeProps = {
  genre: string;
};

export function GenreBadge({ genre }: GenreBadgeProps) {
  const backgroundColor = genreColours[genre] ?? "var(--color-surface)";
  const isKnownGenre = genre in genreColours;
  const textColor = isKnownGenre ? "#ffffff" : "#111827";

  return (
    <Badge
      variant="outline"
      className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] border-transparent"
      data-known-genre={isKnownGenre}
      style={{ backgroundColor, color: textColor }}
    >
      {genre}
    </Badge>
  );
}
