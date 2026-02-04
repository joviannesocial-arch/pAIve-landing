import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useState, useRef, useEffect } from 'react';

export const PersonalNote = () => {
    const [typingComplete, setTypingComplete] = useState(false);
    const containerRef = useRef(null);

    const [styleColor, setStyleColor] = useState('from-brand-indigo via-purple-500 to-brand-cyan');

    useEffect(() => {
        const savedStyle = localStorage.getItem('paive_style');
        if (savedStyle) {
            try {
                const style = JSON.parse(savedStyle);
                if (style.beamColor) {
                    setStyleColor(style.beamColor);
                }
            } catch (e) {
                console.error("Error parsing saved style", e);
            }
        }
    }, []);

    // Beam Engine: Track scroll relative to the component
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["center center", "bottom start"]
    });

    const beamHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
    const beamOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section id="why-paive" ref={containerRef} className="py-12 px-6 relative z-10 flex flex-col justify-center scroll-mt-32">
            <div className="container mx-auto max-w-3xl text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="font-mono text-purple-400/80 text-xs mb-4 tracking-[0.2em] uppercase">
                // A Note from the Founder
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Your Human Advantage, Powered by <span className="bg-gradient-to-r from-brand-indigo via-purple-500 to-brand-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">pAIve</span>
                    </h2>
                </motion.div>

                {/* Chat Bubble Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel px-8 py-12 md:px-12 md:py-16 rounded-3xl backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(147,51,234,0.15)] relative overflow-hidden z-20"
                >
                    <div className={`text-base md:text-lg font-light leading-8 text-gray-200 ${typingComplete ? 'typing-complete' : ''}`}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(20)
                                    .typeString('The career landscape is shifting, and I’ve heard the "AI is replacing us" record on repeat. Whether you are a student standing at your first crossroads or a professional feeling deeply misaligned, that is the last thing you want to hear.<br/><br/>')
                                    .pauseFor(300)
                                    .typeString("We've all heard it countless times, and every year it is the same: 'this is the toughest job market yet.' It makes technology and AI feel like our enemy. But what if we make AI our ally? What if, instead of being the force that makes us obsolete, AI became the partner that helps us find the one path where we are truly needed?<br/><br/>")
                                    .pauseFor(800)
                                    .typeString('<span class="text-xl md:text-2xl font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Let’s use AI to pAIve the path to your professional purpose.</span>')
                                    .callFunction(() => {
                                        setTypingComplete(true);
                                    })
                                    .start();
                            }}
                            options={{
                                cursor: '▋',
                                delay: 20,
                                cursorClassName: 'typewriter-cursor text-brand-indigo'
                            }}
                        />
                    </div>

                    {/* Soft Inner Glow */}
                    <div className="absolute inset-0 bg-brand-indigo/5 rounded-3xl pointer-events-none" />
                </motion.div>

                {/* Beam of Light Scroll Engine */}
                {typingComplete && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full h-[400px] w-[2px] overflow-hidden -mt-4 z-0">
                        {/* Background track (dimmer version of beam) */}
                        <div className="absolute inset-0 bg-white/5 w-full h-full" />

                        {/* Filling Beam */}
                        <motion.div
                            style={{ height: beamHeight, opacity: beamOpacity }}
                            className={`w-full bg-gradient-to-b ${styleColor} shadow-[0_0_25px_rgba(168,85,247,1)]`}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};
