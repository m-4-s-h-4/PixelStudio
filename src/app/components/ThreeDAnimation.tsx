"use client";

import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const ThreeDAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/yiggVm2byMjtOQ7D/scene.splinecode");
    }
  }, []);

  return (
    <canvas
      id="canvas2d"
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
      }}
    ></canvas>
  );
};

export default ThreeDAnimation;
