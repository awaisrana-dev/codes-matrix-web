import React from "react";
import { motion } from "motion/react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Abstract Geometric X / Matrix Pattern */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Blue Lines */}
            <path
              d="M20 20 L50 40 L80 20 M20 80 L50 60 L80 80 M40 50 L60 50"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Yellow accent lines */}
            <path
              d="M30 30 L50 50 L70 30 M30 70 L50 50 L70 70"
              fill="none"
              stroke="#facc15"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="4 2"
            />
            {/* Nodes */}
            {[
              { x: 20, y: 20, c: "#60a5fa" },
              { x: 80, y: 20, c: "#60a5fa" },
              { x: 20, y: 80, c: "#60a5fa" },
              { x: 80, y: 80, c: "#60a5fa" },
              { x: 50, y: 40, c: "#facc15" },
              { x: 50, y: 60, c: "#facc15" },
              { x: 50, y: 50, c: "#fff" },
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x}
                cy={node.y}
                r="2"
                fill={node.c}
                animate={{
                  r: [2, 3, 2],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.g>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black text-white tracking-tighter uppercase font-mono">
          CODES<span className="text-blue-500">MATRIX</span>
        </span>
        <span className="text-[8px] font-bold text-white/40 tracking-[0.3em] ml-0.5">
          SINCE 2026
        </span>
      </div>
    </div>
  );
};

export default Logo;
