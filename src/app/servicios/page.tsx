
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import { SiWhatsapp, SiLinkedin } from "react-icons/si";
import { FaPaperPlane, FaCode, FaChartLine, FaCheck } from "react-icons/fa";

export default function ServicesPage() {
    const services = [
        {
            icon: FaPaperPlane,
            title: "Diseño de CV de Alto Impacto",
            description: "Tu currículum no es un historial, es una herramienta de venta. Diseño documentos optimizados para ATS y visualmente impactantes que capturan la atención de los reclutadores en 6 segundos.",
            features: ["Diagnóstico de perfil", "Redacción persuasiva", "Diseño moderno (PDF + Editable)", "Optimización de palabras clave ATS"],
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            price: "Desde $50 USD"
        },
        {
            icon: FaCode,
            title: "Portafolio Web Profesional",
            description: "Diferénciate del 99% de los candidatos con un sitio web personal. Muestra tus proyectos, experiencia y marca personal con una plataforma interactiva como esta o la de Fernanda.",
            features: ["Dominio personalizado (.com/.dev)", "Diseño único (No plantillas genéricas)", "Optimización móvil y SEO", "Integración con WhatsApp"],
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            price: "Cotización Personalizada"
        },
        {
            icon: FaChartLine,
            title: "Optimización de LinkedIn",
            description: "Tu perfil de LinkedIn es tu landing page personal 24/7. Transformo tu perfil para que aparezcas en las búsquedas de los reclutadores y transmitas autoridad.",
            features: ["Banner y titular estratégico", "Redacción de 'Acerca de'", "Estrategia de contenido básica", "Configuración de aptitudes"],
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            price: "Desde $40 USD"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
            <Navbar />

            <main className="flex-grow pt-24 pb-20 px-6">
                <div className="max-w-6xl mx-auto space-y-24">

                    {/* Hero Section */}
                    <section className="text-center space-y-8 relative">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full pointer-events-none -z-10"></div>

                        <MotionWrapper>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-6">
                                🚀 Potencia tu Carrera Profesional
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                                Deja de ser ignorado por <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                    los reclutadores.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                Ayudo a profesionales a destacar con CVs estratégicos, Portafolios Web y Perfiles de LinkedIn que <strong>sí generan entrevistas</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                                <a
                                    href="https://wa.me/5216642234345?text=Hola%20David,%20quiero%20mejorar%20mi%20perfil%20profesional.%20Me%20interesa%20información%20sobre..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                                >
                                    <SiWhatsapp className="w-5 h-5" />
                                    Agenda tu Asesoría Gratis
                                </a>
                                <a
                                    href="#servicios"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium py-4 px-8 rounded-full transition-all"
                                >
                                    Ver Servicios
                                </a>
                            </div>
                        </MotionWrapper>
                    </section>

                    {/* Social Proof Divider */}
                    <section className="border-y border-zinc-100 dark:border-zinc-900 py-10 bg-zinc-50/50 dark:bg-zinc-900/20">
                        <div className="text-center">
                            <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Casos de Éxito Recientes</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Logos placeholder or text representing success */}
                                <span className="text-xl font-bold font-serif text-zinc-400">Fernanda Ruiz</span>
                                <span className="text-xl font-bold font-serif text-zinc-400">Grupo Caliente</span>
                                <span className="text-xl font-bold font-serif text-zinc-400">IZZI Telecom</span>
                                <span className="text-xl font-bold font-serif text-zinc-400">MDY Contact Center</span>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section id="servicios" className="scroll-mt-24">
                        <MotionWrapper delay={0.2}>
                            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-zinc-900 dark:text-zinc-100">
                                Soluciones a tu Medida
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {services.map((service, idx) => (
                                    <div key={idx} className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                                        <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                            <service.icon />
                                        </div>
                                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{service.title}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                                                    <FaCheck className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                                            <span className="text-sm font-medium text-zinc-400">Inversión estimada:</span>
                                            <span className={`text-lg font-bold ${service.color}`}>{service.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </MotionWrapper>
                    </section>

                    {/* Final CTA */}
                    <section className="bg-zinc-900 dark:bg-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/20 dark:bg-slate-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700/20 dark:bg-blue-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <MotionWrapper>
                            <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-zinc-900 mb-6">
                                ¿Listo para dar el siguiente paso?
                            </h2>
                            <p className="text-lg text-zinc-300 dark:text-zinc-600 mb-10 max-w-2xl mx-auto">
                                No dejes que un mal CV te cierre puertas. Escríbeme y analicemos tu perfil sin compromiso.
                            </p>
                            <a
                                href="https://wa.me/5216642234345?text=Hola%20David,%20estoy%20listo%20para%20trabajar%20en%20mi%20perfil.%20¿Podemos%20hablar?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold py-4 px-10 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all transform hover:scale-105"
                            >
                                <SiWhatsapp className="w-5 h-5" />
                                Enviar Mensaje
                            </a>
                        </MotionWrapper>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
}
