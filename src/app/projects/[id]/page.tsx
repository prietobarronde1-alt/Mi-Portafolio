
import { projectsData } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";

// Generate static params for export
export function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    return (
        <div className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
            <Navbar />

            {/* Top Spacer for fixed navbar */}
            <div className="h-24"></div>

            <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

                {/* Navigation Breadcrumb */}
                <MotionWrapper>
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors mb-8">
                        ← Volver al Inicio
                    </Link>
                </MotionWrapper>

                {/* Hero Header */}
                <header>
                    <MotionWrapper delay={0.1}>
                        <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                            {project.title}
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper delay={0.2}>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
                            {project.description}
                        </p>
                    </MotionWrapper>

                    <MotionWrapper delay={0.3}>
                        <div className="flex flex-wrap gap-2 mt-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-medium backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </MotionWrapper>
                </header>

                {/* Main Content Area */}
                <div className="space-y-20">

                    {/* Visual Asset (Placeholder or Iframe) */}
                    <MotionWrapper delay={0.4} className="w-full">
                        {project.iframe ? (
                            <div className="w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl relative">
                                <iframe
                                    title="Report Section"
                                    width="100%"
                                    height="600"
                                    src={project.iframe}
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    className="w-full h-[500px] md:h-[600px] bg-zinc-100 dark:bg-zinc-800"
                                ></iframe>
                                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-sm text-center text-zinc-500">
                                    👆 Dashboard Interactivo (Demo con datos anonimizados)
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-64 md:h-96 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 font-medium">
                                {project.imagePlaceholder}
                            </div>
                        )}
                    </MotionWrapper>

                    {/* Challenge Section */}
                    <section>
                        <MotionWrapper>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">!</span>
                                {project.challenge.title}
                            </h2>
                            <div className="prose dark:prose-invert text-zinc-600 dark:text-zinc-400 max-w-none">
                                <p dangerouslySetInnerHTML={{ __html: project.challenge.description }}></p>

                                {project.challenge.alert && (
                                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 p-4 rounded-lg mt-4 text-sm text-red-800 dark:text-red-300">
                                        <strong>{project.challenge.alert.title}</strong> {project.challenge.alert.text}
                                    </div>
                                )}

                                {project.challenge.list && (
                                    <ul className="list-disc pl-5 space-y-2 mt-4">
                                        {project.challenge.list.map((item, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </MotionWrapper>
                    </section>

                    {/* Solution Section */}
                    <section>
                        <MotionWrapper>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">✓</span>
                                {project.solution.title}
                            </h2>
                            <div className="prose dark:prose-invert text-zinc-600 dark:text-zinc-400 max-w-none">
                                {project.solution.description && <p dangerouslySetInnerHTML={{ __html: project.solution.description }}></p>}

                                {/* Grid Variant */}
                                {project.solution.grid && (
                                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                                        {project.solution.grid.map((item, idx) => (
                                            <div key={idx} className="p-6 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl backdrop-blur-sm">
                                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h3>
                                                <p className="text-sm" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* List Variant (PowerBI case) */}
                                {project.solution.list && (
                                    <ul className="list-disc pl-5 space-y-2 mt-4">
                                        {project.solution.list.map((item, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                        </MotionWrapper>
                    </section>

                    {/* Engineering / Deep Dive (Optional) */}
                    {project.engineering && (
                        <section className="bg-blue-50/50 dark:bg-blue-900/10 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30 backdrop-blur-sm">
                            <MotionWrapper>
                                <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-300">
                                    {project.engineering.title}
                                </h2>
                                <div className="text-zinc-700 dark:text-zinc-300 space-y-4">
                                    {project.engineering.description && <p dangerouslySetInnerHTML={{ __html: project.engineering.description }}></p>}

                                    {project.engineering.list && (
                                        <ul className="space-y-4">
                                            {project.engineering.list.map((item, idx) => (
                                                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} className="flex gap-3"></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </MotionWrapper>
                        </section>
                    )}

                    {/* Impact Section */}
                    {project.impact && (
                        <section>
                            <MotionWrapper>
                                <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                                    Impacto en el Negocio
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {project.impact.stats.map((stat, idx) => (
                                        <div key={idx} className="text-center p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                                            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                            <div className="text-sm text-zinc-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </MotionWrapper>
                        </section>
                    )}

                </div>
            </main>
            <Footer />
        </div>
    );
}
