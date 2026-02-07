
"use client";

import { workflowData } from '@/data';
import MotionWrapper from './MotionWrapper';
import { CheckCircle2 } from 'lucide-react';

export default function Workflow() {
    return (
        <section id="workflow" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <MotionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                            {workflowData.title}
                        </h2>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                            {workflowData.subtitle}
                        </p>
                    </div>
                </MotionWrapper>

                {/* Timeline of Phases */}
                <div className="relative mb-24">
                    {/* Connecting Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-orange-500 hidden md:block"></div>

                    <div className="space-y-12">
                        {workflowData.phases.map((phase, index) => {
                            // Color mapping for static Tailwind classes
                            const colorClasses = {
                                blue: {
                                    number: 'text-blue-500/20',
                                    dot: 'bg-blue-500',
                                    icon: 'text-blue-500'
                                },
                                purple: {
                                    number: 'text-purple-500/20',
                                    dot: 'bg-purple-500',
                                    icon: 'text-purple-500'
                                },
                                emerald: {
                                    number: 'text-emerald-500/20',
                                    dot: 'bg-emerald-500',
                                    icon: 'text-emerald-500'
                                },
                                orange: {
                                    number: 'text-orange-500/20',
                                    dot: 'bg-orange-500',
                                    icon: 'text-orange-500'
                                }
                            };

                            const colors = colorClasses[phase.color as keyof typeof colorClasses];

                            return (
                                <MotionWrapper key={phase.number} delay={index * 0.1}>
                                    <div className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                        {/* Content Card */}
                                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`text-5xl font-black ${colors.number}`}>{phase.number}</span>
                                                    <div className={index % 2 === 0 ? 'md:ml-auto md:text-right' : ''}>
                                                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{phase.title}</h3>
                                                    </div>
                                                </div>

                                                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                                    {phase.description}
                                                </p>

                                                <div className={index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}>
                                                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Entregables:</h4>
                                                    <ul className="space-y-1">
                                                        {phase.deliverables.map((item, idx) => (
                                                            <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                                <CheckCircle2 className={`w-4 h-4 ${colors.icon} shrink-0`} />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline Dot */}
                                        <div className="hidden md:flex items-center justify-center shrink-0">
                                            <div className={`w-16 h-16 rounded-full ${colors.dot} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                                {phase.number}
                                            </div>
                                        </div>

                                        {/* Spacer for alternating layout */}
                                        <div className="flex-1 hidden md:block"></div>
                                    </div>
                                </MotionWrapper>
                            );
                        })}
                    </div>
                </div>

                {/* Tools & Methodology Grid */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Tools */}
                    <MotionWrapper delay={0.4}>
                        <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                                {workflowData.tools.title}
                            </h3>
                            <div className="space-y-6">
                                {workflowData.tools.categories.map((category, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
                                            {category.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((tool, toolIdx) => (
                                                <span
                                                    key={toolIdx}
                                                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm text-zinc-700 dark:text-zinc-300"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Methodology */}
                    <MotionWrapper delay={0.5}>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                                {workflowData.methodology.title}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
                                {workflowData.methodology.approach}
                            </p>
                            <ul className="space-y-3">
                                {workflowData.methodology.principles.map((principle, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                        <span className="text-zinc-700 dark:text-zinc-300">{principle}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </MotionWrapper>

                </div>

            </div>
        </section>
    );
}
