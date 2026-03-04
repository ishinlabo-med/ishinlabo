import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  title: string;
  content: string;
};

export default function LegalPageLayout({ title, content }: Props) {
  return (
    <>
      <div className="py-16 md:py-24" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none" style={{ color: "#2D2A24" }}>
            <MDXRemote source={content} />
          </div>
        </div>
      </section>
    </>
  );
}
