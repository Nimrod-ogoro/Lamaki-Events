import { useEffect } from "react";
import formbricks from "@formbricks/js";
import useScrollTrigger from "@/hooks/userScrollTracking";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reviews from "@/components/Review";

const Index = () => {
  useEffect(() => {
    const initFormbricks = async () => {
      try {
        await formbricks.init({
          environmentId: import.meta.env.VITE_FORMBRICKS_ENVIRONMENT_ID!,
          apiHost: import.meta.env.VITE_FORMBRICKS_API_HOST!,
        });
        console.log("✅ Formbricks initialized");

        await formbricks.track("app_started", {
          hiddenFields: { status: "initialized" },
        });
      } catch (error) {
        console.error("❌ Formbricks init failed:", error);
      }
    };

    initFormbricks();
  }, []);

  // 👇 call your scroll trigger hook
  useScrollTrigger();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Reviews />
        <Contact />
        <WhatsAppFloat />
      </main>
      <Footer />
    </div>
  );
};

export default Index;




