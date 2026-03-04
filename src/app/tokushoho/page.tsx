import type { Metadata } from "next";
import { getLegalPage } from "@/lib/legal";
import LegalPageLayout from "@/components/LegalPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
};

export default function TokushohoPage() {
  const page = getLegalPage("tokushoho");
  if (!page) notFound();
  return <LegalPageLayout title={page.title} content={page.content} />;
}
