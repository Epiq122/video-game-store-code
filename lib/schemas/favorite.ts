import { z } from "zod";

export const favoriteMutationSchema = z.object({
  productId: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .max(200)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, "Invalid slug format"),
});

export type FavoriteMutationInput = z.infer<typeof favoriteMutationSchema>;
