
import { mentorshipData } from "@/data";
import MotionWrapper from "./MotionWrapper";

export default function Mentorship() {
    return (
        <section className="w-full max-w-5xl px-6 py-24 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <MotionWrapper className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">{mentorshipData.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: mentorshipData.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />

                    <div className="space-y-4">
                        {mentorshipData.items.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className={`w-2 h-2 mt-2 rounded-full ${item.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm text-zinc-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionWrapper>
                <MotionWrapper delay={0.2} className="flex-1 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-bl-xl">KPIs 2026</div>
                    <h3 className="text-xl font-bold mb-6">Impacto Educativo</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-1">{mentorshipData.stats.trained}</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide">Personas Capacitadas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-1">{mentorshipData.stats.programs}</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide">Programas Activos</div>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    )
}
