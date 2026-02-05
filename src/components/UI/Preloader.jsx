import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Animation Sequence:
        // 0s - 1.5s: Gray Text
        // 1.5s - 3.5s: Gradient Text Reveal
        // 4s: Fade Out
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050511]" // Matches body background
                >
                    <div className="relative">
                        {/* Layer 1: Base Grey Text */}
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-gray-700 select-none pb-2 pr-2">
                            pAIve
                        </h1>

                        {/* Layer 2: Gradient Overlay (Clip Path Animation) */}
                        {/* Layer 2: Gradient Overlay (Clip Path Animation) */}
                        <motion.div
                            initial={{ clipPath: 'inset(0 100% 0 0)' }}
                            animate={{ clipPath: 'inset(0 0% 0 0)' }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }} // Wipe effect
                            className="absolute inset-0 top-0 left-0"
                        >
                            <h1 className="text-6xl md:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-brand-indigo to-brand-cyan select-none pb-2 pr-2">
                                pAIve
                            </h1>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
