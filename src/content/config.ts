import { z, defineCollection } from "astro:content";

const userCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      avatar: image().refine((img) => img.width < 1200, {
        message: "Image width must be greater than 5000px",
      }),
      socialMedia: z.array(z.string()),
    }),
});

export const collections = {
  // the key is the name of the collection
  user: userCollection,
};
