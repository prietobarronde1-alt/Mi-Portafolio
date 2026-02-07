
import { aboutData } from '@/data';
import MotionWrapper from './MotionWrapper';

export default function About() {
    return (
        <section id="about" className="w-full max-w-3xl px-6 py-24 space-y-12">
            <MotionWrapper>
                <h2 className="text-3xl font-bold tracking-tight">{aboutData.title}</h2>
                <div className="prose prose-lg dark:prose-invert text-zinc-600 dark:text-zinc-400 leading-relaxed mt-6">
                    {aboutData.paragraphs.map((paragraph, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                    ))}
                    <p className="font-medium text-zinc-800 dark:text-zinc-200 border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/10 py-2 rounded-r-lg mt-6">
                        Me muevo cómodamente entre áreas operativas, dirección y equipos técnicos, actuando como puente entre negocio, datos y tecnología.
                    </p>
                </div>
            </MotionWrapper>

            {/* Simple Stats Grid */}
            <MotionWrapper delay={0.2}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-zinc-100 dark:border-zinc-800">
                    {aboutData.stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                            <div className="text-sm text-zinc-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </MotionWrapper>
        </section>
    );
}
