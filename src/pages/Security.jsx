import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server } from 'lucide-react';
import { GlassCard } from '../components/UI/GlassCard';

export const Security = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo mb-6 border border-brand-indigo/20">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy-by-Design</h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                        Your career is personal. Your data should be too.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="h-full p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                                <Lock size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">End-to-End Encryption</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                All conversations are <strong className="text-white font-medium">end-to-end encrypted</strong>. We utilize enterprise-grade AES-256 standards to ensure your career roadmaps remain yours alone. Cannot be accessed by pAIve staff or third parties.
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GlassCard className="h-full p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-brand-cyan mb-6">
                                <Server size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Model Isolated Safety</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                pAIve is built on a private infrastructure. We <strong className="text-white font-medium">never</strong> use your personal professional data, CVs, or chat history to train public Large Language Models (LLMs).
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
