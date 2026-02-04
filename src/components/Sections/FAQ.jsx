import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "What makes pAIve different from ChatGPT or other AI assistants?",
        answer: "pAIve is a specialist coach, not a generalist chatbot. While general AI draws from the entire internet, we fine-tune our models using Hugging Face on curated ICT industry data and real-world market trends. This ensures your advice is grounded in professional reality rather than generic probability."
    },
    {
        question: "What can pAIve actually do that other assistants cannot?",
        answer: "pAIve identifies your cultural resonance and professional alignment with surgical precision. We distinguish between high-pressure startup environments and structured corporate cultures to find where you will actually thrive. We don’t just match keywords; we map your personality to the workplace architectures that suit you best."
    },
    {
        question: "I have a job, but I feel like a fraud. Can AI help?",
        answer: "Yes, pAIve uses objective suitability mapping to dismantle imposter syndrome. By analyzing your actual strengths against industry benchmarks, we provide data-driven proof of your value. This transforms internal anxiety into a tactical professional advantage."
    },
    {
        question: "How does pAIve keep me ahead of AI automation?",
        answer: "We identify and amplify the uniquely human \"edges\" that algorithms cannot replicate. pAIve doesn't just help you \"keep up\"; it acts as a strategic partner to future-proof your career by focusing on high-value human skills."
    },
    {
        question: "What if I have not even started my career yet?",
        answer: "pAIve helps you \"pave the path\" before you take your first step. For fresh graduates, we eliminate the chaos of the unknown by defining your success style and coaching alignment early on. You gain a clear roadmap instead of a series of guesses."
    },
    {
        question: "Is pAIve free for users?",
        answer: "No, pAIve is a premium service with tiered pricing, designed to make professional coaching affordable for everyone. These tiers ensure that you only pay for the level of support you need as you progress through your career.<br/><br/>We avoid the \"free\" model because high-precision coaching requires a dedicated, fine-tuned infrastructure and your career is too important to be treated as a data-mining exercise."
    },
    {
        question: "How do you handle my data and privacy?",
        answer: "Your conversations and career data stay between you and your AI coach. Unlike standard cloud AI services that mine your interactions for training data, pAIve is built as a private sandbox. We use bank-level encryption to ensure your professional history never touches a recruiter's desk or a public database unless you explicitly choose to share it."
    },
    {
        question: "Which platforms and operating systems work with pAIve?",
        answer: "pAIve will be a universal web-based application accessible on any device with a modern browser. However, we are actively planning the release of downloadable mobile apps for phone users to make your career guidance even more accessible on the go."
    },
    {
        question: "Where can I find help or join the community?",
        answer: "Joining the waitlist grants you immediate status as a Co-Creator. This gives you direct access to early-adopter updates and a chance to influence our development roadmap. If you have specific concerns, share them in your onboarding survey to help us pave the path for the entire community."
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
                                        <div
                                            className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5"
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        />
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
