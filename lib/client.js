import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "qo7hpjv0",
  dataset: "production",
  apiVersion: "2024-04-01",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
