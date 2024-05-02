"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const AnimateLogo = () => {
  const [rotationCount, setRotationCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (rotationCount === 3) {
      setIsAnimating(false);
      setTimeout(() => {
        setRotationCount(0);
        setIsAnimating(true);
      }, 1000); // Pausa por 1 segundo
    }
  }, [rotationCount]);
  return (
    <div className="flex justify-center w-h-24 h-24 relative overflow-hidden">
      <Image
        className={`absolute ${isAnimating ? "animate-spin" : ""}`}
        style={{ animationDuration: `${(3 - rotationCount) * 100}s` }}
        onAnimationIteration={() => setRotationCount(rotationCount + 1)}
        src="/assets/images/about/logoumbrella.png"
        alt="Blue Umbrella Tech logo"
        width="80"
        height="80"
      />
    </div>
  );
};

export default AnimateLogo;
