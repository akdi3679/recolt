import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { blog } from "@/data/blog";
import { formatDate } from "@/lib/format";

export function BlogSection() {
  const posts = blog.posts.slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="border-b border-forest-900/8 bg-sand-100 py-20 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-forest-700">
              <span className="inline-block h-px w-8 bg-forest-600" />
              {blog.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-forest-900 sm:text-4xl">
              {blog.heading}
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-700">
              {blog.intro}
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-forest-800 underline-offset-4 transition-colors hover:text-forest-950 hover:underline"
          >
            Tous les articles →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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

              <h3 className="mt-6 flex-1 font-serif text-xl leading-snug tracking-[-0.01em] text-forest-900">
                {post.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-ink-700 line-clamp-3">
                {post.excerpt}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest-800">
                Lire l’article
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}