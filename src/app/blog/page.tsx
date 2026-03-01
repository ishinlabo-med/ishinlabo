import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "ブログ・お知らせ",
  description: "医進ラボのブログ。医学部受験の勉強法、小論文・面接対策、最新情報などを現役医学生・医師が発信します。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="py-16 md:py-24" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Blog
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            ブログ・お知らせ
          </h1>
          <p className="text-white/60 mt-4 text-base">
            医学部受験に役立つ情報を定期的に発信しています
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center" style={{ color: "#6B6560" }}>
              記事はまだありません。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
