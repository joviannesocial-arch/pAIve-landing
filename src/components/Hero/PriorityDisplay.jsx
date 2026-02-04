import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

/**
 * PriorityDisplay Module
 * 
 * Handles the visual representation of the user's priority status.
 * Contains components for the Odometer Header and the Success Message Body.
 */

/**
 * PriorityOdometer
 * 
 * The mechanical rank counter that sits in the top-right of the glass panel.
 * Animates using spring physics when the rank changes (e.g., survey completion).
 * 
 * @param {Object} props
 * @param {number} props.rank - Current rank value
 */
export const PriorityOdometer = ({ rank }) => {
    const count = useMotionValue(rank);
    const springValue = useSpring(count, { stiffness: 45, damping: 20 });
    const displayRank = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        count.set(rank);
    }, [rank, count]);

    return (
        <div className="text-right ml-auto">
            <div className="text-xs text-brand-indigo/80 font-mono tracking-wider mb-1">POSITION IN WAITLIST</div>
            <div className="text-2xl font-bold font-mono text-brand-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] flex items-center justify-end gap-1">
                <span>#</span>
                <motion.span>{displayRank}</motion.span>
            </div>
        </div>
    );
};

/**
 * PriorityMessage
 * 
 * The main success content area.
 * Displays the narrative and wraps the Survey flow.
 * 
 * @param {Object} props
 * @param {string} props.name - User's name
 * @param {string} props.status - 'success' (Stage 1) | 'survey_submitted' (Stage 2)
 * @param {React.ReactNode} props.children - Configured to accept SurveyStack
 */
export const PriorityMessage = ({ name, status, children }) => {
    return (
        <motion.div
            key="success-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full ${status === 'survey_submitted'
                ? 'text-center flex flex-col items-center justify-center'
                : 'text-left pt-12'
                }`}
        >
            {/* Header: Dynamic based on Stage */}
            <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-6"
            >
                {status === 'success'
                    ? `YAY! You’re in, ${name}!`
                    : `We’ve heard you, ${name}. Thank you :)`
                }
            </motion.h3>

            <motion.div
                layout
                className={`space-y-4 mb-8 text-gray-300 text-sm leading-relaxed max-w-lg ${status === 'survey_submitted' ? 'mx-auto' : ''}`}
            >
                {/* Stage 2 Final Message */}
                {status === 'survey_submitted' && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className=""
                    >
                        You’re among the first wave of pAIve users and we're excited to have you as one of the first people we reach out to the moment pAIve launches.
                    </motion.p>
                )}

                {/* Stage 1 Intro Message */}
                {status === 'success' && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-400 italic"
                    >
                        As one of the first people helping us build pAIve, your goals will help us pave the right path from day one. We’d value a few seconds to answer these 5 questions—it moves you up the priority list and helps us build your personalised roadmap before we even open the doors.
                    </motion.p>
                )}
            </motion.div>

            {/* Injected Content (SurveyStack) */}
            {children}
        </motion.div>
    );
};
