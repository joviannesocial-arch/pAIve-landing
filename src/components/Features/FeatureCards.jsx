import { motion } from 'framer-motion';
import { GlassCard } from '../UI/GlassCard';

const features = [
    {
        name: "Aura",
        role: "The Empath",
        color: "from-purple-500 to-indigo-500",
        desc: "Unlocks your potential through deep listening and emotional intelligence. Perfect for navigating imposter syndrome."
    },
    {
        name: "Zenith",
        role: "The Strategist",
        color: "from-orange-500 to-amber-500",
        desc: "Focuses on high-impact moves and efficiency. Helps you plot the fastest path to promotion or pivot."
    },
    {
        name: "Echo",
        role: "The Analyst",
        color: "from-teal-500 to-emerald-500",
        desc: "Data-driven and direct. Breaks down your career goals into binary, actionable steps."
    }
];

export const FeatureCards = () => {
    return (
        <section id="features" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your <span className="text-brand-cyan">Coaching Identity</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Three distinct AI personalities trained to adapt to your communication style.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <GlassCard className="h-full hover:bg-white/10 transition-colors duration-300">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center shadow-lg`}>
                                    {/* Abstract icon representation */}
                                    <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                                <div className="text-sm font-mono text-brand-indigo mb-4 uppercase tracking-wider">{feature.role}</div>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
