import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Mount app
createRoot(document.getElementById("root")!).render(<App />);

// ✅ Register Service Worker (for caching, PWA, and offline support)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then((registration) => {
        console.log("✅ Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("❌ Service Worker registration failed:", error);
      });
  });
}

