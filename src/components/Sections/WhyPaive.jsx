import { motion } from 'framer-motion';
import { BrainCircuit, Compass } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';

export const WhyPaive = () => {
    return (
        <section id="why-paive" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Career <span className="text-brand-indigo">Navigator</span></h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Most AI tools are search engines. pAIve is a thought partner designed to navigate complex career psychology.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="h-full p-8 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                                <BrainCircuit size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Industry Deep-Dives</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Don't just get generic advice. Get industry-specific roadmaps that decode the unwritten rules of tech, finance, and creative fields. pAIve helps you speak the language of your dream role before you even apply.
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="h-full p-8 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                                <Compass size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Personal Suitability Mapping</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Stop fitting into boxes that don't match your shape. We use a psychometric approach to align your authentic strengths with market opportunities, focusing on where you'll thrive, not just where you're qualified.
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
