import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data';
import MotionWrapper from './MotionWrapper';
import TiltCard from './TiltCard';

const colorMap: Record<string, string> = {
    blue: 'group-hover:text-blue-600 border-blue-500',
    purple: 'group-hover:text-purple-600 border-purple-500',
    emerald: 'group-hover:text-emerald-600 border-emerald-500',
    yellow: 'group-hover:text-yellow-600 border-yellow-500',
};

const borderMap: Record<string, string> = {
    blue: 'group-hover:border-blue-500/50',
    purple: 'group-hover:border-purple-500/50',
    emerald: 'group-hover:border-emerald-500/50',
    yellow: 'group-hover:border-yellow-500/50',
};

export default function Projects() {
    return (
        <section id="projects" className="w-full max-w-5xl px-6 py-24">
            <MotionWrapper>
                <h2 className="text-3xl font-bold tracking-tight mb-12">Proyectos Destacados</h2>
            </MotionWrapper>
            <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <MotionWrapper key={project.id} delay={index * 0.1}>
                        <Link href={project.href} className="block">
                            <TiltCard>
                                <div className="group space-y-4">
                                    <div className={`relative aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 ${borderMap[project.color]} transition-all`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold ${colorMap[project.color].split(' ')[0]} transition-colors`}>{project.title}</h3>
                                        <p className="text-zinc-500 text-sm mt-1">{project.subtitle}</p>
                                        <p className="text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </Link>
                    </MotionWrapper>
                ))}
            </div>
        </section>
    );
}
