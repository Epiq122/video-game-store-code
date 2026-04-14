import { Gamepad2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type PlatformBadgeProps = {
  platform: string;
};

export function PlatformBadge({ platform }: PlatformBadgeProps) {
  return (
    <Badge variant="outline" className="gap-1 rounded border-[--color-border] bg-transparent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[--color-text-secondary]">
      <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-white/6 text-[--color-text-primary]">
        <Gamepad2 className="h-2.5 w-2.5" aria-hidden="true" />
      </span>
      <span>{platform}</span>
    </Badge>
  );
}
