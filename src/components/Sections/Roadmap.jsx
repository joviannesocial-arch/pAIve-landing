import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb } from 'lucide-react';

const roadmapSteps = [
    {
        title: "Select Your Partner",
        desc: "Just like everyone has a Myers-Briggs personality—I for one am an ENFP—pAIve uses this style to configure your coaching. Choose from 5 personality communication types to match your energy.",
        side: 'left'
    },
    {
        title: "Contextualize Your Journey",
        desc: "Share your goals and upload your latest resume. Whether you fill it in manually or drop a file, your AI coach takes the time to truly understand your background.",
        side: 'right'
    },
    {
        title: "Chat Whenever You’re Lost",
        desc: "No appointments and no waiting. Just like a real-life career mentor, but available 24/7. Open the app and chat whenever you're confused about a company, a job title, or your own next move.",
        side: 'left'
    }
];

export const Roadmap = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="how-it-works" ref={containerRef} className="py-32 px-6 relative overflow-visible">
            <div className="container mx-auto max-w-5xl relative">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
                    <p className="text-gray-400">Illuminating your path to career clarity.</p>
                </div>

                {/* Vertical Path Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-48 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="w-full bg-gradient-to-b from-brand-indigo via-brand-cyan to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    />
                </div>

                <div className="space-y-32 relative">
                    {roadmapSteps.map((step, idx) => (
                        <div key={idx} className={`flex items-center gap-12 ${step.side === 'right' ? 'flex-row-reverse' : ''}`}>
                            {/* Text Content */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.5, once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                                className={`flex-1 text-${step.side === 'left' ? 'right' : 'left'}`}
                            >
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">{step.desc}</p>
                            </motion.div>

                            {/* Lamp Node */}
                            <div className="relative flex items-center justify-center w-16 md:w-20 shrink-0 z-10">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.5, once: true }}
                                    variants={{
                                        hidden: { scale: 0.8, opacity: 0.5 },
                                        visible: {
                                            scale: 1,
                                            opacity: 1,
                                            boxShadow: "0 0 50px rgba(168,85,247,0.8)",
                                            transition: { duration: 0.5 }
                                        }
                                    }}
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-space-black border-2 border-purple-500 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-transparent z-20"
                                >
                                    <Lightbulb className="text-purple-300 w-6 h-6 md:w-8 md:h-8" />
                                </motion.div>
                            </div>

                            {/* Empty spacer for alignment */}
                            <div className="flex-1 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
