import Image from "next/image";
import { findImage } from "@/lib/imageHelper";

const instructors = [
  {
    basename: "instructor-a",
    fallbackBasename: "founder-a",
    subject: "代表・英語科",
    name: "慶應医学部生 A",
    description:
      "塾なしで慶應医学部に特待合格。「無駄な時間は1秒も使わない」という信念のもと、超効率的な英語学習法を指導。",
  },
  {
    basename: "instructor-b",
    fallbackBasename: "founder-b",
    subject: "代表・数学科",
    name: "慶應医学部生 B",
    description:
      "私立医学部全勝合格。圧倒的な過去問分析力と、生徒の思考の癖を見抜く指導で数学を確実に得点源に引き上げる。",
  },
  {
    basename: "instructor-c",
    fallbackBasename: null,
    subject: "理科科目担当",
    name: "東京医科歯科大生 C",
    description:
      "難関国公立を突破した精緻な理科の解法ロジックを伝授。暗記に頼らない「なぜそうなるか」を徹底的に追求する。",
  },
  {
    basename: "instructor-d",
    fallbackBasename: null,
    subject: "面接・小論文担当",
    name: "医進ラボ 専属講師",
    description:
      "医学部独特の面接や小論文の傾向を熟知。自己分析から志望理由書のブラッシュアップまで、二次試験を完全サポート。",
  },
];

function InstructorPhoto({ basename, fallbackBasename, name }: { basename: string; fallbackBasename: string | null; name: string }) {
  const src = findImage(basename) || (fallbackBasename ? findImage(fallbackBasename) : null);
  return (
    <div className="w-full aspect-square overflow-hidden" style={{ borderRadius: "12px 12px 0 0" }}>
      {src ? (
        <Image
          src={src}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#112040" }}>
          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#C9A84C40">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function InstructorsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Professional Instructors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            講師紹介
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "#6B6560" }}>
            実際に難関医学部に合格した経験を持つ現役医学生が、自らの合格体験をもとに直接指導します。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((inst, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              style={{ border: "1px solid #E2DDD4", backgroundColor: "#FFFFFF" }}
            >
              <InstructorPhoto basename={inst.basename} fallbackBasename={inst.fallbackBasename} name={inst.name} />
              <div className="p-6 flex flex-col flex-1">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 self-start"
                  style={{ backgroundColor: "#0A162810", color: "#0A1628" }}
                >
                  {inst.subject}
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: "#0A1628" }}>
                  {inst.name}
                </h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "#6B6560" }}>
                  {inst.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
