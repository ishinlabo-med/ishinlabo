import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "医進ラボ | 医学部受験専門オンライン個別指導塾";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "80px",
        }}
      >
        {/* Top gold bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #C9A84C, #E8C96B, #C9A84C)",
            display: "flex",
          }}
        />

        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(201,168,76,0.06)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(201,168,76,0.04)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            zIndex: 1,
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: "18px",
              color: "#C9A84C",
              letterSpacing: "0.2em",
              marginBottom: "20px",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            ISHIN LABO
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: "84px",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: "1.1",
              marginBottom: "20px",
              fontFamily: "sans-serif",
              display: "flex",
            }}
          >
            医進ラボ
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "30px",
              color: "#C9A84C",
              marginBottom: "28px",
              fontFamily: "sans-serif",
              display: "flex",
            }}
          >
            医学部受験専門 オンライン個別指導塾
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#C9A84C",
              marginBottom: "28px",
              display: "flex",
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.65)",
              textAlign: "center",
              lineHeight: "1.6",
              fontFamily: "sans-serif",
              display: "flex",
            }}
          >
            現役医学生・医師による完全オンライン個別指導
          </div>
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "44px",
            right: "80px",
            fontSize: "18px",
            color: "rgba(201,168,76,0.6)",
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          ishinlabo.com
        </div>

        {/* Bottom gold bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "rgba(201,168,76,0.4)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
