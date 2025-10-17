import { useEffect } from "react";
import formbricks from "@formbricks/js";

const useScrollTracking = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 50) {
        formbricks.track("scrolled_50_percent"); // <-- dashboard action will trigger survey
        console.log("📍 User scrolled 50% of the page");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useScrollTracking;

