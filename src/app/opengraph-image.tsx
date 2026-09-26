import { ImageResponse } from "next/og";

export const alt = "B.E. RECOLT — Chaque m² est un espace nourricier.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0E1A14",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid motif */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.06,
          }}
        >
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 60,
                height: 60,
                borderRight: "1px solid #F4F1EA",
                borderBottom: "1px solid #F4F1EA",
              }}
            />
          ))}
        </div>

        {/* Top — brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              width: 56,
              height: 56,
            }}
          >
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3].map((col) => {
                const isSprout = row === 2 && col === 3;
                return (
                  <div
                    key={`${row}-${col}`}
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 1,
                      background: "#22C55E",
                    }}
                  />
                );
              }),
            )}
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#FAF8F3",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            RECOLT
          </div>
        </div>

        {/* Middle — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#D1663B",
              marginBottom: 24,
            }}
          >
            Bureau d'études · Ingénierie nourricière
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 500,
              lineHeight: 1.05,
              color: "#FAF8F3",
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            En finir avec la ville-fournaise.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#E8E2D5",
              marginTop: 32,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Chaque m² est un espace nourricier.
          </div>
        </div>

        {/* Bottom — compliance strip */}
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 16,
            color: "#B8AE96",
            letterSpacing: 3,
            textTransform: "uppercase",
            borderTop: "1px solid rgba(244,241,234,0.1)",
            paddingTop: 32,
          }}
        >
          <span>Enregistré UE</span>
          <span>Conforme ZAN</span>
          <span>RE2020</span>
        </div>
      </div>
    ),
    { ...size },
  );
}