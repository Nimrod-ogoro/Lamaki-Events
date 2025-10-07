// StaticWall.tsx
import { useEffect, useState } from "react";

type R = { author: string; rating: number; text: string };

export default function StaticWall() {
  const [list, setList] = useState<R[]>([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((r) => r.json())
      .then(setList);
  }, []);

  return (
    <ul className="space-y-4">
      {list.map((r, i) => (
        <li
          key={i}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="mb-1 font-semibold text-slate-800">{r.author}</div>
          <div className="mb-2 text-amber-400">{"★".repeat(r.rating)}</div>
          <p className="text-slate-600">{r.text}</p>
        </li>
      ))}
    </ul>
  );
}