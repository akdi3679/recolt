import type { MetadataRoute } from "next";
import { blog } from "@/data/blog";
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1.0 },
    { url: `${BASE}/methode`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/laboratoire`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/a-propos`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/mentions-legales`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/politique-confidentialite`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/politique-cookies`, lastModified: now, priority: 0.3 },
    ...blog.posts.map((post) => ({
  url: `${BASE}/blog/${post.slug}`,
  lastModified: new Date(post.date),
  priority: 0.6,
})),
  ];
}