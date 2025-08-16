"use client"
import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function calcScrollHeight(containerWidth, trackWidth, viewportHeight) {
  const extra = Math.max(0, trackWidth - containerWidth);
  return extra + viewportHeight;
}

export default function HorizontalPinSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [dims, setDims] = useState({ container: 0, track: 0, viewport: 0, scrollH: 0 });

  useLayoutEffect(() => {
    const update = () => {
      const containerWidth = sectionRef.current?.clientWidth || 0;
      const trackWidth = trackRef.current?.scrollWidth || 0;
      const viewportHeight = window.innerHeight;
      const scrollH = calcScrollHeight(containerWidth, trackWidth, viewportHeight);
      setDims({ container: containerWidth, track: trackWidth, viewport: viewportHeight, scrollH });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const extra = Math.max(0, dims.track - dims.container);
  const x = useTransform(scrollYProgress, [0, 1], [0, -extra]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: `${Math.max(dims.scrollH, dims.viewport || 1)}px`,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#0b0b0c",
        }}
      >
        <motion.div
          ref={trackRef}
          style={{
            x,
            height: "100%",
            display: "flex",
            willChange: "transform",
          }}
        >
          <Panel color="#111827" title="Panel 1" />
          <Panel color="#1f2937" title="Panel 2" />
          <Panel color="#374151" title="Panel 3" />
          <Panel color="#4b5563" title="Panel 4" />
          <Panel color="#6b7280" title="Panel 5" />
        </motion.div>
      </div>
    </section>
  );
}

function Panel({ color, title }) {
  return (
    <div
      style={{
        minWidth: "100vw",
        height: "100vh",
        background: color,
        display: "grid",
        placeItems: "center",
        color: "white",
        fontSize: "48px",
        fontWeight: 700,
      }}
    >
      {title}
    </div>
  );
}
