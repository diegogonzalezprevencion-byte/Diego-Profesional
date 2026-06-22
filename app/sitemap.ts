import type { MetadataRoute } from "next";
import { posts } from "../lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.cl";
  const routes = ["", "/blog", "/agenda-prevencion", "/agenda-masoterapia", "/contacto", "/politicas", "/prevencion-riesgos-santiago", "/prevencion-riesgos-providencia", "/prevencion-riesgos-las-condes", "/masoterapia-santiago", "/masoterapia-providencia", "/masoterapia-las-condes"];
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);
  return [...routes, ...blogRoutes].map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 }));
}
