import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const solutions = [
    "Navigate Imposter Syndrome with cognitive behavioral coaching",
    "Identify tailored industry roadmaps based on your skills",
    "Switch between personalities to match your current mood",
    "Draft emails and CVs with your unique voice, not GPT-speak"
];

export const ProblemSolution = () => {
    return (
        <section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-brand-indigo/5">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6"
                        >
                            More than just <br /> a <span className="text-brand-indigo">chatbot</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-lg leading-relaxed"
                        >
                            Most career tools are just generic templates or expensive human coaches. pAIve bridges the gap by offering 24/7 personalized guidance that understands your specific emotional and strategic needs.
                        </motion.p>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="space-y-6">
                            {solutions.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                                >
                                    <CheckCircle2 className="text-brand-cyan shrink-0 mt-1" size={20} />
                                    <span className="text-gray-200">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
