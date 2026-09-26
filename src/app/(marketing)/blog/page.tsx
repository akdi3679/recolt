import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { blog } from "@/data/blog";
import { formatDate } from "@/lib/format";
import { PageHero } from "@/components/layout/PageHero";
import { pageImages } from "@/data/pages";
export const metadata: Metadata = {
  title: "Blog",
  description:
    "Analyses et ressources sur le diagnostic nourricier, les sols urbains, l’eau et la production comestible.",
};

export default function BlogPage() {
  return (
    <>
<PageHero
  eyebrow="Blog"
  image={pageImages.blog}
  imageLabel="Ressources"
  title={    <>
      Comprendre
      <br />
      la ville nourricière.
    </>
  }
  subtitle="Analyses courtes sur les sols urbains, l’eau, la production comestible et la transformation des espaces."
/>
      <section className="bg-forest-950 pb-16 pt-32 text-sand-100 lg:pb-20 lg:pt-40">
        <Container>
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#E7C36B]">
            <span className="inline-block h-px w-8 bg-[#E7C36B]" />
            Blog
          </p>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-sand-50 sm:text-5xl">
            Comprendre la ville nourricière.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-200/80">
            {blog.intro}
          </p>
        </Container>
      </section>

      <section className="bg-sand-100 py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blog.posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-lg border border-forest-900/10 bg-sand-50 p-7 transition-colors hover:border-forest-900/25"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-forest-900/15 bg-forest-50 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-forest-700">
                    {post.category}
                  </span>

                  <span className="text-xs text-ink-500">
                    {formatDate(post.date)}
                  </span>
                </div>

                <h2 className="mt-6 flex-1 font-serif text-xl leading-snug tracking-[-0.01em] text-forest-900">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-ink-700 line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest-800">
                  Lire l’article
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}