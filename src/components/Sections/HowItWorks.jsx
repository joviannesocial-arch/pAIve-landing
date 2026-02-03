import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Select an Avatar",
        desc: "Choose from Aura, Zenith, or Echo to match your preferred coaching style—whether you need empathy, strategy, or hard data."
    },
    {
        num: "02",
        title: "Upload & Contextualize",
        desc: "Share your CV, portfolio, and current career goals. The more pAIve knows, the sharper the guidance becomes."
    },
    {
        num: "03",
        title: "Iterative Coaching",
        desc: "Get 24/7 access to your agent. Draft emails, prep for interviews, and debug your career anxiety in real-time."
    }
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-transparent to-brand-indigo/5">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
                    <p className="text-xl text-gray-400">Your journey from confusion to clarity in three steps.</p>
                </motion.div>

                <div className="space-y-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-indigo/50 to-transparent" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="flex gap-8 group"
                        >
                            <div className="relative">
                                <div className="w-14 h-14 rounded-full bg-space-black border border-brand-indigo/30 flex items-center justify-center text-xl font-bold text-brand-indigo group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors z-10 relative">
                                    {step.num}
                                </div>
                            </div>
                            <div className="pt-2 pb-8 max-w-2xl">
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
