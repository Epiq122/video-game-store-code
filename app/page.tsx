import { GenreBadge } from "@/components/genre-badge";

export default function Home() {
  const genres = [
    "Action",
    "RPG",
    "Sports",
    "Strategy",
    "Horror",
    "Adventure",
    "Unknown",
  ];

  return (
    <main
      className="min-h-screen px-6 py-16 text-white"
      style={{
        background:
          "radial-gradient(circle at top, rgba(99, 102, 241, 0.18), transparent 34%), #0a1020",
      }}
    >
      <section
        className="mx-auto grid max-w-5xl gap-8 overflow-hidden rounded-[28px] border border-white/10 shadow-[0_24px_80px_rgba(10,16,32,0.45)] lg:grid-cols-[1.2fr_0.8fr]"
        style={{
          background:
            "linear-gradient(135deg, rgba(19,28,49,0.98), rgba(26,36,58,0.96))",
        }}
      >
        <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#aab3c5]/75">
              Game Detail Metadata
            </p>
            <div className="space-y-4">
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[#f8fafc] md:text-5xl">
                Compact genre badges that fit the storefront UI
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-[#aab3c5] md:text-[15px]">
                The badge preview now sits inside a dark elevated surface with
                the same restrained, premium direction used across PixelVault.
                The component still demonstrates the supported genre palette and
                fallback treatment, but in a layout that reads like real product
                metadata instead of a raw component sandbox.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f8aa3]">
              Genre
            </p>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <GenreBadge key={genre} genre={genre} />
              ))}
            </div>
          </div>
        </div>

        <aside className="relative hidden min-h-[340px] overflow-hidden border-l border-white/8 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(143,146,255,0.24),transparent_34%)]" />
          <div className="absolute -right-12 top-12 h-48 w-48 rounded-full bg-[#8f92ff]/18 blur-3xl" />
          <div className="absolute bottom-10 left-10 right-10 rounded-[24px] border border-white/10 bg-[#10192c]/88 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f8aa3]">
              Product Snapshot
            </p>
            <div className="mt-5 space-y-4">
              <div className="aspect-[3/4] rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(143,146,255,0.16),rgba(17,25,44,0.92))]" />
              <div className="space-y-2">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#f8fafc]">
                  Night Raid Zero
                </h2>
                <div className="flex flex-wrap gap-2">
                  <GenreBadge genre="Action" />
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d8deff]">
                    PC
                  </span>
                </div>
                <p className="text-sm leading-6 text-[#aab3c5]">
                  Genre chips belong in the metadata stack, paired with other
                  compact labels and never treated like oversized callouts.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
