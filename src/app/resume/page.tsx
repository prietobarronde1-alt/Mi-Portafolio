"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ResumePage() {
    const [showHuman, setShowHuman] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-6 px-6 md:px-12 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-800">
                <Link href="/" className="font-bold text-xl tracking-tighter hover:text-blue-600 transition-colors">
                    DAVID PRIETO
                </Link>
                <div className="flex gap-4">
                    <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                        ← Volver al Portfolio
                    </Link>
                    <a href="/CV_David_Prieto.pdf" download className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                        Descargar PDF
                    </a>
                </div>
            </nav>

            {/* Header Profile */}
            <header className="pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 shadow-xl shrink-0">
                        <Image
                            src="/profile.jpeg"
                            alt="David Prieto Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">David Eduardo Prieto Barrón</h1>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">Senior Full-Stack Engineer & Data Strategist</p>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                            8+ años transformando datos en soluciones de negocio reales.
                            Mi diferenciador: comencé como DBA y Analista de BI, por lo que no solo escribo código—diseño sistemas que entienden cómo opera tu empresa desde adentro.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                                📧 prietobarron.de1@gmail.com
                            </span>
                            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                                📱 664-223-4345
                            </span>
                            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                                📍 Tijuana, B.C. (Disponible para viajar)
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Impact Metrics Banner */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <div className="bg-white/50 dark:bg-zinc-900/50 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">+8</div>
                            <div className="text-xs text-zinc-500">Años Exp.</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">70%</div>
                            <div className="text-xs text-zinc-500">Reducción en Reportes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">40%</div>
                            <div className="text-xs text-zinc-500">Menos Tiempo Inventario</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">+10</div>
                            <div className="text-xs text-zinc-500">Sistemas en Producción</div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-6 md:px-12 pb-24 grid md:grid-cols-[1fr_300px] gap-12">

                {/* Left Column: Experience & Projects */}
                <div className="space-y-16">

                    {/* Experience Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-2">Experiencia Profesional</h2>
                        <div className="space-y-12">

                            {/* Role 1 */}
                            <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-950"></div>
                                <h3 className="text-xl font-bold">Analista de Datos / Desarrollador Full-Stack</h3>
                                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">Aceros Frontera | Junio 2025 - Presente</div>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                                    Liderando la iniciativa de "Cero Papel" y modernización tecnológica de la planta.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
                                    <li><strong>CRM Personalizado:</strong> Desarrollé un sistema (Python/Next.js) que reemplazó 15 hojas de cálculo compartidas, centralizando la gestión de +1,000 clientes.</li>
                                    <li><strong>Sincronización ERP:</strong> Creé pipelines de datos para conectar el ERP Legacy Kepler con dashboards web en tiempo real.</li>
                                    <li><strong>App de Inventarios:</strong> Implementé PWA para escaneo de códigos de barras, reduciendo el tiempo de toma de inventario en un 40%.</li>
                                </ul>
                            </div>

                            {/* Role 2 */}
                            <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 border-4 border-white dark:border-zinc-950"></div>
                                <h3 className="text-xl font-bold">Coordinador de Ciencia de Datos</h3>
                                <div className="text-zinc-500 font-medium mb-2">Guga Mercantil | 2022 - Junio 2025</div>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
                                    <li>Diseñé dashboards ejecutivos en Power BI que redujeron el tiempo de generación de reportes mensuales en un 70%.</li>
                                    <li>Automaticé la limpieza de datos usando SQL y Python, ahorrando +15 horas semanales al equipo administrativo.</li>
                                    <li>Lideré la migración de datos históricos (10 años) durante el cambio de ERP corporativo.</li>
                                </ul>
                            </div>

                            {/* Role 3 */}
                            <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 border-4 border-white dark:border-zinc-950"></div>
                                <h3 className="text-xl font-bold">Administrador de Base de Datos (DBA)</h3>
                                <div className="text-zinc-500 font-medium mb-2">MDY Contact Center | 2016 - 2021</div>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
                                    <li>Administración de SQL Server para operaciones 24/7 de un Call Center con +200 agentes.</li>
                                    <li>Optimización de consultas (Query Tuning) que mejoró la velocidad de reportes críticos en un 300%.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* Education Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-2">Educación</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold">Ingeniería en Desarrollo de Software</h3>
                                <div className="text-zinc-500 text-sm">CESUN Universidad | 2024 - Presente (En curso)</div>
                                <p className="text-zinc-500 text-sm mt-1">Actualmente en 5to cuatrimestre. Promedio destacado.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Técnico Programador de Software</h3>
                                <div className="text-zinc-500 text-sm">CECYTE Villas del Sol | 2012 - 2015</div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Right Column: Skills & Summary */}
                <div className="space-y-12">

                    {/* Skills */}
                    <section>
                        <h3 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Habilidades Técnicas</h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase">Frontend & Modern Web</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Next.js 14", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"].map(s => (
                                        <span key={s} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs rounded border border-zinc-200 dark:border-zinc-700">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase">Backend & Database</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "FastAPI", "SQL Server", "PostgreSQL", "Node.js", "Express"].map(s => (
                                        <span key={s} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs rounded border border-zinc-200 dark:border-zinc-700">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase">Data Intelligence</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Power BI", "DAX", "ETL Pipelines", "Excel Macros/VBA", "Data Modeling"].map(s => (
                                        <span key={s} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs rounded border border-zinc-200 dark:border-zinc-700">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Soft Skills */}
                    <section>
                        <h3 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Competencias</h3>
                        <ul className="space-y-3">
                            {["Pensamiento Analítico", "Liderazgo Técnico", "Comunicación con Negocio", "Mentoria de Equipos", "Gestión de Proyectos"].map(s => (
                                <li key={s} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Languages */}
                    <section>
                        <h3 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Idiomas</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center text-sm">
                                <span>Español</span>
                                <span className="text-zinc-400">Nativo</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span>Inglés</span>
                                <span className="text-zinc-400">Lectura Técnica Avanzada</span>
                            </li>
                        </ul>
                    </section>

                </div>

            </main>

            {/* HUMAN SIDE TOGGLE */}
            <section className={`w-full transition-all duration-700 ease-in-out ${showHuman ? "bg-zinc-900 text-white py-24" : "bg-zinc-50 dark:bg-zinc-900/50 py-12"}`}>

                <div className="max-w-4xl mx-auto px-6 text-center">
                    {!showHuman ? (
                        <button
                            onClick={() => setShowHuman(true)}
                            className="group flex flex-col items-center gap-4 mx-auto transition-all hover:scale-105"
                        >
                            <span className="text-sm font-semibold uppercase tracking-widest text-zinc-500 group-hover:text-blue-600 transition-colors">¿Quieres saber quién soy realmente?</span>
                            <div className="px-8 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg font-bold text-lg group-hover:border-blue-500 group-hover:shadow-blue-500/20 transition-all flex items-center gap-2">
                                🔓 Desbloquear Lado Humano
                            </div>
                        </button>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 inline-block">
                                    Mente de Ingeniero, Alma Curiosa.
                                </h2>
                                <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                    "No me deslumbra lo rápido, me importa lo bien hecho. Todo es patrón, ritmo y diseño."
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 text-left">

                                {/* Card 1: Logic & Math */}
                                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 backdrop-blur-sm hover:bg-zinc-800 transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-4">♟️ 📐</div>
                                    <h3 className="font-bold text-lg mb-2 text-white">Lógica & Matemáticas</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        Disfruto la belleza de los números y la estrategia pura del <strong>Ajedrez</strong>.
                                        Para mí, resolver un problema matemático o ganar una partida es la misma satisfacción que un deploy exitoso.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">♟️ Ajedrez Rápido</span>
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🔢 Pasión por los Números</span>
                                    </div>
                                </div>

                                {/* Card 2: Music & Art */}
                                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 backdrop-blur-sm hover:bg-zinc-800 transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-4">🎵 🎨</div>
                                    <h3 className="font-bold text-lg mb-2 text-white">Música & Arte</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        Mi playlist no tiene género: escucho de todo porque la música es el lenguaje universal.
                                        Me fascina el arte visual y los tatuajes como forma de inmortalizar historias y conceptos.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🎧 Gusto Ecléctico</span>
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🖋️ Tinta y Arte</span>
                                    </div>
                                </div>

                                {/* Card 3: Mexican Culture */}
                                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 backdrop-blur-sm hover:bg-zinc-800 transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-4">🌵 🌮</div>
                                    <h3 className="font-bold text-lg mb-2 text-white">Orgullo Mexicano</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        Amo profundamente mi país, su historia y su gente.
                                        La cultura mexicana es color, calidez y conexión real, valores que llevo a donde quiera que voy.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🇲<i></i> Viva México</span>
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🌮 Tacos &gt; Pizza</span>
                                    </div>
                                </div>

                                {/* Card 4: Sports & Competition */}
                                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 backdrop-blur-sm hover:bg-zinc-800 transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-4">⚽ 🎱</div>
                                    <h3 className="font-bold text-lg mb-2 text-white">Deporte & Competencia</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        Necesito movimiento para pensar con claridad.
                                        Disfruto la competencia sana en el <strong>Fútbol, Tenis o Ping Pong</strong>, y la precisión estratégica del <strong>Billar</strong>.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🏆 Jugador de Equipo</span>
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🎱 Maestro del Billar</span>
                                    </div>
                                </div>

                                {/* Card 3: Philosophy */}
                                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 backdrop-blur-sm hover:bg-zinc-800 transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-4">🧠 🤝</div>
                                    <h3 className="font-bold text-lg mb-2 text-white">Filosofía de Vida</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        <em>"Todos los días hay que aprender algo nuevo."</em>
                                        <br />
                                        Soy un estudiante eterno. Me apasiona <strong>enseñar</strong> lo que sé y conectar con las personas desde el respeto y el crecimiento compartido.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">📚 Estudiante Eterno</span>
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">👨‍🏫 Mentor</span>
                                    </div>
                                </div>

                                {/* Card 4: Animal Lover */}
                                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 backdrop-blur-sm hover:bg-zinc-800 transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-4">😺 🌿</div>
                                    <h3 className="font-bold text-lg mb-2 text-white">Animal Lover</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        No todo es código. Mi <strong>gatita</strong> es mi compañera de programación (y quien revisa mis bugs caminando sobre el teclado).
                                        Respeto profundo por la naturaleza y los animales.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">🐾 Papá Gatuno</span>
                                        <span className="text-xs border border-zinc-600 rounded-full px-2 py-1 text-zinc-500">⛰️ Naturaleza</span>
                                    </div>
                                </div>

                            </div>

                            <button
                                onClick={() => setShowHuman(false)}
                                className="mt-16 text-zinc-500 hover:text-white text-sm uppercase tracking-widest transition-colors"
                            >
                                ↑ Volver al Modo Profesional
                            </button>
                        </div>
                    )}
                </div>

            </section>

            {/* Footer */}
            <footer className="w-full py-12 text-center text-zinc-500 text-sm bg-zinc-50 dark:bg-zinc-900/50">
                <p>© 2026 David Prieto. Esta es la versión digital extendida de mi CV.</p>
            </footer>

        </div>
    );
}
