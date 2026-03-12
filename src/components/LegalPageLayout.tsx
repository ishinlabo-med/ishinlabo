import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

type Props = {
  title: string;
  content: string;
};

export default function LegalPageLayout({ title, content }: Props) {
  return (
    <>
      <div className="py-16 md:py-24" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content">
            <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>
        </div>
      </section>
    </>
  );
}
