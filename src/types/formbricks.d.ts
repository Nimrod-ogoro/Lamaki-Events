import { useEffect } from "react";
import formbricks from "@formbricks/js";

const useScrollTrigger = () => {
  useEffect(() => {
    const handleScroll = async () => {
      const scrollPercentage =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 50 && !sessionStorage.getItem("survey_triggered")) {
        sessionStorage.setItem("survey_triggered", "true");

        console.log("📍 User scrolled 50% — triggering Formbricks survey");
        await formbricks.track("scrolled_50_percent");

        // 👇 Trigger the survey (replace ID with yours)
        formbricks.startSurvey("your-survey-id");

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useScrollTrigger;


