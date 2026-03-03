const voices = [
  {
    quote:
      "大手予備校では「自分のペースで進めてください」と言われるだけで、何をすべきか全く分かりませんでした。医進ラボでは毎回「今週これをやって、次回はここから」と具体的に示してもらえるので、迷いがなくなりました。",
    name: "高校3年生・Aさん",
    detail: "国立医学部志望 / オンライン受講",
    icon: "A",
  },
  {
    quote:
      "小論文は完全に独学で、書き方すら分かっていませんでした。医進ラボでは医療倫理の背景から丁寧に教えてもらい、「なぜそう書くのか」が分かるようになりました。添削のフィードバックも毎回具体的で助かっています。",
    name: "高校2年生・Bさん",
    detail: "私立医学部志望 / 対面受講",
    icon: "B",
  },
  {
    quote:
      "面接で何を話せばいいか全く分からず、模擬練習もしたことがありませんでした。現役医学生の先生に「実際の面接室でこんな質問が来た」という話を聞きながら練習できるのは、他では絶対にできない体験でした。",
    name: "既卒・Cさん",
    detail: "複数私立医学部受験 / オンライン受講",
    icon: "C",
  },
  {
    quote:
      "地方に住んでいるため大手予備校に通えず、オンライン指導を探していました。Zoomでもホワイトボードを使った数学の解説が分かりやすく、対面と全く遜色ない授業を受けられています。",
    name: "高校3年生・Dさん",
    detail: "地方在住 / 国公立医学部志望 / オンライン受講",
    icon: "D",
  },
];

export default function VoiceSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Student Voices
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            受講生の声
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "#6B6560" }}>
            実際に医進ラボで学んでいる生徒の声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {voices.map((voice, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 relative"
              style={{ border: "1px solid #E2DDD4" }}
            >
              {/* Quote mark */}
              <div
                className="font-playfair text-6xl leading-none absolute top-4 left-6 opacity-10 select-none"
                style={{ color: "#C9A84C" }}
              >
                "
              </div>

              <p className="text-sm leading-relaxed mb-6 pt-4 relative" style={{ color: "#2D2A24" }}>
                {voice.quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}
                >
                  {voice.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#0A1628" }}>
                    {voice.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6B6560" }}>
                    {voice.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "#6B6560" }}>
          ※ プライバシー保護のため、氏名は仮名・情報は一部変更しています。
        </p>
      </div>
    </section>
  );
}
