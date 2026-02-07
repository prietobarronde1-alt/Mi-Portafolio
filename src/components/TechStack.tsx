
"use client";

import { techStackData } from '@/data';
import MotionWrapper from './MotionWrapper';
import { motion } from 'framer-motion';

export default function TechStack() {
    // Split data into two rows dynamically
    const half = Math.ceil(techStackData.length / 2);
    const row1 = techStackData.slice(0, half);
    const row2 = techStackData.slice(half);

    return (
        <section id="stack" className="w-full py-24 overflow-hidden">
            <div className="max-w-[100vw] mx-auto">
                <MotionWrapper>
                    <h2 className="text-2xl font-bold mb-12 text-center text-zinc-400 uppercase tracking-widest text-sm">Mi Arsenal Tecnológico</h2>
                </MotionWrapper>

                <div className="flex flex-col gap-8">
                    {/* Row 1 - Moving Left (Slower: speed 100) */}
                    <MarqueeRow items={row1} direction="left" speed={100} />

                    {/* Row 2 - Moving Right (Slower: speed 100) */}
                    <MarqueeRow items={row2} direction="right" speed={100} />
                </div>
            </div>
        </section>
    );
}

function MarqueeRow({ items, direction, speed }: { items: typeof techStackData, direction: "left" | "right", speed: number }) {
    // Duplicate items to ensure seamless loop (4 sets should be enough for most screens)
    const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

    return (
        <div
            className="relative flex overflow-hidden"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
        >

            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex gap-4 flex-shrink-0 px-2"
            >
                {duplicatedItems.map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        className="flex flex-row items-center gap-3 px-6 py-3 bg-white/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm group hover:border-blue-500/50 transition-colors w-60"
                    >
                        <tech.icon className="w-8 h-8 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors shrink-0" />
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-sm whitespace-nowrap">{tech.name}</span>
                            <span className="text-xs text-zinc-400">{tech.cat}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
