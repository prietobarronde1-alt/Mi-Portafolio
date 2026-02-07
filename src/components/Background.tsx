
"use client";

import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-white dark:bg-zinc-950">
            {/* Subtle Grid Base */}
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {/* Flowing Lines SVG */}
            <svg
                className="absolute left-0 top-0 h-full w-full opacity-[0.4] dark:opacity-[0.6] pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 900"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Animated Data Path 1 (Top) - Fast Flow */}
                <motion.path
                    d="M-200 200 Q 360 0 720 200 T 1640 200"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    initial={{ strokeDasharray: "20 20", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -1000 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                {/* Animated Data Path 2 (Middle) - Medium Flow */}
                <motion.path
                    d="M-200 500 Q 360 800 1080 500 T 1640 400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    // Distinct dash pattern
                    initial={{ strokeDasharray: "15 15", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 1000 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />


                {/* Animated Data Path 3 (Bottom) - Slow & Wide Flow */}
                <motion.path
                    d="M-200 800 C 200 700 400 900 800 800 S 1400 700 1640 900"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    // Larger dashes for better visibility
                    initial={{ strokeDasharray: "30 30", strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -1000 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />

            </svg>

            {/* Floating Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] dark:bg-blue-900"
            ></motion.div>

            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, 100, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute right-10 bottom-10 -z-10 h-[250px] w-[250px] rounded-full bg-cyan-400 opacity-20 blur-[100px] dark:bg-cyan-900"
            ></motion.div>
        </div>
    );
}
