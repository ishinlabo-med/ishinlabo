"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  lastName: string;
  firstName: string;
  lastNameKana?: string;
  firstNameKana?: string;
  email: string;
  phone?: string;
  grade: string;
  targetSchool?: string;
  course: string;
  purpose: string[];
  message: string;
};

const purposeOptions = [
  { value: "consultation", label: "入塾相談・面談希望" },
  { value: "document", label: "資料請求" },
  { value: "trial", label: "無料体験授業の申し込み" },
  { value: "other", label: "その他のお問い合わせ" },
];

const courseOptions = [
  { value: "", label: "コースを選択してください" },
  { value: "individual", label: "個別指導コース" },
  { value: "essay", label: "小論文特訓コース" },
  { value: "interview", label: "面接対策コース" },
  { value: "multiple", label: "複数コースの組み合わせ" },
  { value: "consultation", label: "まだ決めていない（相談したい）" },
];

const gradeOptions = [
  { value: "", label: "学年・状況を選択してください" },
  { value: "high1", label: "高校1年生" },
  { value: "high2", label: "高校2年生" },
  { value: "high3", label: "高校3年生（現役）" },
  { value: "ronin1", label: "浪人1年目" },
  { value: "ronin2plus", label: "浪人2年目以上" },
  { value: "other", label: "その他・保護者の方" },
];

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid #E2DDD4",
  backgroundColor: "white",
  color: "#0A1628",
  fontSize: "0.875rem",
  outline: "none",
};

const errorStyle: React.CSSProperties = {
  color: "#dc2626",
  fontSize: "0.75rem",
  marginTop: "0.25rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: "600",
  fontSize: "0.875rem",
  marginBottom: "0.5rem",
  color: "#0A1628",
};

const RequiredBadge = () => (
  <span style={{ fontSize: "0.7rem", color: "#C9A84C", border: "1px solid #C9A84C", borderRadius: "3px", padding: "0 4px", marginLeft: "6px" }}>
    必須
  </span>
);

const OptionalBadge = () => (
  <span style={{ fontSize: "0.7rem", color: "#9CA3AF", marginLeft: "6px", fontWeight: "normal" }}>
    任意
  </span>
);

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { purpose: [] },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#C9A84C20" }}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#C9A84C">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: "#0A1628" }}>
          お問い合わせありがとうございます
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>
          1営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

        {/* お問い合わせの種類 */}
        <div>
          <label style={labelStyle}>
            お問い合わせの種類
            <span style={{ fontSize: "0.8rem", color: "#6B6560", marginLeft: "8px", fontWeight: "normal" }}>（複数選択可）</span>
            <RequiredBadge />
          </label>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {purposeOptions.map((opt) => (
              <label key={opt.value} style={{ display: "flex", alignItems: "center", cursor: "pointer", fontSize: "0.875rem", color: "#0A1628", gap: "8px" }}>
                <input
                  type="checkbox"
                  value={opt.value}
                  style={{ width: "1.1em", height: "1.1em", accentColor: "#C9A84C" }}
                  {...register("purpose", { validate: (v) => (v && v.length > 0) || "種類を1つ以上選択してください" })}
                />
                {opt.label}
              </label>
            ))}
          </div>
          {errors.purpose && <p style={errorStyle}>{errors.purpose.message}</p>}
        </div>

        {/* 資料請求注記 */}
        <div style={{ backgroundColor: "#F8F7F4", borderRadius: "8px", padding: "16px" }}>
          <p style={{ fontSize: "0.8rem", color: "#6B6560", margin: 0 }}>
            ※ 資料請求をご希望の方へ：ご入力いただいたメールアドレス宛に、PDF形式のパンフレットをすぐにお送りいたします（郵送物不要）。
          </p>
        </div>

        {/* 氏名 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <label style={labelStyle}>姓 <RequiredBadge /></label>
            <input type="text" placeholder="例: 山田" style={inputBase}
              {...register("lastName", { required: "姓を入力してください" })} />
            {errors.lastName && <p style={errorStyle}>{errors.lastName.message}</p>}
          </div>
          <div>
            <label style={labelStyle}>名 <RequiredBadge /></label>
            <input type="text" placeholder="例: 太郎" style={inputBase}
              {...register("firstName", { required: "名を入力してください" })} />
            {errors.firstName && <p style={errorStyle}>{errors.firstName.message}</p>}
          </div>
        </div>

        {/* フリガナ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <label style={labelStyle}>セイ（フリガナ）<OptionalBadge /></label>
            <input type="text" placeholder="例: ヤマダ" style={inputBase} {...register("lastNameKana")} />
          </div>
          <div>
            <label style={labelStyle}>メイ（フリガナ）<OptionalBadge /></label>
            <input type="text" placeholder="例: タロウ" style={inputBase} {...register("firstNameKana")} />
          </div>
        </div>

        {/* メールアドレス */}
        <div>
          <label style={labelStyle}>メールアドレス <RequiredBadge /></label>
          <input type="email" placeholder="example@email.com" style={inputBase}
            {...register("email", { required: "メールアドレスを入力してください" })} />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>

        {/* 電話番号 */}
        <div>
          <label style={labelStyle}>電話番号 <OptionalBadge /></label>
          <input type="tel" placeholder="例: 090-1234-5678" style={inputBase} {...register("phone")} />
        </div>

        {/* 学年 */}
        <div>
          <label style={labelStyle}>現在の学年 <RequiredBadge /></label>
          <select style={{ ...inputBase, cursor: "pointer" }}
            {...register("grade", { required: "学年・状況を選択してください" })}>
            {gradeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.grade && <p style={errorStyle}>{errors.grade.message}</p>}
        </div>

        {/* 志望校 */}
        <div>
          <label style={labelStyle}>志望校 <OptionalBadge /></label>
          <input type="text" placeholder="例: 慶應義塾大学医学部、未定など" style={inputBase}
            {...register("targetSchool")} />
        </div>

        {/* コース */}
        <div>
          <label style={labelStyle}>ご興味のあるコース <RequiredBadge /></label>
          <select style={{ ...inputBase, cursor: "pointer" }}
            {...register("course", { required: "コースを選択してください" })}>
            {courseOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.course && <p style={errorStyle}>{errors.course.message}</p>}
        </div>

        {/* メッセージ */}
        <div>
          <label style={labelStyle}>ご質問・ご要望など <RequiredBadge /></label>
          <textarea rows={5}
            placeholder="志望校に関するご相談や、面談の希望日時などがございましたらご記入ください。"
            style={{ ...inputBase, resize: "vertical" as const }}
            {...register("message", { required: "お問い合わせ内容を入力してください" })} />
          {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
        </div>

        {status === "error" && (
          <p className="text-sm text-center" style={{ color: "#dc2626" }}>
            送信中にエラーが発生しました。もう一度お試しください。
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          style={{
            width: "100%", padding: "1rem", fontWeight: "bold", borderRadius: "0.5rem",
            fontSize: "1rem", backgroundColor: status === "submitting" ? "#A8872E" : "#C9A84C",
            color: "#0A1628", cursor: status === "submitting" ? "not-allowed" : "pointer", border: "none"
          }}
        >
          {status === "submitting" ? "送信中..." : "入力内容を確認して送信"}
        </button>

        <p className="text-xs text-center" style={{ color: "#6B6560" }}>
          ※ 送信いただいた個人情報は、お問い合わせへの返答以外には使用しません。
        </p>
      </div>
    </form>
  );
}
