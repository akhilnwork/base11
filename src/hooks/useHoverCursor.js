import { useCallback, useState } from "react";

const useHoverCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setShowCursor(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowCursor(false);
  }, []);

  return {
    cursorPosition,
    showCursor,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHoverCursor;
