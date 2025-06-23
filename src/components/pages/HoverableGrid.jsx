import React, { useState, useEffect, useRef } from "react";

const GRID_SPACING = 30;

export default function HoverableGrid() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(0);
  const [hoverX, setHoverX] = useState(null);
  const [hoverY, setHoverY] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (containerRef.current) {
        setHeight(containerRef.current.offsetHeight);
      }
    };

    handleResize(); // initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const x = Math.round(e.pageX / GRID_SPACING) * GRID_SPACING;
    const y = Math.round(e.pageY / GRID_SPACING) * GRID_SPACING;
    setHoverX(x);
    setHoverY(y);
  };

  const verticalLines = [];
  const horizontalLines = [];

  for (let x = 0; x < width; x += GRID_SPACING) {
    const isHovered = x === hoverX;
    verticalLines.push(
      <div
        key={`v-${x}`}
        className={`absolute top-0 h-full w-px transition-colors border-1 border-white/50 duration-150 ${
          isHovered ? "bg-white/10" : "bg-white/5"
        }`}
        style={{ left: `${x}px` }}
      />
    );
  }

  for (let y = 0; y <= height; y += GRID_SPACING) {
    const isHovered = y === hoverY;
    horizontalLines.push(
      <div
        key={`h-${y}`}
        className={`absolute left-0 w-full h-px transition-colors border-1 border-white/50 duration-150 ${
          isHovered ? "bg-white/10" : "bg-white/5"
        }`}
        style={{ top: `${y}px` }}
      />
    );
  }

  return (
    <div
    ref={containerRef}
    className="relative w-full h-[200vh] overflow-hidden"
    onMouseMove={handleMouseMove}

  >
      {verticalLines}
      {horizontalLines}
      </div>
  );
}