"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { favoriteMutationSchema } from "@/lib/schemas/favorite";
import { requireAuth } from "@/lib/require-auth";

export async function addFavoriteAction(input: unknown) {
  const parsed = favoriteMutationSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error("Invalid request");
  }

  const session = await requireAuth();
  const { productId, slug } = parsed.data;

  const product = await db.product.findUnique({
    where: { id: productId },
    select: { id: true, slug: true },
  });

  if (!product || product.slug !== slug) {
    throw new Error("Game not found");
  }

  try {
    await db.favorite.create({
      data: {
        userId: session.user.id,
        productId: product.id,
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      // Already favorited — treat as success for idempotent toggles.
    } else {
      throw error;
    }
  }

  revalidatePath("/favorites");
  revalidatePath(`/games/${slug}`);
}

export async function removeFavoriteAction(input: unknown) {
  const parsed = favoriteMutationSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error("Invalid request");
  }

  const session = await requireAuth();
  const { productId, slug } = parsed.data;

  const product = await db.product.findUnique({
    where: { id: productId },
    select: { id: true, slug: true },
  });

  if (!product || product.slug !== slug) {
    throw new Error("Game not found");
  }

  await db.favorite.deleteMany({
    where: {
      userId: session.user.id,
      productId: product.id,
    },
  });

  revalidatePath("/favorites");
  revalidatePath(`/games/${slug}`);
}
