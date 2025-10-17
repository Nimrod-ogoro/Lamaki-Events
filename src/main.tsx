import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ✅ Mount React app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found!");
createRoot(rootElement).render(<App />);

// ✅ Register Service Worker (for caching, PWA, and offline support)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swPath =
      process.env.NODE_ENV === "production"
        ? "/service-worker.js"
        : "/dev-sw.js?dev-sw"; // avoids errors in dev mode

    navigator.serviceWorker
      .register(swPath, { scope: "/" })
      .then((registration) => {
        console.log("✅ Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("❌ Service Worker registration failed:", error);
      });
  });
}
