// Wall.tsx
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    formbricks?: {
      renderWall: (opts: {
        environmentId: string;
        apiHost: string;
        containerId: string;
      }) => void;
    };
  }
}

export default function ReviewsWall(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. load the wall bundle
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@formbricks/js@latest/dist/wall.es.js";
    script.type = "module";

    script.onload = () => {
      if (window.formbricks?.renderWall && containerRef.current) {
        window.formbricks.renderWall({
          environmentId: "cmgg8xfn53b9dvm01frqkz7ld",
          apiHost: "https://app.formbricks.com",
          containerId: containerRef.current.id,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="fb-wall"
      ref={containerRef}
      style={{ minHeight: 600 }} /* optional loader space */
    />
  );
}