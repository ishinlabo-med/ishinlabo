import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export default function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
              Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0A1628" }}>
              医学部受験 お役立ち情報
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6B6560" }}>
              現役慶應医学部生が、勉強法・塾選び・受験戦略を発信しています。
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold flex-shrink-0 pb-1"
            style={{ color: "#C9A84C", borderBottom: "1px solid #C9A84C50" }}
          >
            記事一覧を見る →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "#C9A84C", borderBottom: "1px solid #C9A84C50" }}
          >
            記事一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
