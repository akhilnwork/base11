const HoverCursor = ({ show, x, y, children }) => {
  if (!show) return null;
  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-200"
      style={{ left: x - 50, top: y - 50 }}
    >
      <div className="h-[100px] w-[100px] bg-white/10 rounded-full [backdrop-filter:blur(3.6px)] flex flex-col items-center justify-center text-base text-white font-poppins tracking-[-0.02em] leading-5 capitalize">
        {children}
      </div>
    </div>
  );
};

export default HoverCursor;
