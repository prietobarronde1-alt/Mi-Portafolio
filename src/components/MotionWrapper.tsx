
"use client";

import { motion } from "framer-motion";

interface MotionWrapperProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export default function MotionWrapper({ children, delay = 0, className = "" }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
