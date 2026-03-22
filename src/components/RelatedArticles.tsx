import Link from "next/link";
import type { Post } from "@/lib/blog";

interface Props {
  currentSlug: string;
  posts: Omit<Post, "content">[];
}

export default function RelatedArticles({ currentSlug, posts }: Props) {
  const related = posts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-10" style={{ borderTop: "1px solid #E2DDD4" }}>
      <h3 className="text-base font-bold mb-6" style={{ color: "#0A1628" }}>
        関連記事
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-xl p-4 transition-colors hover:border-opacity-80"
            style={{ border: "1px solid #E2DDD4", backgroundColor: "#F8F7F4" }}
          >
            {post.tags.length > 0 && (
              <span
                className="inline-block text-xs px-2 py-0.5 rounded-full mb-2"
                style={{ backgroundColor: "#0A162810", color: "#C9A84C" }}
              >
                {post.tags[0]}
              </span>
            )}
            <p className="text-sm font-semibold leading-snug line-clamp-3" style={{ color: "#0A1628" }}>
              {post.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
