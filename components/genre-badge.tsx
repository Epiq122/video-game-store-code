import { Badge } from "@/components/ui/badge";

type GenreBadgeProps = {
  genre: string;
};

export function GenreBadge({ genre }: GenreBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="rounded-full border-[--color-border] bg-[#1a243a] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d8deff]"
    >
      {genre}
    </Badge>
  );
}
