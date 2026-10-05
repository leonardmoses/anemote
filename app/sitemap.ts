import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anemote.com",
      lastModified: new Date(),
    },
  ];
}
