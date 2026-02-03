import { GlassCard } from '../UI/GlassCard';
import { motion } from 'framer-motion';

const avatars = [
    { name: 'Aura', color: 'bg-purple-600', eyes: '><', desc: 'The Empath' },
    { name: 'Zenith', color: 'bg-orange-600', eyes: '00', desc: 'The Strategist' },
    { name: 'Echo', color: 'bg-teal-600', eyes: '..', desc: 'The Analyst' },
];

export const AvatarShowcase = () => {
    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Choose Your AI Coach</h2>
                <p className="text-gray-400">Select the personality that resonates with you.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
                {avatars.map((avatar, index) => (
                    <motion.div
                        key={avatar.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="w-64 h-80 flex flex-col items-center justify-center gap-6 hover:bg-white/10 transition-colors border-t border-white/20">
                            <div className={`w-32 h-32 rounded-3xl ${avatar.color} shadow-[0_0_40px_rgba(0,0,0,0.3)] flex items-center justify-center text-4xl font-bold text-white relative overflow-hidden group`}>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {/* Simple ASCII face representation for now, or simple geometric shapes */}
                                <span className="font-mono">{avatar.eyes}</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold">{avatar.name}</h3>
                                <p className="text-sm text-gray-400 mt-1">{avatar.desc}</p>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
