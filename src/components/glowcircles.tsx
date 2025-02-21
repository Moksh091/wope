"use client";
import React, { useState, useEffect } from "react";

const GrayTwinklingCircles = () => {
  const [circles, setCircles] = useState<any>([]);

  // Create initial circles
  useEffect(() => {
    const initialCircles: any = Array.from({ length: 30 }, () => {
      // Generate grayscale colors with slight variations
      const grayValue = Math.floor(Math.random() * 100 + 155); // Values between 155-255 (light to mid grays)
      const grayColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;

      return {
        id: Math.random().toString(36).substr(2, 9),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.009,
        speedY: (Math.random() - 0.5) * 0.009,
        twinkleSpeed: Math.random() * 0.02 + 0.0001,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        color: grayColor,
      };
    });

    setCircles(initialCircles);
  }, []);

  // Animation loop
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          // Update position
          let newX = circle.x + circle.speedX;
          let newY = circle.y + circle.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            circle.speedX *= -1;
            newX = circle.x + circle.speedX;
          }
          if (newY <= 0 || newY >= 100) {
            circle.speedY *= -1;
            newY = circle.y + circle.speedY;
          }

          // Update opacity (twinkling)
          let newOpacity =
            circle.opacity + circle.twinkleSpeed * circle.twinkleDirection;
          if (newOpacity >= 0.8 || newOpacity <= 0.2) {
            circle.twinkleDirection *= -1;
            newOpacity =
              circle.opacity + circle.twinkleSpeed * circle.twinkleDirection;
          }

          return {
            ...circle,
            x: newX,
            y: newY,
            opacity: newOpacity,
          };
        })
      );

      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative w-[calc(100%-20vw)] h-[calc(100vh-40vh)] bg-transparent overflow-hidden ">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full transition-transform"
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              backgroundColor: circle.color,
              opacity: circle.opacity,
              boxShadow: `0 0 ${circle.size * 2}px ${circle.color}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GrayTwinklingCircles;
