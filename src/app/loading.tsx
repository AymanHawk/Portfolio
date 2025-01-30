// loading.tsx
"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function SvgPathLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      animate(
        [
          [".h1", { pathLength: 0.5, pathOffset: 0 }],
          [".h1", { pathLength: 0.005, pathOffset: 0 }],
          [".h2", { pathLength: 0.5, pathOffset: 0.5 }, { at: "<" }],
        ],
        { duration: 2, ease: "linear", repeat: Infinity }
      );
      animate(
        [
          [".a1", { pathLength: 0.5, pathOffset: 0 }],
          [".a1", { pathLength: 0.005, pathOffset: 0 }],
          [".a2", { pathLength: 0.5, pathOffset: 0.5 }, { at: "<" }],
        ],
        { duration: 2, ease: "linear", repeat: Infinity }
      );
      animate(
        [
          [".w1", { pathLength: 0.5, pathOffset: 0 }],
          [".w1", { pathLength: 0.005, pathOffset: 0 }],
          [".w2", { pathLength: 0.5, pathOffset: 0.5 }, { at: "<" }],
        ],
        { duration: 2, ease: "linear", repeat: Infinity }
      );
      animate(
        [
          [".k1", { pathLength: 0.5, pathOffset: 0 }],
          [".k1", { pathLength: 0.005, pathOffset: 0 }],
          [".k2", { pathLength: 0.5, pathOffset: 0.5 }, { at: "<" }],
        ],
        { duration: 2, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, []);

  return (
    <svg
      ref={scope}
      width="100mm"
      height="40mm"
      viewBox="0 0 100 40"
    >
      {/* H */}
      <motion.path
        className="h1"
        initial={{ pathLength: 0.5, pathOffset: 0.5 }}
        d="M 10,5 V 35 M 10,20 H 20 M 20,5 V 35"
      />
      <motion.path
        className="h2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M 10,5 V 35 M 10,20 H 20 M 20,5 V 35"
      />

      {/* A */}
      <motion.path
        className="a1"
        initial={{ pathLength: 0.5, pathOffset: 0.5 }}
        d="M 30,35 L 40,5 L 50,35 M 35,25 H 45"
      />
      <motion.path
        className="a2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M 30,35 L 40,5 L 50,35 M 35,25 H 45"
      />

      {/* W */}
      <motion.path
        className="w1"
        initial={{ pathLength: 0.5, pathOffset: 0.5 }}
        d="M 60,5 V 35 L 70,20 L 80,35 V 5"
      />
      <motion.path
        className="w2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M 60,5 V 35 L 70,20 L 80,35 V 5"
      />

      {/* K */}
      <motion.path
        className="k1"
        initial={{ pathLength: 0.5, pathOffset: 0.5 }}
        d="M 90,5 V 35 M 90,20 L 100,5 M 90,20 L 100,35"
      />
      <motion.path
        className="k2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M 90,5 V 35 M 90,20 L 100,5 M 90,20 L 100,35"
      />
    </svg>
  );
}
