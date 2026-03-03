import fs from "fs";
import path from "path";

/** public/images/ から basename に一致する画像パスを返す（jpg/png/webp対応） */
export function findImage(basename: string): string | null {
  for (const ext of [".jpg", ".png", ".webp"]) {
    if (fs.existsSync(path.join(process.cwd(), `public/images/${basename}${ext}`))) {
      return `/images/${basename}${ext}`;
    }
  }
  return null;
}
