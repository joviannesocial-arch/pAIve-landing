import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "I have a job, but I feel like a fraud. Can pAIve help?",
        answer: "Absolutely. Imposter Syndrome is often just a symptom of being out of alignment with your true \"frequency.\" While traditional coaching might offer generic affirmations, pAIve uses suitability mapping to prove, with data, exactly why you belong in the room. It is believed that by bridging the gap between your self-perception and your actual potential, we can turn that \"fraud\" feeling into a tactical advantage."
    },
    {
        question: "How does pAIve actually keep me ahead of AI automation?",
        answer: "It appears that the loudest \"noise\" in the market today is the fear of being replaced. We don’t just help you \"keep up\" with AI; we use it to identify the uniquely human \"edges\" that algorithms cannot replicate. One might argue that the best way to survive the AI revolution is to have an AI partner that knows your human value better than you do."
    },
    {
        question: "What if I haven't even started my career yet?",
        answer: "For a fresh grad, the path ahead often looks like a chaotic squiggly line. It is often believed that you need experience to find direction, but pAIve flips that script. By starting with your \"Coaching Style\" and \"Success\" definitions, we help you \"pave the path\" before you even take the first step."
    },
    {
        question: "How do you handle my data and privacy?",
        answer: "Career planning requires total honesty, which is impossible if you're being watched. We ensure your data stays private by never creating public-facing profiles. Your thoughts, goals, and \"suitability maps\" are encrypted and used only to power your personal AI coach. We don't sell your info to recruiters, and your current employer will never know you're here. It’s a private space designed for your growth, not for public noise."
    }
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 px-6">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">FAQ</h2>
                    <p className="text-gray-400">Common questions about your new career partner.</p>
                </motion.div>

                <div className="space-y-4">
                    {faqData.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === idx
                                    ? 'border-white/20 bg-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                                    : 'border-white/10 bg-white/5 hover:border-white/20'
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                <ChevronDown
                                    className={`text-gray-400 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
