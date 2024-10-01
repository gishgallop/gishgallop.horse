import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gishgallop.horse",
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          es: "https://gishgallop.horse",
        },
      },
    },
  ];
}
