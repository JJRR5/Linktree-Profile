import { z, defineCollection } from "astro:content";

const userCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string().min(5).max(80),
      avatar: image(),
      socialMedia: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        }),
      ),
    }),
});

export const collections = {
  users: userCollection,
};
