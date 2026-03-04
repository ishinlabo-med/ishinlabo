"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  course: string;
  grade: string;
  message: string;
};

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
  { value: "other", label: "その他" },
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

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

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
        <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: "#0A1628" }}>
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
        <div>
          <label style={labelStyle}>お名前 <span style={{ fontSize: "0.7rem", color: "#C9A84C", border: "1px solid #C9A84C", borderRadius: "3px", padding: "0 4px", marginLeft: "4px" }}>必須</span></label>
          <input type="text" placeholder="山田 太郎" style={inputBase}
            {...register("name", { required: "お名前を入力してください" })} />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>
        <div>
          <label style={labelStyle}>メールアドレス <span style={{ fontSize: "0.7rem", color: "#C9A84C", border: "1px solid #C9A84C", borderRadius: "3px", padding: "0 4px", marginLeft: "4px" }}>必須</span></label>
          <input type="email" placeholder="example@email.com" style={inputBase}
            {...register("email", { required: "メールアドレスを入力してください" })} />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>
        <div>
          <label style={labelStyle}>電話番号（任意）</label>
          <input type="tel" placeholder="090-0000-0000" style={inputBase} {...register("phone")} />
        </div>
        <div>
          <label style={labelStyle}>学年・状況 <span style={{ fontSize: "0.7rem", color: "#C9A84C", border: "1px solid #C9A84C", borderRadius: "3px", padding: "0 4px", marginLeft: "4px" }}>必須</span></label>
          <select style={{ ...inputBase, cursor: "pointer" }}
            {...register("grade", { required: "学年・状況を選択してください" })}>
            {gradeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.grade && <p style={errorStyle}>{errors.grade.message}</p>}
        </div>
        <div>
          <label style={labelStyle}>ご興味のあるコース <span style={{ fontSize: "0.7rem", color: "#C9A84C", border: "1px solid #C9A84C", borderRadius: "3px", padding: "0 4px", marginLeft: "4px" }}>必須</span></label>
          <select style={{ ...inputBase, cursor: "pointer" }}
            {...register("course", { required: "コースを選択してください" })}>
            {courseOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.course && <p style={errorStyle}>{errors.course.message}</p>}
        </div>
        <div>
          <label style={labelStyle}>お問い合わせ内容 <span style={{ fontSize: "0.7rem", color: "#C9A84C", border: "1px solid #C9A84C", borderRadius: "3px", padding: "0 4px", marginLeft: "4px" }}>必須</span></label>
          <textarea rows={5} placeholder="現在の状況や志望校、ご質問などをご記入ください。"
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
          {status === "submitting" ? "送信中..." : "送信する"}
        </button>
        <p className="text-xs text-center" style={{ color: "#6B6560" }}>
          ※ 送信いただいた個人情報は、お問い合わせへの返答以外には使用しません。
        </p>
      </div>
    </form>
  );
}
