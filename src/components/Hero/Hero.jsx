import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { WaitlistEngine } from './WaitlistEngine';
import { SurveyStack } from './SurveyStack';
import { PriorityOdometer, PriorityMessage } from './PriorityDisplay';

/**
 * Hero Component (Orchestrator)
 * 
 * Manages the high-level state of the Waiting List experience and global background.
 * Delegates logic to:
 * - WaitlistEngine (Form)
 * - PriorityDisplay (Success Visuals & Odometer)
 * - SurveyStack (Profiling Questions)
 */
export const Hero = () => {
    // UNIFIED DATA ENGINE STATE (PriorityEngine)
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        rank: 1241, // Initial rank
        responses: {} // { questionId: { selection: '', customText: '' } }
    });

    const [errors, setErrors] = useState({ name: '', email: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | survey_submitted
    const [step, setStep] = useState(0);

    // 5-Question Data Configuration
    const questions = [
        {
            id: 'path',
            question: "Where are you currently on the path?",
            options: ["Still studying", "Fresh Grad/Graduate", "Career Switcher", "Feeling stuck", "Something else..."]
        },
        {
            id: 'noise',
            question: "What is the loudest 'noise' holding you back right now?",
            options: ["Imposter syndrome", "AI fear", "Lack of direction", "Networking anxiety", "Something else..."]
        },
        {
            id: 'success_3mo',
            question: "In a perfect world, what does 'Success' look like for you 3 months from now?",
            options: ["A higher salary", "A sense of purpose", "A clear 1-year roadmap", "Interview confidence", "Something else..."]
        },
        {
            id: 'coaching_style',
            question: "Which of our 5 Coaching Styles feels like the right 'frequency' for you today?",
            options: ["The Creative", "The Analyst", "The Commander", "The Sage", "The Mix", "I'm not sure yet..."]
        },
        {
            id: 'one_thing',
            question: "What are you hoping to achieve with pAIve?",
            options: ["Finding the right roles", "CV optimization", "Emotional support", "Salary negotiation", "Something else..."]
        }
    ];

    const currentQuestion = questions[step];

    // Logic: Form Validation
    const validateName = (name) => /^[a-zA-Z\s]{2,}$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateName(userData.name)) {
            newErrors.name = "Please put in a valid name so we know how to address you, thank you!";
        }
        if (!validateEmail(userData.email)) {
            newErrors.email = "We need a working email to pave your path.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    // Logic: Survey Navigation
    const handleNext = () => {
        const currentResponse = userData.responses[currentQuestion?.id] || {};
        const isCustom = currentResponse.selection === "Something else...";

        if (!currentResponse.selection) return;
        if (isCustom && !currentResponse.customText?.trim()) return;

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // FINALIZE PROFILE & TRIGGER RANK JUMP
            setUserData(prev => ({ ...prev, rank: 124 }));
            setStatus('survey_submitted');
            console.log("Final User Data for DB:", userData);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <section id="waitlist-section" className="relative pt-24 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/20 rounded-full blur-[120px] -z-10" />

            {/* Version Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm font-medium mb-6">
                    v2026.1.23 Release
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-8xl font-bold tracking-tight mb-6 max-w-5xl"
            >
                The <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo via-purple-500 to-brand-cyan">Myers-Briggs</span> of Careers
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed"
            >
                Meet pAIve, your AI career partner that guides you through industry pivots, imposter syndrome, and finding your true career suitability.
            </motion.p>

            {/* INTERACTIVE CARD AREA (The Application Core) */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full max-w-2xl relative z-10"
            >
                <div className="glass-panel rounded-xl p-1">
                    <div className="bg-space-black/50 rounded-lg p-6 md:p-8 min-h-[380px] flex flex-col justify-center relative">

                        {/* ABSOLUTE TOP BAR: Status & Rank */}
                        <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-none">
                            {(status === 'idle' || status === 'submitting') && (
                                <>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <span className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-xs text-gray-500 font-mono">Quick Start</div>
                                </>
                            )}
                            {(status === 'success' || status === 'survey_submitted') && (
                                <PriorityOdometer rank={userData.rank} />
                            )}
                        </div>

                        {/* CONTENT AREA: Form OR Success Message */}
                        <AnimatePresence mode='wait'>
                            {(status === 'success' || status === 'survey_submitted') ? (
                                <PriorityMessage
                                    key="success-message"
                                    name={userData.name}
                                    status={status}
                                >
                                    {/* Inject Survey INTO PriorityMessage (Composition) */}
                                    {status === 'success' && (
                                        <SurveyStack
                                            key="survey-stack"
                                            questions={questions}
                                            step={step}
                                            userData={userData}
                                            setUserData={setUserData}
                                            onNext={handleNext}
                                            onBack={handleBack}
                                        />
                                    )}
                                </PriorityMessage>
                            ) : (
                                <WaitlistEngine
                                    key="waitlist-engine"
                                    userData={userData}
                                    setUserData={setUserData}
                                    onSubmit={handleSubmit}
                                    errors={errors}
                                    status={status}
                                />
                            )}
                        </AnimatePresence>

                        {/* Footer (only visible when in form mode) */}
                        {(status === 'idle' || status === 'submitting') && (
                            <div className="mt-6 text-left text-xs text-gray-500 font-mono leading-relaxed">
                                We'll send you an email when pAIve is ready for you to use! In the meantime, feel free to scroll and learn more about our vision for pAIve.
                            </div>
                        )}

                    </div>
                </div>
            </motion.div>
        </section >
    );
};
