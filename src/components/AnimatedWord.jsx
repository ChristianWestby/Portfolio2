import { useEffect, useState } from "react";

export default function AnimatedWord({ word, delay = 150 }) {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < word.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [word, delay]);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest">
      {word.split("").map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 ${
            index < visibleLetters ? "opacity-100" : "opacity-0"
          }`}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}