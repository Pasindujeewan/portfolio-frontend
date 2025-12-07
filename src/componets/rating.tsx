import { useState } from "react";
export function Rating({ stars }: { stars: number }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [rated, setRated] = useState(0);
  const starArray = Array.from({ length: stars }, (_, i) => i + 1);
  return (
    <div className="flex">
      {starArray.map((star) => (
        <span
          key={star}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setRated(star)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={(hovered ?? rated) >= star ? "currentColor" : "none"}
            stroke="currentColor"
            className="w-4 h-4 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
