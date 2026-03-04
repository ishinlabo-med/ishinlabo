import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LEGAL_DIR = path.join(process.cwd(), "src/content/legal");

export function getLegalPage(slug: string): { title: string; content: string } | null {
  const filePaths = [
    path.join(LEGAL_DIR, slug + ".md"),
    path.join(LEGAL_DIR, slug + ".mdx"),
  ];
  const filePath = filePaths.find((p) => fs.existsSync(p));
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { title: data.title || slug, content };
}
