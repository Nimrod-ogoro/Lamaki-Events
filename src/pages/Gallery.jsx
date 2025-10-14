// Gallery.jsx
import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

/* -------------------------------------------------------------- */
/* 1.  Lazy-load the heavy “video hook” only when Gallery mounts  */
/* -------------------------------------------------------------- */
const LazyVideoHook = React.lazy(() => import("@/hooks/useLazyVideo"));

/* -------------------------------------------------------------- */
/* 2.  Video component that uses the lazy-loaded hook             */
/* -------------------------------------------------------------- */
function LazyVideo({ src }) {
  const [videoRef, shouldLoad] = LazyVideoHook(); // hook now available
  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      style={{ width: "100%", height: 240, objectFit: "cover" }}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    />
  );
}

/* -------------------------------------------------------------- */
/* 3.  FULL events array – every link preserved exactly           */
/* -------------------------------------------------------------- */
const events = [
  { id: 1, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-13.jpg", title: "Lamaki Events", desc: "Annual awards & dinner under the stars." },
  { id: 2, type: "video", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/WhatsApp%20Video%202025-09-04%20at%2016.50.18_7bbf9e7e.mp4", title: "Lamaki Events", desc: "Luxury outdoor reception with live band." },
  { id: 3, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-15.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 4, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-22.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 5, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-25.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 6, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/img5.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 7, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/img8.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 8, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/img9.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 9, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/img6.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 10, type: "video", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/1000160597.mp4", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 11, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-7.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 12, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 13, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-32.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 14, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-39.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 15, type: "video", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/WhatsApp%20Video%202025-08-07%20at%2009.38.27_8aa5347a.mp4", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 16, type: "video", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/1000160854.mp4", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 17, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-40.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 18, type: "video", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/WhatsApp%20Video%202025-08-07%20at%2009.18.43_c64a0f35.mp4", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 19, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-9.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 20, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/9B6A8211.JPG", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 21, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-34.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 22, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-6.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 23, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-31.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 24, type: "image", src: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-8.jpg", title: "Lamaki Events", desc: "Stage lighting & sound showcase." },
  { id: 25, type: "video", src: "https://pub-06a2a441a00c4ef597b4f4f0cac7cddf.r2.dev/e-1.mp4", title: "Concert Night", desc: "" },
  { id: 26, type: "video", src: "https://pub-06a2a441a00c4ef597b4f4f0cac7cddf.r2.dev/e-4.mp4", title: "Product Launch", desc: "" },
  { id: 27, type: "video", src: "https://pub-06a2a441a00c4ef597b4f4f0cac7cddf.r2.dev/e-5.mp4", title: "Product Launch", desc: "" },
  { id: 28, type: "video", src: "https://pub-06a2a441a00c4ef597b4f4f0cac7cddf.r2.dev/e-6.mp4", title: "Product Launch", desc: "" },
  { id: 29, type: "video", src: "https://pub-06a2a441a00c4ef597b4f4f0cac7cddf.r2.dev/e-2.mp4", title: "Birthday Bash", desc: "" },
  { id: 30, type: "video", src: "https://pub-06a2a441a00c4ef597b4f4f0cac7cddf.r2.dev/e-3.mp4", title: "Product Launch", desc: "" },
];

/* -------------------------------------------------------------- */
/* 4.  Gallery page                                               */
/* -------------------------------------------------------------- */
export default function Gallery() {
  const nav = useNavigate();

  return (
    <>
      {/* ====== HEADER ====== */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          background: "#ECF8F9",
          boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#004080",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => nav("/")}
        >
          <img src="/LD-Logo.png" alt="Logo" style={{ height: 40, marginRight: 8 }} />
          Lamaki Designs
        </div>
        <Button variant="outline" onClick={() => nav("/")}>
          Back to Home
        </Button>
      </header>

      {/* ====== MAIN ====== */}
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12">
            Gallery
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
            }}
          >
            {events.map((e) => (
              <div
                key={e.id}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,.08)",
                  background: "#fff",
                  transition: "transform .25s ease, box-shadow .25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(evt) => {
                  evt.currentTarget.style.transform = "translateY(-6px)";
                  evt.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,.12)";
                }}
                onMouseLeave={(evt) => {
                  evt.currentTarget.style.transform = "translateY(0)";
                  evt.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";
                }}
              >
                {/* ---- IMAGE ---- */}
                {e.type === "image" && (
                  <img
                    src={e.src}
                    alt={e.title}
                    loading="lazy"
                    style={{ width: "100%", height: 240, objectFit: "cover" }}
                  />
                )}

                {/* ---- VIDEO ---- */}
                {e.type === "video" && (
                  <Suspense
                    fallback={
                      <div
                        style={{
                          width: "100%",
                          height: 240,
                          background: "#e5e7eb",
                        }}
                      />
                    }
                  >
                    <LazyVideo src={e.src} />
                  </Suspense>
                )}

                <div style={{ padding: "20px 24px" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 6,
                    }}
                  >
                    {e.title}
                  </h3>
                  <p style={{ color: "#475569", fontSize: "0.95rem" }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}