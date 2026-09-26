import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { blog } from "@/data/blog";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return blog.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.posts.find((item) => item.slug === slug);

  return {
    title: post?.title ?? "Article",
    description: post?.excerpt ?? "Article B.E. RECOLT",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blog.posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <>
      <section className="bg-forest-950 pb-16 pt-32 text-sand-100 lg:pb-20 lg:pt-40">
        <Container size="narrow">
          <Link
            href="/blog"
            className="text-sm text-sand-200/70 transition-colors hover:text-sand-50"
          >
            ← Retour au blog
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-sand-100/15 bg-forest-900/50 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#E7C36B]">
              {post.category}
            </span>

            <span className="text-sm text-sand-200/60">
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="mt-8 font-serif text-4xl leading-[1.06] tracking-[-0.03em] text-sand-50 sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-200/80">
            {post.excerpt}
          </p>
        </Container>
      </section>

      <section className="bg-sand-100 py-16 lg:py-24">
        <Container size="narrow">
          <article className="space-y-8">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-[17px] leading-relaxed text-ink-700"
              >
                {paragraph}
              </p>
            ))}
          </article>

          <div className="mt-16 rounded-lg border border-forest-900/10 bg-forest-900 p-10 text-sand-100">
            <h2 className="font-serif text-3xl leading-[1.1] tracking-[-0.02em] text-sand-50">
              Votre site peut-il devenir nourricier ?
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-sand-200/80">
              Diagnostic de sol, potentiel de résilience, indice de production.
              Parlons de votre projet.
            </p>

            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Demander un diagnostic
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}