import { useEffect } from "react";
import formbricks from "@formbricks/js";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

/* -------------------------------------------------------------- */
/* ✅ Initialize Formbricks (async-safe)                          */
/* -------------------------------------------------------------- */
const useFormbricks = () => {
  useEffect(() => {
    const initFormbricks = async () => {
      try {
        await formbricks.init({
          environmentId: import.meta.env.VITE_FORMBRICKS_ENVIRONMENT_ID!,
          apiHost: import.meta.env.VITE_FORMBRICKS_API_HOST!,
        });
        console.log("✅ Formbricks initialized successfully");

        // ✅ Track after successful initialization
        formbricks.track("app_started", {
          hiddenFields: { status: "initialized" },
        });

        // ✅ Optionally auto-launch a form popup
        // Replace "feedback-form" with your actual form ID from Formbricks
        // setTimeout(() => formbricks.startForm("feedback-form"), 5000);
      } catch (error) {
        console.error("❌ Formbricks initialization failed:", error);
      }
    };

    initFormbricks();
  }, []);
};

/* -------------------------------------------------------------- */
/* ✅ Track Route Changes AFTER Formbricks Initialization          */
/* -------------------------------------------------------------- */
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        await formbricks.track("page_view", {
          hiddenFields: { path: location.pathname },
        });
        console.log("📍 Tracked page view:", location.pathname);
      } catch (error) {
        console.warn("⚠️ Formbricks not ready yet, event queued");
      }
    };

    trackPageView();
  }, [location]);
};

/* -------------------------------------------------------------- */
/* ✅ Internal Router Component                                   */
/* -------------------------------------------------------------- */
const AppContent = () => {
  useFormbricks();
  usePageTracking();

  // Optional: manually trigger form popup
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     formbricks.startForm("your-form-id-here");
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

/* -------------------------------------------------------------- */
/* ✅ Main App Component                                          */
/* -------------------------------------------------------------- */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;



