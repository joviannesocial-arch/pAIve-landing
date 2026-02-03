import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';

export const Security = () => {
    return (
        <section id="security" className="py-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto max-w-4xl">
                <GlassCard className="p-12 border-brand-indigo/20 relative overflow-hidden group hover:border-brand-indigo/40 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-transparent pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="w-20 h-20 rounded-2xl bg-space-black border border-white/10 flex items-center justify-center shadow-2xl">
                            <Lock className="text-brand-cyan" size={32} />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4">Privacy-by-Design</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Your career is personal. Your data should be too.
                                <span className="text-white font-medium block mt-2">
                                    Conversations are encrypted and never used for training public LLMs.
                                </span>
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};
