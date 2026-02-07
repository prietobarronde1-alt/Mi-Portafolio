"use client";

import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Dark Mode Background Base */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500"></div>

            {/* Blob 1: Purple/Pink */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/30 dark:bg-purple-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Blob 2: Blue/Cyan */}
            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 50, -100, 0],
                    scale: [1, 1.1, 0.8, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/30 dark:bg-blue-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Blob 3: Emerald/Teal (Accent) */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 1.3, 1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-20%] left-[20%] w-[45%] h-[45%] rounded-full bg-emerald-300/30 dark:bg-emerald-900/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
            />
        </div>
    );
};
