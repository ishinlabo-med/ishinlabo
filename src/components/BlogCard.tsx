import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export default function BlogCard({ slug, title, date, excerpt, tags }: BlogCardProps) {
  const formatted = date
    ? new Date(date).toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })
    : "";

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article
        className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5"
        style={{ border: "1px solid #E2DDD4", backgroundColor: "white" }}
      >
        {/* Decorative top bar */}
        <div className="h-1.5" style={{ backgroundColor: "#C9A84C" }} />
        <div className="p-6 flex flex-col flex-1">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: "#F8F7F4", color: "#6B6560", border: "1px solid #E2DDD4" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2
            className="font-bold text-base leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors duration-200"
            style={{ color: "#0A1628" }}
          >
            {title}
          </h2>

          {/* Excerpt */}
          <p
            className="text-sm leading-relaxed flex-1 mb-4 line-clamp-3"
            style={{ color: "#6B6560" }}
          >
            {excerpt}
          </p>

          {/* Date + arrow */}
          <div className="flex items-center justify-between">
            <time className="text-xs" style={{ color: "#6B6560" }}>
              {formatted}
            </time>
            <span className="text-xs font-medium" style={{ color: "#C9A84C" }}>
              続きを読む →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
