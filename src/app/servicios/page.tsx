"use client";

import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import { SiWhatsapp } from "react-icons/si";
import { FaPaperPlane, FaCode, FaChartLine, FaCheck, FaStar, FaBolt, FaFingerprint, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimatedBackground } from "@/components/AnimatedBackground";

// Components
const SimpleHeader = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div></div>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <a
                    href="https://wa.me/5216642234345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors border border-zinc-300 dark:border-white/10 px-4 py-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5"
                >
                    Contacto Directo
                </a>
            </div>
        </div>
    </header>
);

const BentoCard = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`group relative overflow-hidden bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-white/5 rounded-3xl p-8 hover:border-zinc-300 dark:hover:border-white/10 hover:shadow-xl dark:hover:bg-zinc-800/50 transition-all duration-500 ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 h-full flex flex-col justify-between">
            {children}
        </div>
    </motion.div>
);

export default function ServicesPage() {
    return (
        <div className="min-h-screen font-sans selection:bg-pink-500/30 transition-colors duration-300">
            <AnimatedBackground />
            <SimpleHeader />

            <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-8 shadow-sm dark:shadow-none"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        DISPONIBILIDAD LIMITADA FEBRERO
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-8 text-zinc-900 dark:text-white">
                        DISEÑO QUE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:text-white dark:bg-none">CONVIERTE.</span>
                    </h1>

                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Tu perfil profesional no debería ser aburrido. <br className="hidden md:block" />
                        Transformo tu CV y Portafolio en una experiencia de alto impacto.
                    </p>
                </div>

                {/* Educational Introduction: The Real Value */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white leading-tight">
                                NO ES SOLO UN PAPEL. <br />
                                ES TU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">MARCA PERSONAL.</span>
                            </h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400">
                                La mayoría ve el CV como un trámite aburrido. <span className="font-bold text-zinc-900 dark:text-white">Gran error.</span>
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                                        <FaChartLine className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white">Multiplica tus Oportunidades</h4>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Un buen diseño incrementa un 40% las probabilidades de recibir una llamada.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                                        <FaBolt className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white">Autoridad Instantánea</h4>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Deja de perseguir reclutadores. Haz que ellos vean tu valor a primera vista.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">El Problema del 99%:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                        <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center text-xs">✕</span>
                                        Plantillas genéricas de Canva
                                    </li>
                                    <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                        <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center text-xs">✕</span>
                                        Información desordenada
                                    </li>
                                    <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                        <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center text-xs">✕</span>
                                        Sin palabras clave (ATS)
                                    </li>
                                </ul>
                                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-white/5 text-center">
                                    <p className="text-sm font-medium text-emerald-500">YO SOLUCIONO ESTO POR TI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Proof: Wall of Fame */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                            RESULTADOS REALES
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">No confíes en mi palabra, confía en mis clientes.</p>
                    </div>

                    <div className="columns-1 md:columns-3 gap-6 space-y-6">
                        {[
                            { text: "David, ¡quedó increíble! Al fin me siento segura enviando mi CV.", author: "Ana M.", role: "Marketing" },
                            { text: "Hermano, conseguí la entrevista en la empresa que quería. Gracias por el rediseño.", author: "Carlos R.", role: "Ingeniero" },
                            { text: "Valió cada centavo. Me encanta cómo se ve mi experiencia ahora.", author: "Lucía P.", role: "Diseñadora" },
                            { text: "Súper profesional y rápido. La versión en inglés quedó perfecta.", author: "Miguel A.", role: "Dev" },
                            { text: "Nunca creí que mi perfil pudiera verse así de 'Pro'. 100% recomendado.", author: "Sofia L.", role: "H.R." },
                            { text: "El formato editable es lo mejor, puedo actualizarlo yo misma.", author: "Elena G.", role: "Admin" }
                        ].map((testimonio, i) => (
                            <div key={i} className="break-inside-avoid bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-white/5 hover:border-purple-500/30 transition-colors">
                                <div className="flex gap-1 text-yellow-500 text-xs mb-3">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm italic">"{testimonio.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold">
                                        {testimonio.author[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-zinc-900 dark:text-white">{testimonio.author}</p>
                                        <p className="text-xs text-zinc-500">{testimonio.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Persuasion Section: The 6-Second Effect */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                            TIENES <span className="text-red-500">6 SEGUNDOS</span> PARA IMPRESIONAR.
                        </h2>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            Estudios de <span className="font-bold text-zinc-900 dark:text-white">Ladders, Inc.</span> revelan que ese es el tiempo promedio que un reclutador mira tu CV antes de decidir si seguir leyendo o descartarlo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                        {/* BEFORE: Boring CV */}
                        <div className="relative group opacity-70 hover:opacity-100 transition-opacity">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                                Promedio
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm h-[400px] overflow-hidden grayscale relative select-none">
                                <div className="w-full h-4 bg-zinc-200 mb-4"></div>
                                <div className="w-2/3 h-4 bg-zinc-200 mb-8"></div>
                                <div className="space-y-2">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                        <div key={i} className="w-full h-2 bg-zinc-100"></div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/10">
                                    <span className="text-4xl font-black text-zinc-400/50 -rotate-12">ABURRIDO</span>
                                </div>
                            </div>
                        </div>

                        {/* AFTER: Premium CV */}
                        <div className="relative group transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg z-10">
                                Tu Nuevo CV
                            </div>
                            <div className="bg-white dark:bg-zinc-900/90 p-1 rounded-2xl border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20 h-[420px] overflow-hidden relative">
                                <div className="h-full w-full bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 relative overflow-hidden flex flex-col">
                                    {/* Header Layout */}
                                    <div className="flex gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                                        <div className="flex-1 space-y-2 py-2">
                                            <div className="w-3/4 h-4 bg-zinc-800 dark:bg-white rounded"></div>
                                            <div className="w-1/2 h-3 bg-purple-500/50 rounded"></div>
                                        </div>
                                    </div>
                                    {/* Content Layout */}
                                    <div className="grid grid-cols-3 gap-4 flex-1">
                                        <div className="col-span-1 bg-zinc-100 dark:bg-white/5 rounded-lg p-2 space-y-2">
                                            <div className="w-full h-2 bg-zinc-300 dark:bg-white/10 rounded"></div>
                                            <div className="w-2/3 h-2 bg-zinc-300 dark:bg-white/10 rounded"></div>
                                            <div className="w-full h-2 bg-zinc-300 dark:bg-white/10 rounded"></div>
                                        </div>
                                        <div className="col-span-2 space-y-3">
                                            <div className="w-full h-20 bg-zinc-100 dark:bg-white/5 rounded-lg border-l-4 border-purple-500"></div>
                                            <div className="w-full h-20 bg-zinc-100 dark:bg-white/5 rounded-lg"></div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white dark:bg-zinc-800 px-3 py-1.5 rounded-full shadow-lg border border-zinc-100 dark:border-white/10 animate-bounce">
                                        <FaCheck className="text-emerald-500" />
                                        <span className="text-xs font-bold text-zinc-900 dark:text-white">CONTRATADO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* BASIC PLAN */}
                    <BentoCard className="min-h-[500px] flex flex-col items-center text-center border-zinc-200 dark:border-white/10" delay={0.1}>
                        <div className="mb-4 p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-500">
                            <FaPaperPlane className="text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Básico</h3>
                        <div className="text-4xl font-black text-zinc-900 dark:text-white mb-6">
                            $350 <span className="text-sm font-medium text-zinc-500">MXN</span>
                        </div>

                        <ul className="space-y-4 text-left w-full mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                <FaCheck className="text-zinc-400" /> 1 Idioma (Español)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                <FaCheck className="text-zinc-400" /> Estilo Estándar
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                <FaCheck className="text-zinc-400" /> 1 Ronda de Cambios
                            </li>
                            <li className="flex items-center gap-3 text-xs text-zinc-400 mt-4 pt-4 border-t border-zinc-100 dark:border-white/5">
                                * Incluye banner de publicidad discreto al final del documento.
                            </li>
                        </ul>

                        <a href="https://wa.me/5216642234345?text=Hola,%20me%20interesa%20el%20Plan%20Básico%20de%20CV." target="_blank" className="w-full py-3 rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-bold hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                            Elegir Básico
                        </a>
                    </BentoCard>

                    {/* PLUS PLAN (Highlighted) */}
                    <BentoCard className="min-h-[500px] flex flex-col items-center text-center border-purple-500/50 dark:border-purple-500/50 bg-purple-50/50 dark:bg-purple-900/10 shadow-2xl relative" delay={0.2}>
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            <FaBolt className="text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Plus</h3>
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
                            $500 <span className="text-sm font-medium text-zinc-500">MXN</span>
                        </div>

                        <ul className="space-y-4 text-left w-full mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-zinc-900 dark:text-white font-medium">
                                <FaCheck className="text-purple-500" /> 2 Idiomas (Esp/Ing)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-900 dark:text-white font-medium">
                                <FaCheck className="text-purple-500" /> Plantilla Personalizada
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-900 dark:text-white font-medium">
                                <FaCheck className="text-purple-500" /> 2 Rondas de Cambios
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-900 dark:text-white font-medium">
                                <FaCheck className="text-purple-500" /> Sin Marca de Agua
                            </li>
                        </ul>

                        <a href="https://wa.me/5216642234345?text=Hola,%20me%20interesa%20el%20Plan%20Plus%20de%20CV." target="_blank" className="w-full py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:scale-105 transition-transform shadow-lg">
                            Elegir Plus
                        </a>
                    </BentoCard>

                    {/* PRO PLAN */}
                    <BentoCard className="min-h-[500px] flex flex-col items-center text-center border-zinc-200 dark:border-white/10" delay={0.3}>
                        <div className="mb-4 p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-emerald-500">
                            <FaStar className="text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Pro</h3>
                        <div className="text-4xl font-black text-zinc-900 dark:text-white mb-6">
                            $900 <span className="text-sm font-medium text-zinc-500">MXN</span>
                        </div>

                        <ul className="space-y-4 text-left w-full mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                <FaCheck className="text-emerald-500" /> 3 Idiomas
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                <FaCheck className="text-emerald-500" /> Diseño 100% Único
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                <FaCheck className="text-emerald-500" /> 5 Rondas de Cambios
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                <FaCheck className="text-emerald-500" /> Entrega Prioritaria
                            </li>
                        </ul>

                        <a href="https://wa.me/5216642234345?text=Hola,%20me%20interesa%20el%20Plan%20Pro%20de%20CV." target="_blank" className="w-full py-3 rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-bold hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                            Elegir Pro
                        </a>
                    </BentoCard>

                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8">
                        ¿LISTO PARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">ASCENDER?</span>
                    </h2>
                    <a
                        href="https://wa.me/5216642234345?text=Hola%20David,%20me%20interesa%20trabajar%20contigo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-full font-bold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        <SiWhatsapp className="w-5 h-5" />
                        INICIAR CONVERSACIÓN
                        <FaBolt className="w-4 h-4 text-yellow-400 dark:text-yellow-500 group-hover:animate-pulse" />
                    </a>
                </motion.div>
            </main>
        </div>
    );
}
