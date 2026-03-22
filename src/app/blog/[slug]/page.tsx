import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogCtaBanner from "@/components/BlogCtaBanner";
import RelatedArticles from "@/components/RelatedArticles";

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
    alternates: {
      canonical: `https://ishinlabo.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://ishinlabo.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date || undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const allPosts = getAllPosts();

  const formatted = post.date
    ? new Date(post.date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://ishinlabo.com" },
      { "@type": "ListItem", position: 2, name: "ブログ", item: "https://ishinlabo.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://ishinlabo.com/blog/${slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://ishinlabo.com/blog/${slug}`,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    author: {
      "@type": "Organization",
      name: "医進ラボ",
      url: "https://ishinlabo.com",
    },
    publisher: {
      "@type": "Organization",
      name: "医進ラボ",
      logo: {
        "@type": "ImageObject",
        url: "https://ishinlabo.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ishinlabo.com/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
            {post.title}
          </h1>
          <time className="text-sm" style={{ color: "#ffffff60" }}>
            {formatted}
          </time>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blog-content">
            <MDXRemote source={post.content} />
          </div>
          <BlogCtaBanner variant="inline" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <BlogCtaBanner variant="bottom" />
          <RelatedArticles currentSlug={slug} posts={allPosts} />
        </div>
      </article>
    </>
  );
}
