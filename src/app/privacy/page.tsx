import type { Metadata } from "next";
import { getLegalPage } from "@/lib/legal";
import LegalPageLayout from "@/components/LegalPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  const page = getLegalPage("privacy");
  if (!page) notFound();
  return <LegalPageLayout title={page.title} content={page.content} />;
}
