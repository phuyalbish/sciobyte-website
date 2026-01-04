import  { useState, useEffect, useRef } from "react";

const GRID_SPACING = 30;

export default function HoverableGrid() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(0);
  const [hoverX, setHoverX] = useState(null);
  const [hoverY, setHoverY] = useState(null);
  const [tiltStyle, setTiltStyle] = useState({});

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

    // Tilt effect logic
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      // Max tilt angles
      const maxTilt = 10; // degrees
      const rotateY = (-offsetX / rect.width) * maxTilt;
      const rotateX = (offsetY / rect.height) * maxTilt;

      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease",
      });
    }
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `rotateX(0deg) rotateY(0deg)`,
      transition: "transform 0.5s ease",
    });
    setHoverX(null);
    setHoverY(null);
  };

  const verticalLines = [];
  const horizontalLines = [];

  for (let x = 0; x < width; x += GRID_SPACING) {
    const isHovered = x === hoverX;
    verticalLines.push(
      <div
        key={`v-${x}`}
        className={`absolute top-0 h-full w-px transition-colors border-1 border-white/50 duration-150 ${
          isHovered ? "bg-white/20" : "bg-white/10"
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
          isHovered ? "bg-white/20" : "bg-white/10"
        }`}
        style={{ top: `${y}px` }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-[90vw] h-[90vh] top-[2vh] border border-white/10 overflow-hidden  rounded-md"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      {verticalLines}
      {horizontalLines}
    </div>
  );
}
