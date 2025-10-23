import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-50 transition-transform duration-100"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CursorFollower;
