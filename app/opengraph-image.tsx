import { ImageResponse } from "next/og";
import { profile } from "./lib/content";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated OG/social-share image — name + title on the site's dark theme.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px",
          background: "#07080a",
          backgroundImage:
            "radial-gradient(900px 500px at 80% -10%, rgba(94,234,212,0.16), transparent)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#5eead4",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#5eead4",
            }}
          />
          Open to senior AI / full-stack roles
        </div>

        <div
          style={{
            marginTop: "36px",
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.02,
            color: "#e8eaed",
            letterSpacing: "-0.02em",
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            marginTop: "24px",
            fontSize: 40,
            color: "#5eead4",
          }}
        >
          {profile.title}
        </div>

        <div
          style={{
            marginTop: "20px",
            fontSize: 30,
            color: "#8b9099",
            maxWidth: "920px",
          }}
        >
          Production AI agents — and the auth, infra, and eval suites that ship
          them.
        </div>
      </div>
    ),
    { ...size },
  );
}
