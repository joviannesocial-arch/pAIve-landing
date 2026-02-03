import { motion } from 'framer-motion';
import { BrainCircuit, Compass, HeartHandshake } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';

export const ValueBoxes = () => {
    return (
        <section className="py-12 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                {/* Big Idea Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6"
                    >
                        What's Coming Your Way
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Industry Deep-Dives */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="group"
                    >
                        <div className="h-full relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/30">
                            <GlassCard className="h-full p-8 bg-space-black/80 backdrop-blur-xl relative z-10 !border-0 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                                    <BrainCircuit size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Industry Deep-Dives</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Stop guessing the unwritten rules of tech or finance. We provide specific roadmaps to decode exactly what your dream company is looking for before you even apply.
                                </p>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Suitability Mapping */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="group"
                    >
                        <div className="h-full relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/30">
                            <GlassCard className="h-full p-8 bg-space-black/80 backdrop-blur-xl relative z-10 !border-0 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                                    <Compass size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Personal Suitability Mapping</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Stop trying to fit into boxes that don't match your shape. We use a psychometric approach to find the role where you'll thrive, not just where you're qualified.
                                </p>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Emotional Advocacy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="group"
                    >
                        <div className="h-full relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/30">
                            <GlassCard className="h-full p-8 bg-space-black/80 backdrop-blur-xl relative z-10 !border-0 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                                    <HeartHandshake size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Emotional Advocacy</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Get 24/7 support for the hurdles a resume can't show. From imposter syndrome to interview anxiety, pAIve is there to help you debug your career stress in real-time.
                                </p>
                            </GlassCard>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
