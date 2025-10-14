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
/* ✅ Initialize Formbricks                                       */
/* -------------------------------------------------------------- */
const useFormbricks = () => {
  useEffect(() => {
    try {
      formbricks.init({
        environmentId: import.meta.env.VITE_FORMBRICKS_ENVIRONMENT_ID!,
        apiHost: import.meta.env.VITE_FORMBRICKS_API_HOST!,
      });
      console.log("✅ Formbricks initialized successfully");

      // Optional startup event
      formbricks.track("app_started", {
        hiddenFields: { status: "initialized" },
      });
    } catch (error) {
      console.error("❌ Formbricks initialization failed:", error);
    }
  }, []);
};

/* -------------------------------------------------------------- */
/* ✅ Strongly Typed Track Helper                                 */
/* -------------------------------------------------------------- */
const trackEvent = (
  eventName: string,
  hiddenFields: Record<string | number, string | number | string[]> = {}
) => {
  try {
    formbricks.track(eventName, { hiddenFields });
  } catch (err) {
    console.warn("⚠️ Formbricks track failed:", err);
  }
};

/* -------------------------------------------------------------- */
/* ✅ Track Route Changes                                         */
/* -------------------------------------------------------------- */
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Wrap the path in `hiddenFields` to match the SDK typing
    trackEvent("page_view", { path: location.pathname });
    console.log("📍 Tracked page view:", location.pathname);
  }, [location]);
};

/* -------------------------------------------------------------- */
/* ✅ Internal Router Component                                   */
/* -------------------------------------------------------------- */
const AppContent = () => {
  useFormbricks();
  usePageTracking();

  // Optional: auto-show a form after 10 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     formbricks.startForm("feedback-form");
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


