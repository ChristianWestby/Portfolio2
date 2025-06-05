import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedWord from "../components/AnimatedWord";

export default function Intro() {
  const [showSecondWord, setShowSecondWord] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const word2Timer = setTimeout(() => setShowSecondWord(true), 2500);
    const redirectTimer = setTimeout(() => navigate("/home"), 6000);

    return () => {
      clearTimeout(word2Timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white space-y-8">
      <AnimatedWord word="Christian" />
      {showSecondWord && <AnimatedWord word="Frontend" delay={100} />}
    </div>
  );
}