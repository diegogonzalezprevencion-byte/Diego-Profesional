import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.cl";

  const routes = [
    "",
    "/prevencion",
    "/masoterapia",
    "/agenda-prevencion",
    "/agenda-masoterapia",
    "/contacto",
    "/politicas"
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
