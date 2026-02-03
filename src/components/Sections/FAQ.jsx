import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "I haven't started my career yet. Is this for me?",
        answer: "Yes. pAIve helps you map your path <em>before</em> you take the first step, ensuring you aren't training for a role that is currently being automated out of existence."
    },
    {
        question: "I have a job, but I feel like a fraud. Can AI help?",
        answer: "Absolutely. This is the 'Myers-Briggs of Jobs' approach. We help you find where your unique human intuition thrives, moving you away from the 'clerical' tasks AI can do better."
    },
    {
        question: "What if the AI just tells me what I already know?",
        answer: "Generic AI is a librarian; pAIve is a partner. We dig into the <em>suitability</em> of a role to see if it actually requires your specific human 'edge,' or if it's a role destined for automation."
    },
    {
        question: "How does pAIve actually keep me ahead of AI automation?",
        answer: "We focus on 'High-Touch' over 'High-Task.' pAIve identifies the niches where empathy, creative strategy, and human complexity are the core requirements—the very things AI can't replicate."
    },
    {
        question: "How does pAIve actually keep me ahead of AI automation?",
        answer: "We focus on 'High-Touch' over 'High-Task.' pAIve identifies the niches where empathy, creative strategy, and human complexity are the core requirements—the very things AI can't replicate."
    },
    {
        question: "How do you handle data privacy?",
        answer: "We use enterprise-grade AES-256 encryption for all data. most importantly, we are Privacy-by-Design: we never train our public models on your personal career data."
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
                        <div key={idx} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-colors hover:border-white/20">
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
