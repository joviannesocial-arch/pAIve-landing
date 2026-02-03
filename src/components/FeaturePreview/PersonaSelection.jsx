import { GlassCard } from '../UI/GlassCard';
import { motion } from 'framer-motion';
import { Pencil, BarChart2, Rocket } from 'lucide-react';

const personas = [
    {
        title: 'The Creative',
        icon: Pencil,
        desc: 'Innovation Guide',
        color: 'bg-pink-500'
    },
    {
        title: 'The Analyst',
        icon: BarChart2,
        desc: 'Data Master',
        color: 'bg-blue-500'
    },
    {
        title: 'The Commander',
        icon: Rocket,
        desc: 'Action Leader',
        color: 'bg-amber-500',
        active: true
    },
];

export const PersonaSelection = () => {
    return (
        <section className="py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Customizable Coaching Styles</h2>
                <p className="text-gray-400">From supportive mentor to results-driven commander.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {personas.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className={`flex items-center gap-4 p-4 cursor-pointer transition-all ${p.active ? 'bg-white/10 border-brand-purple/50 shadow-[0_0_20px_rgba(109,40,217,0.2)]' : 'hover:bg-white/10'}`}>
                            <div className={`p-3 rounded-xl ${p.color} text-white`}>
                                <p.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg">{p.title}</h3>
                                <p className="text-sm text-gray-400">{p.desc}</p>
                            </div>
                            {p.active && (
                                <div className="text-xs bg-brand-purple/20 text-brand-purple px-2 py-1 rounded border border-brand-purple/30">
                                    Selected
                                </div>
                            )}
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
