
"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX } from 'lucide-react';
import { heroData } from '@/data';
import MotionWrapper from './MotionWrapper';

export default function Hero() {
    const [showIntro, setShowIntro] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleAudio = () => {
        // Si ya pasó la intro (estamos en loop), reiniciar intro con sonido
        if (!showIntro) {
            setIsMuted(false);
            setShowIntro(true);
            return;
        }

        if (videoRef.current) {
            // Si estamos en intro y activamos sonido, reiniciar para no perderse el saludo
            if (isMuted) {
                videoRef.current.currentTime = 0;
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 pt-20">
            <MotionWrapper className="flex-1 space-y-8 z-10 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                    {heroData.location}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                    {heroData.title}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        {heroData.highlight}
                    </span>
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                    {heroData.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <Link
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-1 block text-center"
                    >
                        {heroData.buttons.primary}
                    </Link>
                    <Link
                        href="/resume"
                        className="px-8 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 text-zinc-900 dark:text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1 block text-center group"
                    >
                        {heroData.buttons.secondary} <span className="group-hover:text-blue-500 transition-colors">→</span>
                    </Link>
                    <a
                        href="/CV_David_Prieto.pdf"
                        download
                        className="px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 font-medium transition-all block text-center"
                    >
                        {heroData.buttons.download}
                    </a>
                </div>
            </MotionWrapper>

            {/* Hero Visual */}
            <MotionWrapper delay={0.2} className="flex-1 flex justify-center items-center relative mt-12 md:mt-0">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute inset-0 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 bg-zinc-100 dark:bg-zinc-800 group">
                        {showIntro ? (
                            <video
                                ref={videoRef}
                                src="/profile_intro.mp4"
                                autoPlay
                                muted={isMuted}
                                playsInline
                                className="object-cover w-full h-full"
                                onEnded={() => {
                                    setShowIntro(false);
                                    setIsMuted(true);
                                }}
                            />
                        ) : (
                            <video
                                src="/profile_loop.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="object-cover w-full h-full"
                            />
                        )}
                        <button
                            onClick={toggleAudio}
                            className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                            aria-label={isMuted ? "Activar sonido y reiniciar" : "Silenciar"}
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                    </div>
                </div>
            </MotionWrapper>
        </section>
    );
}
