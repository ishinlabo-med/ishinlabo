import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formatted = post.date
    ? new Date(post.date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <div className="py-16 md:py-20" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-xs mb-6 transition-colors"
            style={{ color: "#C9A84C80" }}
          >
            ← ブログ一覧に戻る
          </Link>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full"
                  style={{ border: "1px solid #C9A84C40", color: "#C9A84C" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
            {post.title}
          </h1>
          <time className="text-sm" style={{ color: "#ffffff60" }}>
            {formatted}
          </time>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#0A1628" }}>
            <h3 className="font-playfair text-xl font-bold text-white mb-3">
              医学部合格を目指すなら、まずは無料相談へ
            </h3>
            <p className="text-white/60 text-sm mb-6">
              現役医学生・医師があなたの状況をヒアリングし、最適な学習プランをご提案します。
            </p>
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3 font-bold rounded-lg text-sm"
            >
              無料相談を申し込む →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
