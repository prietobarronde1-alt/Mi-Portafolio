import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import { SiWhatsapp } from "react-icons/si";
import { FaPaperPlane, FaCode, FaChartLine, FaCheck, FaStar, FaBolt, FaFingerprint } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

// Components
const SimpleHeader = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-end">
            {/* Contact Button */}
            <a
                href="https://wa.me/5216642234345"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
            >
                Contacto Directo
            </a>
        </div>
    </header>
);

const BentoCard = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`group relative overflow-hidden bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-white/10 hover:bg-zinc-800/50 transition-all duration-500 ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 h-full flex flex-col justify-between">
            {children}
        </div>
    </motion.div>
);

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-pink-500/30">
            <SimpleHeader />

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        DISPONIBILIDAD LIMITADA FEBRERO
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        DISEÑO QUE <br />
                        <span className="text-white">CONVIERTE.</span>
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Tu perfil profesional no debería ser aburrido. <br className="hidden md:block" />
                        Transformo tu CV y Portafolio en una experiencia de alto impacto.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[minmax(0,1fr)]">

                    {/* Card 1: Main Value Prop - CV */}
                    <BentoCard className="md:col-span-2 md:row-span-1 min-h-[300px]" delay={0.1}>
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                                <FaPaperPlane />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">CV de Alto Impacto</h3>
                            <p className="text-zinc-400">Diseño estratégico optimizado para ATS. No es solo un documento, es tu pase a la entrevista.</p>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                            <ul className="flex gap-4 text-xs text-zinc-500 font-mono">
                                <li>PDF + EDITABLE</li>
                                <li>REDACCIÓN PERSUASIVA</li>
                            </ul>
                            <span className="text-xl font-bold text-white">$50 USD</span>
                        </div>
                    </BentoCard>

                    {/* Card 2: Web Portfolio - Tall */}
                    <BentoCard className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-zinc-900/80 to-black border-purple-500/20" delay={0.2}>
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                                <FaCode />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Portafolio Web</h3>
                            <p className="text-zinc-400 text-sm mb-6">Diferénciate del 99% de los candidatos con un sitio web personal interactivo.</p>

                            <div className="space-y-3">
                                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/5 text-xs text-zinc-300">
                                    <FaCheck className="inline mr-2 text-purple-400" /> Dominio Propio (.com)
                                </div>
                                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/5 text-xs text-zinc-300">
                                    <FaCheck className="inline mr-2 text-purple-400" /> Diseño Único
                                </div>
                                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/5 text-xs text-zinc-300">
                                    <FaCheck className="inline mr-2 text-purple-400" /> Modo Oscuro/Claro
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <p className="text-xs text-center text-zinc-500 mb-2">INVERSIÓN DESDE</p>
                            <div className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                $200 USD
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 3: Social Proof */}
                    <BentoCard className="md:col-span-1 min-h-[250px]" delay={0.3}>
                        <div className="flex flex-col h-full items-center justify-center text-center">
                            <div className="flex -space-x-2 mb-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">
                                        User
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg font-medium text-white">"Conseguí empleo en 2 semanas"</p>
                            <p className="text-sm text-zinc-500 mt-1">- Fernanda Ruiz</p>
                            <div className="flex gap-1 mt-3 text-yellow-500 text-xs">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 4: LinkedIn */}
                    <BentoCard className="md:col-span-1 bg-zinc-900" delay={0.4}>
                        <FaFingerprint className="text-4xl text-emerald-500 mb-6 opacity-80" />
                        <h3 className="text-2xl font-bold text-white">LinkedIn Makeover</h3>
                        <p className="text-sm text-zinc-400 mt-2">Optimización de perfil para aparecer en búsquedas.</p>
                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="text-xs text-emerald-400 font-mono">RANKING #1</span>
                            <span className="font-bold text-white">$40 USD</span>
                        </div>
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
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                        ¿LISTO PARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ASCENDER?</span>
                    </h2>
                    <a
                        href="https://wa.me/5216642234345?text=Hola%20David,%20me%20interesa%20trabajar%20contigo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                    >
                        <SiWhatsapp className="w-5 h-5" />
                        INICIAR CONVERSACIÓN
                        <FaBolt className="w-4 h-4 text-yellow-500 group-hover:animate-pulse" />
                    </a>
                </motion.div>
            </main>
        </div>
    );
}
